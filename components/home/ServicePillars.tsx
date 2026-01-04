import Link from "next/link";

export default function ServicePillars() {
  const pillars = [
    {
      title: "Software Development",
      bullets: ["Websites (eCommerce, dynamic, static)", "Mobile + desktop apps", "Extensions + integrations"],
      href: "/services#software",
      featured: false,
    },
    {
      title: "AI Agents",
      bullets: ["Marketing (retention)", "Customer service (phone/front desk)", "Sales (lead-to-meeting)"],
      href: "/ai-agents",
      featured: true,
    },
    {
      title: "Marketing",
      bullets: ["D2C: social + offline", "B2B: LinkedIn, email, SMS", "Analytics + optimization"],
      href: "/services#marketing",
      featured: false,
    },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Build. Automate. Grow.</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark ${
                p.featured ? "ring-1 ring-brand-accent/40" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-xl font-semibold">{p.title}</h3>
                {p.featured && (
                  <span className="rounded-md bg-brand-muted px-2 py-1 text-xs font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <ul className="mt-4 space-y-2 text-sm opacity-95">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Link href={p.href} className="mt-5 inline-flex items-center text-sm font-semibold text-brand-primary hover:underline">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
