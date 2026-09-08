import { site } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";
import {
  IconBook,
  IconHeart,
  IconSparkle,
  IconSun,
} from "./ui/icons";

const moments = [
  {
    icon: IconSun,
    tag: "Chegada",
    title: "Um bom-dia que acolhe",
    text: "As portas abrem às 6h45. Cada criança é recebida pelo nome, com tempo para se despedir da família e entrar no seu ritmo.",
  },
  {
    icon: IconBook,
    tag: "Ao longo do dia",
    title: "Brincar, explorar e aprender",
    text: "Atividades, projetos e brincadeiras que despertam a curiosidade e desenvolvem novas habilidades, sempre com mediação atenta dos educadores.",
  },
  {
    icon: IconHeart,
    tag: "Cuidado diário",
    title: "Atenção aos detalhes",
    text: "Alimentação, descanso, higiene e afeto fazem parte da rotina. Os pequenos são acompanhados de perto em cada necessidade.",
  },
  {
    icon: IconSparkle,
    tag: "Convivência",
    title: "Crescer junto dos amigos",
    text: "Momentos de grupo para praticar empatia, dividir, esperar a vez e construir amizades — aprendizados que ficam para a vida.",
  },
];

export function Routine() {
  return (
    <section className="section bg-cream-200/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Rotina e cuidado"
          sticker="Todo dia com carinho"
          stickerTone="grape"
          title={
            <>
              Um dia inteiro de{" "}
              <span className="text-coral">acolhimento</span>, das 6h45 às 18h30
            </>
          }
          intro="A rotina traz previsibilidade e segurança para as crianças — e tranquilidade para as famílias que deixam seus filhos aqui todos os dias."
        />

        <Stagger className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {moments.map((m) => (
            <StaggerItem key={m.title} className="h-full">
              <div className="card card-hover flex h-full gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center self-start rounded-2xl bg-sun-light text-sun-dark">
                  <m.icon className="h-7 w-7" />
                </span>
                <div>
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-coral">
                    {m.tag}
                  </span>
                  <h3 className="mt-1 text-xl">{m.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {m.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-center text-sm text-ink-muted">
          {site.hours}. Os horários de cada turma são combinados com a família na
          matrícula.
        </p>
      </div>
    </section>
  );
}
