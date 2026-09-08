import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Squiggle, Sticker } from "./decor";

export function SectionHeading({
  eyebrow,
  sticker,
  stickerTone = "grape",
  title,
  intro,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  sticker?: string;
  stickerTone?: "sun" | "sky" | "mint" | "coral" | "grape";
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={`relative ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      } ${className}`}
    >
      {sticker ? (
        <Sticker
          label={sticker}
          tone={stickerTone}
          className={`-top-7 -rotate-6 ${
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
          }`}
        />
      ) : null}
      {eyebrow ? <span className="eyebrow mb-4">{eyebrow}</span> : null}
      <h2 className="text-[2rem] leading-[1.05] sm:text-[2.6rem] md:text-[3rem]">
        {title}
      </h2>
      <Squiggle
        className={`mt-4 h-3 w-28 text-coral ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>
      ) : null}
    </Reveal>
  );
}
