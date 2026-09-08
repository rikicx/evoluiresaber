"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";
import { IconStar } from "./ui/icons";

/**
 * Avaliações reais de famílias publicadas no Google e exibidas no site atual
 * da escola (widget "Declaração dos pais"). Texto mantido fiel ao original;
 * trechos longos aparecem abreviados com reticências, como no site.
 */
const reviews = [
  {
    name: "Bruna C. Stefano Sleiman Ali",
    when: "há 2 anos",
    text: "Melhor escolha que fizemos para ser a primeira escola da nossa filha. Profissionais acolhedoras, atenciosas, atentas e muito carinhosas!!!",
  },
  {
    name: "Debora Souza Barros",
    when: "há 2 anos",
    text: "Meu filho vai fazer 10 anos e está na Evoluir desde os 5 meses de vida. Amamos a escola e o carinho…",
  },
  {
    name: "Priscila Rodrigues",
    when: "há 2 anos",
    text: "Super recomendo o colégio, meu filho foi muito bem acolhido por toda a equipe. O pedagógico é excelente…",
  },
  {
    name: "Jaqueline Jensen",
    when: "há 2 anos",
    text: "Profissionais muito preparados e extremamente dedicados ao cuidado dos pequenos.",
  },
  {
    name: "Tamires Paula",
    when: "há 3 anos",
    text: "Colégio maravilhoso, super indico! Meus 2 filhos já estudaram, eu amo. A Administração é muito organizada e meus filhos sentem muita falta…",
  },
  {
    name: "Gerson Vieira",
    when: "há 3 anos",
    text: "Escola maravilhosa, com professores dedicados e ambiente acolhedor.",
  },
  {
    name: "Vanessa Ramos",
    when: "há 2 anos",
    text: "Minha filha iniciou o ano letivo muito insegura, pois havia saído de uma escola que ela gostava…",
  },
  {
    name: "Henrique Silva",
    when: "há 3 anos",
    text: "Excelente pedagogia e profissionais.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

const avatarTones = [
  "bg-coral-light text-coral-dark",
  "bg-sky-light text-sky-dark",
  "bg-mint-light text-mint-dark",
  "bg-sun-light text-sun-dark",
  "bg-grape-light text-grape",
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-sun" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="section overflow-x-clip">
      <div className="container-x">
        <SectionHeading
          eyebrow="Declaração dos pais"
          sticker="Quem já vive a escola"
          stickerTone="sun"
          title={<>Olha o que os pais dizem da nossa escola</>}
          intro="Avaliações reais de famílias no Google — as mesmas publicadas no site da escola."
        />

        <Reveal className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-4xl bg-white px-6 py-4 shadow-soft ring-1 ring-ink/5">
          <span className="font-display text-3xl font-extrabold text-ink">
            Excelente
          </span>
          <span className="h-10 w-px bg-ink/10" />
          <span>
            <Stars />
            <span className="mt-1 block text-xs font-semibold text-ink-muted">
              com base em 20 avaliações no Google
            </span>
          </span>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <StaggerItem key={r.name} className="h-full">
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="card flex h-full flex-col !p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-extrabold ${
                      avatarTones[i % avatarTones.length]
                    }`}
                    aria-hidden="true"
                  >
                    {initials(r.name)}
                  </span>
                  <figcaption className="min-w-0">
                    <span className="block truncate font-display text-sm font-bold text-ink">
                      {r.name}
                    </span>
                    <span className="text-xs font-semibold text-ink-muted">
                      {r.when}
                    </span>
                  </figcaption>
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-auto h-5 w-5 shrink-0"
                    aria-label="Avaliação do Google"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-7.9Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.9 0 5.3-1 7.1-2.6l-3.6-2.7c-1 .7-2.3 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.5v2.8A11 11 0 0 0 12 23Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M6.2 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.5a11 11 0 0 0 0 9.8l3.7-2.8Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.5c1.5 0 2.9.5 4 1.5l3-3A11 11 0 0 0 2.5 7.4l3.7 2.8C7 7.3 9.3 5.5 12 5.5Z"
                    />
                  </svg>
                </div>
                <Stars />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  “{r.text}”
                </blockquote>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver todas as avaliações no Google
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Acompanhar no Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}
