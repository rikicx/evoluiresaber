import type { MetadataRoute } from "next";

const siteUrl = "https://colegio-evoluir-e-saber.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
