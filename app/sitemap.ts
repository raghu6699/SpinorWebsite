import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spinorinnovations.com";

  const routes = [
    "",
    "/services",
    "/ai-agents",
    "/ai-agents-marketing",
    "/ai-agents-customer-service",
    "/ai-agents-sales",
    "/change-management",
    "/about",
    "/contact",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
