import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://cartmuse.example";
  return ["/", "/discover", "/deals", "/shein-code", "/tools/savings-calculator", "/guide", "/about", "/disclosure", "/privacy"].map((path) => ({
    url: base + path, lastModified: new Date(), changeFrequency: path === "/" || path === "/discover" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : 0.7,
  }));
}
