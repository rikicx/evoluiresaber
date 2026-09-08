import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";
import {
  IconFamily,
  IconHeart,
  IconHome,
  IconLeaf,
  IconPalette,
  IconShield,
} from "./ui/icons";

const reasons = [
  {
    icon: IconHeart,
    title: "Recepção que abraça",
    text: "Receber bem é o nosso jeito de valorizar cada pessoa e sua história. O conforto e a alegria das crianças vêm de um espaço cheio de dedicação e cuidado.",
  },
  {
    icon: IconHome,
    title: "Infraestrutura pensada para crianças",
    text: "Cada cantinho foi organizado com carinho para que os pequenos possam brincar, aprender e crescer com segurança, do berçário ao Fundamental I.",
  },
  {
    icon: IconLeaf,
    title: "Respeito ao ambiente",
    text: "Aprender a cuidar da natureza é uma aventura diária: amar as plantas, proteger os animais e entender como conviver bem com o planeta.",
  },
  {
    icon: IconShield,
    title: "Ensinando valores",
    text: "Todos os dias as crianças aprendem a ser gentis, a se colocar no lugar do amigo e a ajudar — fazendo do respeito e da amizade um hábito.",
  },
  {
    icon: IconPalette,
    title: "Criatividade e pensamento",
    text: "Priorizamos o pensamento e a criatividade, com atividades que despertam a curiosidade e o prazer de descobrir coisas novas.",
  },
  {
    icon: IconFamily,
    title: "Apoio à família",
    text: "Caminhamos junto de quem convive com a criança todos os dias, com diálogo aberto e uma relação próxima entre escola e família.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Por que escolher"
          sticker="Feito com amor"
          stickerTone="coral"
          title={
            <>
              Motivos para as famílias{" "}
              <span className="text-coral">confiarem</span> no Evoluir e Saber
            </>
          }
          intro="Os primeiros anos são o começo de uma grande aventura. Nosso papel é ajudar cada criança a se sentir confiante para explorar o mundo com alegria."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <StaggerItem key={r.title} className="h-full">
              <div className="card card-hover h-full">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream-200 text-coral">
                  <r.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {r.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
