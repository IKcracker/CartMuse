import type { ReactNode } from "react";

export type IconName =
  | "arrow-right" | "arrow-up-right" | "arrow-left" | "search" | "heart" | "bag"
  | "sparkles" | "menu" | "close" | "check" | "copy" | "filter" | "shield"
  | "tag" | "gift" | "calculator" | "clock" | "instagram" | "globe"
  | "mail" | "chevron-down" | "sliders" | "trend" | "external" | "info"
  | "bookmark" | "star" | "check-circle" | "chevron-right";

const paths: Record<IconName, ReactNode> = {
  "arrow-right": <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  "arrow-left": <><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></>,
  "arrow-up-right": <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
  bag: <><path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
  sparkles: <><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"/><path d="m19 19 .7 1.3L21 21l-1.3.7L19 23l-.7-1.3L17 21l1.3-.7L19 19Z"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="M5 5 19 19M19 5 5 19"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
  filter: <><path d="M4 7h16M7 12h10M10 17h4"/></>,
  shield: <><path d="m12 2 8 4v6c0 5-3.6 8.5-8 10-4.4-1.5-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/></>,
  tag: <><path d="m3 12 9 9 9-9-9-9H3v9Z"/><circle cx="8" cy="8" r="1"/></>,
  gift: <><rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18"/><path d="M12 9H8a3 3 0 1 1 3-4c.4.8 1 4 1 4ZM12 9h4a3 3 0 1 0-3-4c-.4.8-1 4-1 4Z"/></>,
  calculator: <><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v4H8zM8 14h2M14 14h2M8 18h2M14 18h2"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  "chevron-down": <path d="m6 9 6 6 6-6"/>,
  sliders: <><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="currentColor"/><circle cx="15" cy="17" r="2" fill="currentColor"/></>,
  trend: <><path d="m3 17 7-7 4 4 7-8"/><path d="M16 6h5v5"/></>,
  external: <><path d="M13 5h6v6M19 5l-9 9"/><path d="M19 13v6H5V5h6"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7h.01"/></>,
  bookmark: <path d="M5 3h14v18l-7-4-7 4V3Z"/>,
  star: <path d="m12 2 3.1 6.6 7.2.9-5.2 5 .9 7.1-6-3.5-6 3.5.9-7.1-5.2-5 7.2-.9L12 2Z"/>,
  "check-circle": <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
  "chevron-right": <path d="m9 6 6 6-6 6"/>,
};

export function Icon({ name, size = 20, strokeWidth = 1.8, className = "" }: {
  name: IconName; size?: number; strokeWidth?: number; className?: string;
}) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
