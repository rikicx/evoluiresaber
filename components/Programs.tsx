"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { Photo } from "./ui/Photo";
import { IconArrowRight, IconBlocks, IconHeart, IconPencil } from "./ui/icons";

const programs = [
  {
    name: "Berçário",
    icon: IconHeart,
    tone: "coral",
    photo: "/images/escola_04.webp",
    photoAlt: "Crianças pequenas brincando no chão da sala do Colégio Evoluir e Saber",
    blurb:
      "Os primeiros passos longe do colo de casa acontecem com afeto, rotina previsível e muita presença. Um espaço tranquilo para o bebê se sentir seguro para explorar.",
    points: ["Acolhimento na adaptação", "Cuidado e higiene com carinho", "Estímulos sensoriais e afeto"],
  },
  {
    name: "Educação Infantil",
    icon: IconBlocks,
    tone: "sun",
    photo: "/images/escola_13.webp",
    photoAlt: "Área externa com brinquedos e piso emborrachado no Colégio Evoluir e Saber",
    blurb:
      "A fase de descobrir o mundo brincando. As crianças exploram linguagens, criam, imaginam e aprendem a conviver — sempre no seu próprio ritmo.",
    points: ["Brincar como forma de aprender", "Autonomia e criatividade", "Convivência e socialização"],
  },
  {
    name: "Ensino Fundamental I",
    icon: IconPencil,
    tone: "sky",
    photo: "/images/escola_12.webp",
    photoAlt: "Corredor e pátio coberto do Colégio Evoluir e Saber",
    blurb:
      "Do 1º ao 5º ano, a curiosidade ganha método. Leitura, escrita, raciocínio e projetos caminham junto com o desenvolvimento socioemocional e ético.",
    points: ["Alfabetização com sentido", "Pensamento crítico e projetos", "Professor como mediador"],
  },
];

const toneMap: Record<string, string> = {
  coral: "bg-coral-light text-coral-dark",
  sun: "bg-sun-light text-sun-dark",
  sky: "bg-sky-light text-sky-dark",
};

export function Programs() {
  return (
    <section id="segmentos" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Segmentos"
          sticker="Cada fase no seu tempo"
          stickerTone="sun"
          title={
            <>
              Uma turma certa para cada{" "}
              <span className="text-coral">fase da infância</span>
            </>
          }
          intro="Do berçário ao Ensino Fundamental I, cada etapa tem seu tempo, seu espaço e um jeito próprio de acolher."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="card flex h-full flex-col overflow-hidden !p-0"
              >
                <div className="relative h-44 w-full">
                  <Photo
                    src={p.photo}
                    alt={p.photoAlt}
                    rounded="rounded-none"
                    className="h-full w-full !shadow-none"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <span
                    className={`absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-soft ${
                      toneMap[p.tone].split(" ")[1]
                    }`}
                  >
                    <p.icon className="h-7 w-7" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl">{p.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-sm font-semibold text-ink-soft"
                      >
                        <span
                          className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                            toneMap[p.tone].split(" ")[0]
                          }`}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(
                      `Olá! Gostaria de saber mais sobre o segmento ${p.name} no Colégio Evoluir e Saber.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-coral transition-colors hover:text-coral-dark"
                  >
                    Agende uma visita
                    <IconArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
