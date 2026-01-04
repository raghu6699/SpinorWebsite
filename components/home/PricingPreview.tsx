import ButtonLink from "@/components/ui/ButtonLink";

export default function PricingPreview() {
  const tiers = [
    {
      name: "Starter",
      tagline: "Launch one agent",
      points: ["Single use case", "Approved knowledge base", "Pilot + tuning rounds", "Baseline KPI reporting"],
      cta: "Get Starter Proposal",
      href: "/ai-agents#pricing",
      featured: false,
    },
    {
      name: "Growth",
      tagline: "Integrations + reporting",
      points: ["Key integrations", "Multi-step workflows", "Multi-channel support", "Weekly optimization cadence"],
      cta: "Get Growth Proposal",
      href: "/ai-agents#pricing",
      featured: true,
    },
    {
      name: "Scale",
      tagline: "Multi-agent system",
      points: ["Multiple agents", "Advanced routing rules", "Monitoring + governance", "Roadmap planning"],
      cta: "Get Scale Proposal",
      href: "/ai-agents#pricing",
      featured: false,
    },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12" id="pricing-preview">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Pricing that scales with you</h2>
        <p className="mt-3 max-w-2xl opacity-90">
          Choose a package that matches your speed and complexity. Final pricing depends on channels, integrations, and volume.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark ${
                t.featured ? "ring-1 ring-brand-primary/50" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-xl font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm opacity-80">{t.tagline}</p>
                </div>
                {t.featured && (
                  <span className="rounded-md bg-brand-muted px-2 py-1 text-xs font-semibold">Most Popular</span>
                )}
              </div>

              <ul className="mt-5 space-y-2 text-sm">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <ButtonLink href={t.href} variant={t.featured ? "primary" : "secondary"}>
                  {t.cta}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
