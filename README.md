# Colégio Evoluir e Saber — site institucional

Landing page moderna, responsiva e acessível para o **Colégio Evoluir e Saber**
(Berçário, Educação Infantil e Ensino Fundamental I), na Vila Moraes — Zona Sul
de São Paulo.

Construída em **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** +
**Framer Motion**, pronta para publicar na **Vercel**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>.

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba este diretório para um repositório Git (GitHub / GitLab / Bitbucket).
2. Em <https://vercel.com/new>, importe o repositório.
3. Framework: **Next.js** (detectado automaticamente). Nenhuma variável de
   ambiente é necessária.
4. Deploy. A cada `git push` a Vercel publica uma nova versão.

> Após publicar, ajuste `siteUrl` em `app/layout.tsx`, `app/robots.ts` e
> `app/sitemap.ts` para o domínio final.

## Estrutura

```
app/
  layout.tsx      Metadados, fontes (Baloo 2 + Nunito), JSON-LD, SEO
  page.tsx        Composição da landing page
  globals.css     Tokens de estilo, botões, animações
components/
  Header.tsx            Menu fixo que condensa ao rolar + menu mobile
  Hero.tsx / HeroArt    Seção principal com ilustração autoral e parallax
  TrustBadges.tsx       Faixa de confiança (desde 2007, horário, local...)
  About.tsx             Quem somos / história (fundado em 2007 como EVOLUIR)
  Programs.tsx          Cards dos segmentos (Berçário, Infantil, Fundamental I)
  Pedagogy.tsx          4 pilares: aprender a ser, fazer, conhecer, conviver
  WhyChooseUs.tsx       Motivos para escolher a escola
  Gallery.tsx           Galeria de ambientes (grid irregular + parallax)
  Routine.tsx           Rotina e cuidado diário
  Testimonials.tsx      Chamada para avaliações no Google
  VisitCTA.tsx          Chamada forte para agendar visita
  Contact.tsx           Mapa, dados de contato e formulário -> WhatsApp
  Footer.tsx            Rodapé completo
  FloatingActions.tsx   WhatsApp fixo + botão "voltar ao topo"
lib/site.ts       Todas as informações reais da escola em um só lugar
```

## Conteúdo

Todas as informações (endereço, telefone, WhatsApp, e-mail, horário, ano de
fundação, filosofia) vêm do site atual e do Instagram oficial da escola. Nenhum
número, prêmio, depoimento ou método foi inventado. Textos genéricos foram
usados sempre que a informação específica não estava confirmada.

## Fotos e logo

As imagens em `public/images/` foram retiradas do site atual da escola:

- `logo-oficial.webp` — selo oficial (usado no header e no rodapé)
- `fachada.jpeg` — banner "Matrículas 2026"
- `escola_04/09/10/11/12/13.webp` — fotos reais (hero, "O Colégio", cards de
  segmento e galeria de ambientes)
- `ballet / musica / natacao / robot / futebol .webp` — ícones das atividades

Para atualizar, basta substituir os arquivos mantendo os nomes.
