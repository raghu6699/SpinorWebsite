import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

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
    "/blog",
    "/about",
    "/contact",
  ];

  const now = new Date();

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
