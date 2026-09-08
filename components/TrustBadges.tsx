import { site } from "@/lib/site";
import { Stagger, StaggerItem } from "./ui/Reveal";
import {
  IconClock,
  IconHeart,
  IconPin,
  IconSparkle,
  IconStar,
} from "./ui/icons";

const badges = [
  { icon: IconStar, title: "Desde 2007", text: "Fundado como EVOLUIR" },
  {
    icon: IconHeart,
    title: "Do berçário ao Fundamental I",
    text: "Cada fase da infância",
  },
  {
    icon: IconClock,
    title: site.hoursShort,
    text: "Segunda a sexta-feira",
  },
  { icon: IconPin, title: "Vila Moraes", text: "Zona Sul de São Paulo" },
  {
    icon: IconSparkle,
    title: "Formação integral",
    text: "Cognitiva, socioemocional e ética",
  },
];

export function TrustBadges() {
  return (
    <section className="relative -mt-4 pb-6">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {badges.map((b) => (
            <StaggerItem key={b.title}>
              <div className="card card-hover h-full !p-5 text-center">
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-sun-light text-sun-dark">
                  <b.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 font-display text-base font-extrabold leading-tight text-ink">
                  {b.title}
                </p>
                <p className="mt-1 text-xs font-semibold text-ink-muted">
                  {b.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
