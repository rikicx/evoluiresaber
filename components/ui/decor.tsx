/**
 * Decorative organic shapes used as soft background accents throughout the page.
 * Purely cosmetic — always aria-hidden.
 */

export function Blob({
  className = "",
  color = "#FFE29A",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={color}
        d="M42.3 -63.6C55.9 -55.6 68.2 -44.5 74.6 -30.4C81 -16.3 81.6 0.8 76.7 15.7C71.8 30.6 61.4 43.2 48.6 53.9C35.9 64.6 20.9 73.3 4.2 77.4C-12.6 81.5 -31.1 81 -45.9 72.9C-60.7 64.8 -71.8 49.1 -77.7 32C-83.6 14.9 -84.3 -3.6 -78.9 -19.8C-73.5 -36 -62 -49.9 -48.3 -58C-34.6 -66.1 -18.8 -68.4 -2.3 -65.1C14.2 -61.8 28.7 -71.6 42.3 -63.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <path
        d="M2 12c8-12 16 12 24 0s16-12 24 0 16 12 24 0 16-12 24 0 16 12 20 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sticker({
  label,
  className = "",
  tone = "sun",
}: {
  label: string;
  className?: string;
  tone?: "sun" | "sky" | "mint" | "coral" | "grape";
}) {
  const tones: Record<string, string> = {
    sun: "bg-sun text-ink",
    sky: "bg-sky text-ink",
    mint: "bg-mint text-ink",
    coral: "bg-coral text-white",
    grape: "bg-grape text-ink",
  };
  return (
    <span
      className={`pointer-events-none absolute z-10 select-none rounded-2xl px-3.5 py-1.5 font-display text-sm font-bold shadow-soft ${tones[tone]} ${className}`}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}

export function WaveDivider({
  className = "",
  flip = false,
  fill = "#FFFFFF",
}: {
  className?: string;
  flip?: boolean;
  fill?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${
        flip ? "top-0 rotate-180" : "bottom-0"
      } leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="h-[70px] w-full sm:h-[110px]"
      >
        <path
          fill={fill}
          d="M0 64c120-40 280-52 480-24s360 68 540 56 300-56 420-64v82H0Z"
        />
      </svg>
    </div>
  );
}
