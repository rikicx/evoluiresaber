import { site } from "@/lib/site";
import { Reveal } from "./ui/Reveal";
import { Parallax } from "./ui/Parallax";
import { Photo } from "./ui/Photo";
import { Blob, Sticker } from "./ui/decor";
import { IconBook, IconHands, IconSparkle, IconSprout } from "./ui/icons";

const philosophy = [
  { icon: IconSparkle, label: "Aprender a ser" },
  { icon: IconHands, label: "Aprender a fazer" },
  { icon: IconBook, label: "Aprender a conhecer" },
  { icon: IconSprout, label: "Aprender a conviver" },
];

export function About() {
  return (
    <section id="o-colegio" className="section overflow-hidden">
      <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <Parallax
            speed={30}
            className="pointer-events-none absolute -left-16 -top-10 -z-10 h-64 w-64 opacity-70"
          >
            <Blob color="#D6F0E4" />
          </Parallax>

          <div className="relative">
            <Sticker
              label="Nossa história"
              tone="mint"
              className="-left-3 -top-4 z-20 -rotate-3"
            />
            <Photo
              src="/images/escola_09.webp"
              alt="Fachada do Colégio Evoluir e Saber, na Vila Moraes"
              featured
              sizes="(max-width: 1024px) 90vw, 520px"
              className="aspect-[4/3] w-full ring-1 ring-ink/5"
            />
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            {[
              { n: "2007", l: "desde a fundação" },
              { n: "3", l: "segmentos" },
              { n: "6h45", l: "abrimos as portas" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-ink/5">
                <p className="font-display text-2xl font-extrabold text-coral">
                  {s.n}
                </p>
                <p className="text-xs font-semibold text-ink-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <span className="eyebrow">Quem somos</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Uma escola de bairro que cresceu sem perder o{" "}
            <span className="text-coral">colo</span>
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              O {site.name} foi fundado em <strong>junho de 2007</strong>, com o
              nome original <strong>EVOLUIR</strong>. Desde então, acompanha
              famílias da Vila Moraes e de toda a Zona Sul de São Paulo,
              oferecendo uma educação atenta ao ritmo de cada criança.
            </p>
            <p>
              Acreditamos que educar é também acolher. Por isso, cuidamos do
              crescimento completo dos pequenos — corpo, mente, inteligência e
              emoções — em parceria próxima com quem convive com eles todos os
              dias: a família.
            </p>
            <p>
              Valorizamos o pensamento e a criatividade e nos guiamos por uma
              filosofia simples de dizer e profunda de viver:
            </p>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3">
            {philosophy.map((p) => (
              <li
                key={p.label}
                className="flex items-center gap-3 rounded-3xl bg-cream-200/60 px-4 py-3 font-display font-bold text-ink"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-coral shadow-soft">
                  <p.icon className="h-5 w-5" />
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
