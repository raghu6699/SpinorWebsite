import ButtonLink from "@/components/ui/ButtonLink";

export default function HowItWorks() {
  const steps = [
    { n: "01", title: "Discovery (2–5 days)", desc: "Map workflow, define KPIs, set handoff rules and scope." },
    { n: "02", title: "Setup (1–2 weeks)", desc: "Build the agent, approved knowledge base, integrations, and guardrails." },
    { n: "03", title: "Pilot (2–4 weeks)", desc: "Launch controlled, monitor edge cases, tune and report weekly." },
    { n: "04", title: "Scale (ongoing)", desc: "Expand channels and workflows with ongoing optimization cadence." },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              How implementation works
            </h2>
            <p className="mt-3 max-w-2xl opacity-90">
              Discovery → Setup → Pilot → Scale. Lightweight, structured, and outcome-focused.
            </p>
          </div>
          <ButtonLink href="/contact" variant="secondary">Get an Implementation Plan</ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
              <div className="text-xs font-semibold opacity-70">{s.n}</div>
              <h3 className="mt-2 font-serif text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
