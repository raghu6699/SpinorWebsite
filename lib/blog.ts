export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  coverImage: string;
  coverAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "reduced-support-tickets-ai-helpdesk-agent",
    title: "We Reduced Support Tickets 35% With an AI Helpdesk Agent",
    description:
      "How we implemented a business-ready AI helpdesk agent with guardrails, escalation, and continuous improvement to reduce repetitive tickets and speed up responses.",
    date: "2026-01-04",
    tags: ["AI Agents", "Customer Support", "Automation", "Helpdesk", "CX"],
    coverImage: "/blog/ai-helpdesk/hero.svg",
    coverAlt: "AI helpdesk agent dashboard showing ticket reduction",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
