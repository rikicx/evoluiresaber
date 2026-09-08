"use client";

import { motion } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";
import { Photo } from "./ui/Photo";
import { Parallax } from "./ui/Parallax";
import { Blob, Sticker } from "./ui/decor";
import {
  IconArrowRight,
  IconHeart,
  IconPencil,
  IconStar,
  IconSun,
} from "./ui/icons";

const reveal = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay: 0.1 + i * 0.1,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36"
    >
      <Parallax
        speed={60}
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 opacity-70"
      >
        <Blob color="#FFE29A" />
      </Parallax>
      <Parallax
        speed={-50}
        className="pointer-events-none absolute -right-28 top-40 -z-10 h-80 w-80 opacity-60"
      >
        <Blob color="#CDE8F6" />
      </Parallax>

      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span {...reveal(0)} className="eyebrow">
            <IconSun className="h-4 w-4 text-sun-dark" />
            {site.foundedLabel} · {site.address.district}, São Paulo
          </motion.span>

          <motion.h1
            {...reveal(1)}
            className="mt-5 text-4xl leading-[1.08] sm:text-5xl md:text-6xl"
          >
            Um lugar seguro para{" "}
            <span className="relative whitespace-nowrap text-coral">
              aprender
              <svg
                viewBox="0 0 200 16"
                className="absolute -bottom-2 left-0 w-full text-sun"
                aria-hidden="true"
              >
                <path
                  d="M3 11c40-9 120-11 194-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            , brincar e evoluir
          </motion.h1>

          <motion.p
            {...reveal(2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {site.description} Um espaço onde cada criança é recebida com carinho,
            escuta e incentivo para descobrir o mundo no seu próprio ritmo.
          </motion.p>

          <motion.div
            {...reveal(3)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar uma visita
            </a>
            <a href="#o-colegio" className="btn-secondary">
              Conhecer a escola
              <IconArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            {...reveal(4)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-ink-muted"
          >
            <span className="inline-flex items-center gap-2">
              <IconHeart className="h-4 w-4 text-coral" /> Berçário
            </span>
            <span className="inline-flex items-center gap-2">
              <IconStar className="h-4 w-4 text-sun-dark" /> Educação Infantil
            </span>
            <span className="inline-flex items-center gap-2">
              <IconPencil className="h-4 w-4 text-sky-dark" /> Ensino Fundamental I
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <Sticker
            label="Matrículas 2026 abertas"
            tone="coral"
            className="-right-2 top-2 z-20 rotate-6 sm:-right-6"
          />
          <Photo
            src="/images/escola_04.webp"
            alt="Crianças do Colégio Evoluir e Saber brincando juntas na sala"
            priority
            blob
            sizes="(max-width: 1024px) 90vw, 460px"
            className="aspect-[4/5] w-full drop-shadow-[0_40px_60px_rgba(44,58,75,0.18)]"
          />

          <motion.div
            className="absolute -left-4 top-10 rounded-3xl bg-white px-4 py-3 shadow-soft ring-1 ring-ink/5 sm:-left-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-display text-sm font-extrabold text-ink">
              Desde 2007
            </span>
            <span className="block text-xs font-semibold text-ink-muted">
              cuidando de cada fase
            </span>
          </motion.div>

          <motion.div
            className="absolute -right-3 bottom-14 flex items-center gap-2 rounded-3xl bg-white px-4 py-3 shadow-soft ring-1 ring-ink/5 sm:-right-8"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-mint-light text-mint-dark">
              <IconSun className="h-5 w-5" />
            </span>
            <span className="text-xs font-bold leading-tight text-ink">
              {site.hoursShort}
              <span className="block font-semibold text-ink-muted">
                todos os dias úteis
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
