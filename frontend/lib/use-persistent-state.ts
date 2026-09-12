"use client";

import { useEffect, useRef, useState } from "react";

// ISO-8601 date strings look like 2026-09-07T05:31:00.000Z — revive them to Date.
const ISO_DATE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

function reviver(_key: string, value: unknown) {
  if (typeof value === "string" && ISO_DATE.test(value)) {
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return value;
}

function readStored<T>(key: string): T | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return undefined;
    return JSON.parse(raw, reviver) as T;
  } catch {
    return undefined;
  }
}

function write<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full / unavailable — ignore */
  }
}

/**
 * Persisted state that reads storage in the initializer.
 *
 * The correct value is present from the FIRST render, so it can never be
 * clobbered by the default. Only safe for state that does NOT affect the
 * server-rendered markup, otherwise use `usePersistentStateAfterMount`.
 */
export function usePersistentState<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const stored = readStored<T>(key);
    return stored !== undefined ? stored : initial;
  });

  useEffect(() => {
    write(key, value);
  }, [key, value]);

  return [value, setValue];
}

/**
 * Persisted state that is safe for values rendered into the DOM.
 *
 * The first render uses `initial` (matching the server), then the stored value
 * is applied in a mount effect — so there is no hydration mismatch. Writes are
 * suppressed until AFTER the stored value has been restored, so the default can
 * never overwrite existing data. Date instances are preserved across reloads.
 */
export function usePersistentStateAfterMount<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initial);
  // `null` = not yet restored; writes stay disabled until this becomes true.
  const restored = useRef(false);

  // Restore once on mount (client only).
  useEffect(() => {
    const stored = readStored<T>(key);
    if (stored !== undefined) setValue(stored);
    // Enable writes on the NEXT tick, after the restored value has committed,
    // so this mount's default value is never written back over stored data.
    const id = setTimeout(() => { restored.current = true; }, 0);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Persist only genuine user changes (after restore has completed).
  useEffect(() => {
    if (!restored.current) return;
    write(key, value);
  }, [key, value]);

  return [value, setValue];
}
