"use client";

import { useEffect, useState } from "react";
import { formatDateTime, formatRelativeTime, formatDate } from "@/lib/utils";

type TimeFormat = "datetime" | "relative" | "date";

const FORMATTERS: Record<TimeFormat, (d: Date) => string> = {
  datetime: formatDateTime,
  relative: formatRelativeTime,
  date: formatDate,
};

/**
 * Renders a formatted timestamp only after the component has mounted on the
 * client. On the server (and the first client render) it emits a stable
 * placeholder so the SSR and hydration output always match, avoiding the
 * "server rendered text didn't match the client" hydration error caused by
 * time-based values (Date.now() drift, locale/minute boundaries).
 */
export function ClientTime({
  date,
  format = "datetime",
  placeholder = "",
  className,
  style,
}: {
  date: Date;
  format?: TimeFormat;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const text = mounted ? FORMATTERS[format](date) : placeholder;

  return (
    <span className={className} style={style} suppressHydrationWarning>
      {text}
    </span>
  );
}
