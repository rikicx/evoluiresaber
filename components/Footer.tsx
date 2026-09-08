import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "./ui/Logo";
import {
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "./ui/icons";

export function Footer() {
  return (
    <footer className="relative bg-ink pt-16 text-white/80">
      <div className="container-x grid grid-cols-1 gap-12 pb-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo onDark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Berçário, Educação Infantil e Ensino Fundamental I na Vila Moraes,
            Zona Sul de São Paulo. Acolhimento, cuidado diário e formação integral
            para cada fase da infância — desde 2007.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <IconInstagram className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <IconFacebook className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <IconWhatsApp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/50">
            Navegação
          </h3>
          <ul className="mt-4 grid gap-2.5 text-sm font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white/50">
            Contato
          </h3>
          <ul className="mt-4 grid gap-3 text-sm font-semibold">
            <li className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
              <span className="text-white/70">{site.address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="h-5 w-5 shrink-0 text-sun" />
              <a href={site.phone.href} className="text-white/70 hover:text-white">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconWhatsApp className="h-5 w-5 shrink-0 text-sun" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                {site.whatsapp.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-5 w-5 shrink-0 text-sun" />
              <a
                href={`mailto:${site.email}`}
                className="break-all text-white/70 hover:text-white"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
