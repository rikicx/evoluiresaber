import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://colegio-evoluir-e-saber.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Colégio Evoluir e Saber | Berçário, Educação Infantil e Fundamental I na Vila Moraes",
    template: "%s | Colégio Evoluir e Saber",
  },
  description:
    "Escola e berçário na Vila Moraes, Zona Sul de São Paulo. Do berçário ao Ensino Fundamental I, o Colégio Evoluir e Saber oferece acolhimento, cuidado diário e formação integral desde 2007.",
  keywords: [
    "Colégio Evoluir e Saber",
    "berçário na Zona Sul",
    "berçário Vila Moraes",
    "educação infantil na Vila Moraes",
    "escola infantil em São Paulo",
    "Ensino Fundamental I Vila Moraes",
    "escola particular Zona Sul",
  ],
  authors: [{ name: "Colégio Evoluir e Saber" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.name,
    title:
      "Colégio Evoluir e Saber | Berçário, Educação Infantil e Fundamental I",
    description:
      "Um lugar seguro para aprender, brincar e evoluir na Vila Moraes, São Paulo. Acolhimento e formação integral desde 2007.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Colégio Evoluir e Saber",
    description:
      "Berçário, Educação Infantil e Ensino Fundamental I na Vila Moraes, São Paulo.",
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFF9EF",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: site.name,
  description:
    "Berçário, Educação Infantil e Ensino Fundamental I na Vila Moraes, Zona Sul de São Paulo. Formação integral desde 2007.",
  foundingDate: "2007-06",
  url: siteUrl,
  telephone: site.phone.display,
  email: site.email,
  openingHours: "Mo-Fr 06:45-18:30",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  areaServed: "Vila Moraes, Zona Sul de São Paulo",
  sameAs: [site.social.instagram, site.social.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#o-colegio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:shadow-soft"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
