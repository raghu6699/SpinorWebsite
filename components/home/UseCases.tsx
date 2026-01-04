import Link from "next/link";

export default function UseCases() {
  const cases = [
    {
      title: "Marketing AI Agents",
      desc: "Retention & lifecycle campaigns across Email/SMS/WhatsApp—planned and shipped faster.",
      href: "/ai-agents-marketing",
      tag: "Retention",
    },
    {
      title: "Customer Service AI Agents",
      desc: "Phone + front desk automation: answer, capture details, route, and escalate smartly.",
      href: "/ai-agents-customer-service",
      tag: "Support",
    },
    {
      title: "Sales AI Agents",
      desc: "Lead-to-meeting system: fast engagement, consistent follow-ups, tracked outcomes.",
      href: "/ai-agents-sales",
      tag: "Pipeline",
    },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          AI Agents your team will actually use.
        </h2>
        <p className="mt-3 max-w-2xl text-base opacity-90">
          Practical agents built around workflows—with guardrails and measurable KPIs.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-md border border-brand-border bg-brand-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-lg dark:shadow-cardDark"
            >
              <span className="inline-flex rounded-md bg-brand-muted px-2 py-1 text-xs font-semibold">
                {c.tag}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{c.desc}</p>
              <div className="mt-4 text-sm font-semibold text-brand-primary">
                Explore → <span className="opacity-0 transition group-hover:opacity-100">Now</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-7 rounded-md border border-brand-border bg-brand-muted px-5 py-4">
          <div className="font-mono text-sm opacity-90">Signals → Decide → Act → Handoff → Report</div>
        </div>
      </div>
    </section>
  );
}
