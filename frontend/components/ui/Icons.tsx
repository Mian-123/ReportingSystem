"use client";
import React from "react";

type IconProps = { size?: number; className?: string; color?: string };

export const IconHome = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

export const IconMap = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="3,6 9,3 15,6 21,3 21,18 15,21 9,18 3,21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

export const IconClipboard = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="9" y="2" width="6" height="4" rx="1" />
    <path d="M17 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <line x1="12" y1="11" x2="16" y2="11" /><line x1="12" y1="16" x2="16" y2="16" />
    <line x1="8" y1="11" x2="8.01" y2="11" /><line x1="8" y1="16" x2="8.01" y2="16" />
  </svg>
);

export const IconBell = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const IconUser = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const IconCamera = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const IconMapPin = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconCheck = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export const IconArrowLeft = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12,19 5,12 12,5" />
  </svg>
);

export const IconAlertTriangle = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

export const IconChat = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconTrendingUp = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

export const IconSettings = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const IconUpload = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17,8 12,3 7,8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

export const IconX = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconPlus = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const IconMerge = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 3h5v5" /><path d="M21 3 9 15" /><path d="M9 3H4v5" /><path d="M4 3l6 6" />
    <path d="M12 12v9" />
  </svg>
);

export const IconAI = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3H5a3 3 0 0 0 0 6h1a3 3 0 0 0 3 3v1a3 3 0 0 0 6 0v-1a3 3 0 0 0 3-3h1a3 3 0 0 0 0-6h-1a3 3 0 0 0-3-3V5a3 3 0 0 0-3-3z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const IconZap = ({ size = 20, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
);

// Category badge — dark pill shape matching Digital Karachi screenshot style
type CatIcon = "road" | "waste" | "water" | "light" | "flood" | "hazard" | "drain" | "infra" | "encroach" | "other";
const CATEGORY_META: Record<string, { letter: string; bg: string; icon: CatIcon; emoji: string }> = {
  "Broken Road":              { letter: "BR", bg: "#16233A", icon: "road",     emoji: "🕳️" },
  "Garbage / Waste":          { letter: "GW", bg: "#1a3320", icon: "waste",    emoji: "🗑️" },
  "Waste Management":         { letter: "WM", bg: "#1a3320", icon: "waste",    emoji: "🗑️" },
  "Sewerage / Water":         { letter: "SW", bg: "#0E2A4E", icon: "water",    emoji: "💧" },
  "Streetlight":              { letter: "SL", bg: "#3a2a00", icon: "light",    emoji: "💡" },
  "Flooding / Standing Water":{ letter: "FL", bg: "#0a1f3c", icon: "flood",    emoji: "🌊" },
  "Safety Hazard":            { letter: "SH", bg: "#3a0a0a", icon: "hazard",   emoji: "⚠️" },
  "Drainage":                 { letter: "DR", bg: "#1a2744", icon: "drain",    emoji: "🔧" },
  "Infrastructure":           { letter: "IN", bg: "#1a1a2e", icon: "infra",    emoji: "🏗️" },
  "Encroachment":             { letter: "EN", bg: "#2a1a00", icon: "encroach", emoji: "🚧" },
  "Other":                    { letter: "OT", bg: "#2a2a2a", icon: "other",    emoji: "📋" },
};

// Simple white line-icon per problem type (rendered inside the colored pill).
function CategoryGlyph({ icon, size = 18 }: { icon: CatIcon; size?: number }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "road":     return (<svg {...p}><path d="M4 20 8 4M20 20 16 4"/><path d="M12 5v2M12 11v2M12 17v2"/></svg>);
    case "waste":    return (<svg {...p}><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 15h10l1-15"/><path d="M10 10v7M14 10v7"/></svg>);
    case "water":    return (<svg {...p}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>);
    case "light":    return (<svg {...p}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/></svg>);
    case "flood":    return (<svg {...p}><path d="M2 12c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/><path d="M2 18c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2"/></svg>);
    case "hazard":   return (<svg {...p}><path d="M12 3 2 20h20L12 3z"/><path d="M12 9v5M12 17h.01"/></svg>);
    case "drain":    return (<svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"/></svg>);
    case "infra":    return (<svg {...p}><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg>);
    case "encroach": return (<svg {...p}><path d="M4 20h16"/><path d="M7 20 10 6h4l3 14"/><path d="M9 12h6"/></svg>);
    default:         return (<svg {...p}><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h3"/></svg>);
  }
}

export function CategoryBadge({
  category,
  size = "md",
}: {
  category: string;
  size?: "sm" | "md" | "lg";
}) {
  const meta = CATEGORY_META[category] || { letter: category.substring(0, 2).toUpperCase(), bg: "#16233A", icon: "other" as CatIcon, emoji: "📋" };
  const dims =
    size === "lg" ? "w-14 h-9 rounded-2xl" :
    size === "md" ? "w-12 h-8 rounded-xl" :
    "w-10 h-6 rounded-lg";
  const emojiSize = size === "lg" ? 22 : size === "md" ? 18 : 15;

  return (
    <div
      className={`${dims} flex items-center justify-center flex-shrink-0`}
      style={{ background: meta.bg }}
      aria-label={category}
    >
      <span style={{ fontSize: emojiSize, lineHeight: 1 }}>{meta.emoji}</span>
    </div>
  );
}
