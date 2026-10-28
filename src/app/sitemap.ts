import type { MetadataRoute } from "next";
import { projetosPublicados } from "@/lib/catalogo";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? [
        { url: siteUrl },
        ...projetosPublicados.map((p) => ({
          url: `${siteUrl}/projeto/${p.slug}`,
        })),
      ]
    : [];
}
