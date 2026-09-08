import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";

/** Atividades extracurriculares divulgadas no site atual da escola. */
const activities = [
  {
    name: "Ballet",
    img: "/images/ballet.webp",
    text: "Coordenação, postura e expressão corporal pela dança.",
  },
  {
    name: "Jazz",
    img: "/images/musica.webp",
    text: "Ritmo, criatividade e autoestima com muita energia.",
  },
  {
    name: "Natação",
    img: "/images/natacao.webp",
    text: "Condicionamento, coordenação e segurança na água.",
  },
  {
    name: "Robótica",
    img: "/images/robot.webp",
    text: "Raciocínio lógico e trabalho em equipe brincando com tecnologia.",
  },
  {
    name: "Futebol",
    img: "/images/futebol.webp",
    text: "Movimento, espírito coletivo e amizades no gramado.",
  },
];

export function ExtraActivities() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Além da sala de aula"
          sticker="Pra gastar energia"
          stickerTone="mint"
          title={
            <>
              Atividades que ampliam o{" "}
              <span className="text-coral">repertório</span> das crianças
            </>
          }
          intro="Opções extracurriculares para descobrir talentos, fazer amigos e se divertir dentro da própria escola."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {activities.map((a) => (
            <StaggerItem key={a.name} className="h-full">
              <div className="card card-hover h-full !p-5 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream-200">
                  <Image
                    src={a.img}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 object-contain"
                  />
                </span>
                <h3 className="mt-3 text-lg">{a.name}</h3>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-ink-muted">
                  {a.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
