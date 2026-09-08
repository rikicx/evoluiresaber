"use client";

import { site } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { Photo } from "./ui/Photo";
import { IconInstagram } from "./ui/icons";

/** Fotos reais dos ambientes da escola, retiradas do site atual. */
const tiles = [
  {
    src: "/images/escola_09.webp",
    label: "Fachada na Vila Moraes",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { src: "/images/escola_10.webp", label: "Rampa de acesso coberta", span: "" },
  { src: "/images/escola_11.webp", label: "Circulação interna", span: "" },
  {
    src: "/images/escola_13.webp",
    label: "Espaço de brincar ao ar livre",
    span: "sm:col-span-2",
  },
  { src: "/images/escola_12.webp", label: "Pátio com brinquedos", span: "" },
  { src: "/images/escola_04.webp", label: "Hora da brincadeira", span: "" },
];

export function Gallery() {
  return (
    <section id="ambientes" className="section overflow-x-clip">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ambientes"
          sticker="Venha ver de perto"
          stickerTone="sky"
          title={
            <>
              Ambientes pensados para{" "}
              <span className="text-coral">acolher</span> as crianças
            </>
          }
          intro="Salas, espaços de brincar e cantinhos organizados com cuidado para o dia a dia dos pequenos. A melhor forma de conhecer é vindo até a escola."
        />

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal
              key={t.src}
              delay={i * 0.06}
              className={`group relative overflow-hidden rounded-4xl shadow-soft ring-1 ring-ink/5 ${t.span}`}
            >
              <Parallax
                speed={i % 2 ? 16 : -16}
                className="absolute inset-0 scale-[1.15]"
              >
                <Photo
                  src={t.src}
                  alt={`${t.label} — Colégio Evoluir e Saber`}
                  rounded="rounded-none"
                  className="h-full w-full !shadow-none"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </Parallax>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 font-display text-base font-extrabold text-white drop-shadow">
                {t.label}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center justify-between gap-4 rounded-4xl bg-cream-200/60 p-6 text-center sm:flex-row sm:text-left">
          <p className="text-[15px] font-semibold text-ink-soft">
            Quer ver a escola de verdade? Acompanhe o dia a dia no Instagram ou
            agende uma visita para conhecer cada espaço de perto.
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            <IconInstagram className="h-5 w-5" />
            {site.social.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
