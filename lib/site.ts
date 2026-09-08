// Central place for all real, confirmed information about the school.
// Nothing here is invented — every value comes from the current website
// (colegioevoluiresaber.com.br) or the official Instagram (@colegio_evoluir_).

export const site = {
  name: "Colégio Evoluir e Saber",
  shortName: "Evoluir e Saber",
  foundedYear: 2007,
  foundedLabel: "Desde 2007",
  originalName: "EVOLUIR",
  tagline: "Um lugar seguro para aprender, brincar e evoluir",
  description:
    "Do berçário ao Ensino Fundamental I, o Colégio Evoluir e Saber acolhe cada criança com carinho, criatividade e uma formação integral para a vida.",

  address: {
    street: "Rua Romão Puiggari, 757",
    district: "Vila Moraes",
    city: "São Paulo",
    state: "SP",
    zip: "04164-000",
    full: "Rua Romão Puiggari, 757 — Vila Moraes, São Paulo — SP, 04164-000",
  },

  hours: "Segunda a sexta, das 6h45 às 18h30",
  hoursShort: "6h45 às 18h30",

  phone: {
    display: "(11) 2969-6193",
    href: "tel:+551129696193",
  },

  whatsapp: {
    display: "(11) 91193-8457",
    // Número de WhatsApp divulgado no site atual da escola.
    number: "5511911938457",
    message:
      "Olá! Gostaria de agendar uma visita no Colégio Evoluir e Saber.",
  },

  email: "contato@colegioevoluiresaber.com.br",

  social: {
    instagram: "https://www.instagram.com/colegio_evoluir_/",
    instagramHandle: "@colegio_evoluir_",
    facebook: "https://www.facebook.com/colegioevoluiresaber",
  },

  googleReviewsUrl:
    "https://www.google.com/search?q=Col%C3%A9gio+Evoluir+e+Saber+Vila+Moraes",

  mapEmbedUrl:
    "https://www.google.com/maps?q=Rua+Rom%C3%A3o+Puiggari,+757+-+Vila+Moraes,+S%C3%A3o+Paulo+-+SP,+04164-000&output=embed",
  mapLink:
    "https://www.google.com/maps/dir/?api=1&destination=Rua+Rom%C3%A3o+Puiggari,+757+-+Vila+Moraes,+S%C3%A3o+Paulo+-+SP",
};

export function whatsappLink(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? site.whatsapp.message);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "O Colégio", href: "#o-colegio" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Proposta Pedagógica", href: "#proposta" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];
