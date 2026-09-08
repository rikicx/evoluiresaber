import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  /** Organic blob mask, like the reference template. */
  blob?: boolean;
  /** Asymmetric radius (one sharp corner) for featured images. */
  featured?: boolean;
  priority?: boolean;
  sizes?: string;
  rounded?: string;
};

/**
 * Real school photo (from the current website) framed with the playful,
 * organic shapes used across the site.
 */
export function Photo({
  src,
  alt,
  className = "",
  blob = false,
  featured = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = "rounded-4xl",
}: PhotoProps) {
  const shape = blob
    ? "[border-radius:63%_37%_54%_46%/55%_48%_52%_45%]"
    : featured
      ? "[border-radius:2.75rem_0.75rem_2.75rem_0.75rem]"
      : rounded;

  return (
    <div
      className={`relative overflow-hidden bg-cream-200 shadow-soft ${shape} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
