import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconHeart(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.35-9.3-8.2C1 8.9 2.4 5.5 5.7 5.1c2-.25 3.6.9 4.3 2.2.7-1.3 2.3-2.45 4.3-2.2 3.3.4 4.7 3.8 3 6.7C19 15.65 12 20 12 20Z" />
    </svg>
  );
}

export function IconStar(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9L12 3Z" />
    </svg>
  );
}

export function IconSun(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function IconCloud(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 18a4 4 0 0 1-.6-7.95A5 5 0 0 1 16 9a3.5 3.5 0 0 1 .5 6.98" />
      <path d="M7 18h9.5" />
    </svg>
  );
}

export function IconPencil(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M15.2 4.8 19.2 8.8M3 21l1-4L16 5a2.8 2.8 0 0 1 4 4L8 21l-4 1Z" />
    </svg>
  );
}

export function IconBlocks(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
      <rect x="8" y="3" width="8" height="8" rx="1.5" />
    </svg>
  );
}

export function IconSprout(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20v-8" />
      <path d="M12 12c0-3 2.4-5 5.5-5 0 3-2.4 5-5.5 5Z" />
      <path d="M12 13c0-3-2.4-5-5.5-5 0 3 2.4 5 5.5 5Z" />
      <path d="M8 20h8" />
    </svg>
  );
}

export function IconBook(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5ZM12 3v15" />
    </svg>
  );
}

export function IconHands(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8 13V6a1.5 1.5 0 0 1 3 0v5" />
      <path d="M11 11V5a1.5 1.5 0 0 1 3 0v6" />
      <path d="M14 11V7a1.5 1.5 0 0 1 3 0v6.5a6.5 6.5 0 0 1-6.5 6.5H10a6 6 0 0 1-5.2-3l-1.4-2.4a1.5 1.5 0 0 1 2.4-1.8L8 14" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IconHome(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-4h4v4" />
    </svg>
  );
}

export function IconLeaf(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 19c0-8 5-13 14-13 0 9-5 14-13 14-.5 0-1 0-1-1Z" />
      <path d="M5 19c3-4 6-6 10-7.5" />
    </svg>
  );
}

export function IconPalette(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.3-1-1.6-1-2.7 0-.9.8-1.6 1.7-1.6H17a4 4 0 0 0 4-4c0-4.2-4-7.7-9-7.7Z" />
      <circle cx="7.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFamily(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="8" cy="7" r="2.4" />
      <circle cx="16" cy="7" r="2.4" />
      <path d="M4 20v-1a4 4 0 0 1 4-4 4 4 0 0 1 4 4v1" />
      <path d="M12 20v-1a4 4 0 0 1 4-4 4 4 0 0 1 4 4v1" />
    </svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconSparkle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3c.6 4 2 5.4 6 6-4 .6-5.4 2-6 6-.6-4-2-5.4-6-6 4-.6 5.4-2 6-6Z" />
      <path d="M18 14c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />
    </svg>
  );
}

export function IconChat(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 14.5v-9Z" />
    </svg>
  );
}

export function IconArrowUp(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 19V6M6 12l6-6 6 6" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconMenu(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconWhatsApp(p: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M16.01 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.6-1.73a12.76 12.76 0 0 0 6.2 1.58h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.04a12.7 12.7 0 0 0-9.04-3.6Zm0 23.02h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.6 10.6 0 0 1-1.62-5.66c0-5.86 4.77-10.63 10.63-10.63 2.84 0 5.5 1.11 7.51 3.12a10.55 10.55 0 0 1 3.11 7.52c0 5.86-4.77 10.63-10.63 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.56-1.58-.95-.85-1.59-1.9-1.77-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.08 1.3 3.29c.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function IconInstagram(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M14 8.5V6.8c0-.9.5-1.3 1.4-1.3H17V2.6l-2.6-.1C11.5 2.5 10 4.2 10 7v1.5H7.5V12H10v9.5h4V12h2.7l.6-3.5H14Z" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3A2.5 2.5 0 0 1 21 22 18 18 0 0 1 3 4a2.5 2.5 0 0 1 3.5-1Z" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
