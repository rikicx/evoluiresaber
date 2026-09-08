"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { WaveDivider } from "./ui/decor";
import { IconBook, IconHands, IconHeart, IconSparkle } from "./ui/icons";

const pillars = [
  {
    icon: IconHeart,
    title: "Aprender a ser",
    text: "Cuidar da identidade, da autoestima e das emoções, para que cada criança se reconheça capaz e valorizada.",
    tone: "text-coral bg-coral-light",
  },
  {
    icon: IconHands,
    title: "Aprender a fazer",
    text: "Colocar a mão na massa: experimentar, criar, errar e tentar de novo em projetos e atividades práticas.",
    tone: "text-sun-dark bg-sun-light",
  },
  {
    icon: IconBook,
    title: "Aprender a conhecer",
    text: "Despertar a curiosidade e o pensamento crítico, com o conhecimento fazendo sentido no mundo real.",
    tone: "text-sky-dark bg-sky-light",
  },
  {
    icon: IconSparkle,
    title: "Aprender a conviver",
    text: "Praticar empatia, respeito e cooperação — porque crescer junto é parte essencial de aprender.",
    tone: "text-mint-dark bg-mint-light",
  },
];

export function Pedagogy() {
  return (
    <section id="proposta" className="relative bg-ink py-24 text-white sm:py-32">
      <WaveDivider flip fill="#FFF9EF" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !bg-white/10 !text-white/80 !ring-white/10">
            Proposta pedagógica
          </span>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl md:text-[2.6rem]">
            Formação integral, do coração à razão
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Buscamos desenvolver competências cognitivas, socioemocionais e
            éticas ao mesmo tempo. O professor atua como mediador e a
            aprendizagem acontece por experiências, projetos e muita
            criatividade.
          </p>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <StaggerItem key={p.title} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="flex h-full flex-col rounded-4xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${p.tone}`}
                >
                  <p.icon className="h-7 w-7" />
                </span>
                <span className="mt-5 font-display text-sm font-bold text-white/40">
                  0{i + 1}
                </span>
                <h3 className="mt-1 text-xl text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {p.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-white/50">
          Priorizamos o pensamento e a criatividade, valorizando o aprender a
          ser, a fazer, a conhecer e a conviver — a filosofia que orienta a
          escola desde 2007.
        </p>
      </div>

      <WaveDivider fill="#FFF9EF" />
    </section>
  );
}
