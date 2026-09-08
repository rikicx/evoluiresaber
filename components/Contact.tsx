"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import {
  IconClock,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsApp,
} from "./ui/icons";

const field =
  "w-full min-w-0 rounded-2xl border border-ink/10 bg-cream-50 px-4 py-3 text-[15px] font-semibold text-ink placeholder:font-medium placeholder:text-ink-muted focus:border-sky-dark focus:bg-white focus:outline-none";

export function Contact() {
  const [form, setForm] = useState({
    nome: "",
    contato: "",
    email: "",
    crianca: "",
    mensagem: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      "Olá! Gostaria de agendar uma visita no Colégio Evoluir e Saber.",
      "",
      `Nome: ${form.nome || "-"}`,
      `Telefone/WhatsApp: ${form.contato || "-"}`,
      `E-mail: ${form.email || "-"}`,
      `Idade/série da criança: ${form.crianca || "-"}`,
      form.mensagem ? `Mensagem: ${form.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  const contactItems = [
    {
      icon: IconPin,
      label: "Endereço",
      value: site.address.full,
      href: site.mapLink,
    },
    { icon: IconPhone, label: "Telefone", value: site.phone.display, href: site.phone.href },
    {
      icon: IconWhatsApp,
      label: "WhatsApp",
      value: site.whatsapp.display,
      href: whatsappLink(),
    },
    { icon: IconMail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { icon: IconClock, label: "Funcionamento", value: site.hours },
    {
      icon: IconInstagram,
      label: "Instagram",
      value: site.social.instagramHandle,
      href: site.social.instagram,
    },
  ];

  return (
    <section id="contato" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Localização e contato"
          title={
            <>
              Estamos na Vila Moraes, de{" "}
              <span className="text-coral">portas abertas</span>
            </>
          }
          intro="Envie uma mensagem, ligue ou venha tomar um café com a gente. Será um prazer mostrar a escola para a sua família."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="card !p-7 sm:!p-9">
            <h3 className="text-2xl">Quero agendar uma visita</h3>
            <p className="mt-2 text-sm font-semibold text-ink-muted">
              Preencha os campos e continue a conversa pelo WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-sm font-bold text-ink-soft">Nome</span>
                  <input
                    required
                    className={field}
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-bold text-ink-soft">
                    Telefone / WhatsApp
                  </span>
                  <input
                    required
                    className={field}
                    placeholder="(11) 90000-0000"
                    inputMode="tel"
                    value={form.contato}
                    onChange={(e) =>
                      setForm({ ...form, contato: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5">
                  <span className="text-sm font-bold text-ink-soft">E-mail</span>
                  <input
                    type="email"
                    className={field}
                    placeholder="voce@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>
                <label className="grid gap-1.5">
                  <span className="text-sm font-bold text-ink-soft">
                    Idade / série da criança
                  </span>
                  <input
                    className={field}
                    placeholder="Ex.: 2 anos, 1º ano"
                    value={form.crianca}
                    onChange={(e) =>
                      setForm({ ...form, crianca: e.target.value })
                    }
                  />
                </label>
              </div>
              <label className="grid gap-1.5">
                <span className="text-sm font-bold text-ink-soft">Mensagem</span>
                <textarea
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="Conte um pouco sobre o que você procura para o seu filho."
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({ ...form, mensagem: e.target.value })
                  }
                />
              </label>
              <button type="submit" className="btn-primary mt-1 w-full">
                <IconWhatsApp className="h-5 w-5" />
                Quero agendar uma visita
              </button>
              <p className="text-center text-xs text-ink-muted">
                Ao enviar, abrimos o WhatsApp com a sua mensagem pronta. Seus
                dados não são armazenados neste site.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="grid content-start gap-6">
            <div className="overflow-hidden rounded-4xl shadow-soft ring-1 ring-ink/5">
              <iframe
                title="Mapa — Colégio Evoluir e Saber, Rua Romão Puiggari, 757, Vila Moraes"
                src={site.mapEmbedUrl}
                className="h-[280px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="card !p-7">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactItems.map((c) => {
                  const inner = (
                    <>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream-200 text-coral">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-wide text-ink-muted">
                          {c.label}
                        </span>
                        <span className="block break-words text-sm font-bold text-ink">
                          {c.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 rounded-2xl p-2 transition-colors hover:bg-cream-100"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3 p-2">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
