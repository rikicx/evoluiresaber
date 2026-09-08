import { site, whatsappLink } from "@/lib/site";
import { Reveal } from "./ui/Reveal";
import { WaveDivider } from "./ui/decor";
import { IconPhone, IconWhatsApp } from "./ui/icons";

export function VisitCTA() {
  return (
    <section className="relative bg-gradient-to-br from-sun via-sun-light to-coral-light py-24 sm:py-32">
      <WaveDivider flip fill="#FFF9EF" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Venha conhecer de perto o espaço onde seu filho pode crescer com
            segurança e alegria
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Agende uma visita e descubra como o {site.name} une acolhimento,
            educação e desenvolvimento integral em cada etapa da infância.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white shadow-pill hover:-translate-y-0.5 hover:brightness-95"
            >
              <IconWhatsApp className="h-5 w-5" />
              Agendar pelo WhatsApp
            </a>
            <a
              href={site.phone.href}
              className="btn bg-white text-ink shadow-soft ring-1 ring-ink/5 hover:-translate-y-0.5"
            >
              <IconPhone className="h-5 w-5 text-coral" />
              Falar com a escola
            </a>
          </div>

          <p className="mt-6 text-sm font-semibold text-ink-soft">
            {site.phone.display} · {site.address.district}, São Paulo ·{" "}
            {site.hoursShort}
          </p>
        </Reveal>
      </div>

      <WaveDivider fill="#FFF9EF" />
    </section>
  );
}
