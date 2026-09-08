import Image from "next/image";
import logo from "@/public/images/logo-oficial.webp";

/**
 * Logo oficial do Colégio Evoluir e Saber (selo circular com o leque de lápis),
 * extraído do site atual da escola.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="Colégio Evoluir e Saber"
      className={className}
      priority
      sizes="64px"
    />
  );
}

export function Logo({
  compact = false,
  onDark = false,
  showText = true,
}: {
  compact?: boolean;
  onDark?: boolean;
  showText?: boolean;
}) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <LogoMark
        className={`shrink-0 rounded-full bg-white p-1 shadow-soft ring-1 ring-ink/5 transition-all duration-300 ${
          compact ? "h-10 w-10" : "h-10 w-10 sm:h-12 sm:w-12"
        }`}
      />
      {showText ? (
        <span className="min-w-0 leading-none">
          <span
            className={`block truncate font-display font-extrabold tracking-tight transition-all duration-300 ${
              compact ? "text-base" : "text-base sm:text-lg"
            } ${onDark ? "text-white" : "text-ink"}`}
          >
            Evoluir <span className="text-coral">e Saber</span>
          </span>
          <span
            className={`hidden truncate font-sans text-[10px] font-bold uppercase tracking-[0.16em] sm:block ${
              onDark ? "text-white/70" : "text-ink-muted"
            }`}
          >
            Colégio · Vila Moraes
          </span>
        </span>
      ) : null}
    </span>
  );
}
