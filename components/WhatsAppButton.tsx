"use client";

import { whatsappLink } from "@/lib/site";
import { IconWhatsApp } from "./ui/icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-pulse-ring" />
      <IconWhatsApp className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-ink px-3 py-2 text-xs font-bold text-white opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Agende uma visita
      </span>
    </a>
  );
}
