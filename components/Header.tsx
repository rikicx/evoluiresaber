"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site, whatsappLink } from "@/lib/site";
import { Logo } from "./ui/Logo";
import { IconClose, IconMenu } from "./ui/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-2.5" : "py-4 sm:py-5"
        }`}
      >
        <div
          className={`absolute inset-0 -z-10 transition-all duration-300 ${
            scrolled
              ? "border-b border-ink/5 bg-cream-100/80 shadow-soft backdrop-blur-lg"
              : "bg-transparent"
          }`}
        />

        <a
          href="#inicio"
          className="flex min-w-0 flex-1 lg:flex-none"
          aria-label={`${site.name} — início`}
        >
          <Logo compact={scrolled} />
        </a>

        <nav
          className="hidden items-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-bold text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink xl:px-3.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary hidden md:inline-flex ${
              scrolled ? "px-5 py-2.5 text-sm" : "px-5 py-3 text-sm lg:px-7"
            }`}
          >
            Agende uma visita
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-soft ring-1 ring-ink/5 lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <IconMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-3 top-3 rounded-4xl bg-cream-100 p-6 shadow-soft-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-soft"
                  aria-label="Fechar menu"
                >
                  <IconClose className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-6 grid gap-1" aria-label="Mobile">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-lg font-bold text-ink transition-colors hover:bg-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Agende uma visita
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
