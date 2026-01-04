export default function FAQ() {
  const faqs = [
    { q: "Will AI agents replace my team?", a: "No. Agents remove repetitive work and escalate what needs a human, so your team focuses on high-value tasks." },
    { q: "How do you prevent wrong answers?", a: "We use approved knowledge sources, handoff rules, and audit trails. When confidence is low or topics are sensitive, the agent escalates." },
    { q: "How fast can we launch?", a: "Once we have content and tool access, Starter pilots can go live quickly with a controlled rollout." },
    { q: "Do you integrate with our tools?", a: "Yes—common integrations include CRM, scheduling, and marketing tools. We scope integrations during Discovery." },
    { q: "Can we start small and expand later?", a: "That’s the recommended approach: launch one use case, prove value, then scale to more channels and workflows." },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>

        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-md border border-brand-border bg-brand-card p-5 shadow-card dark:shadow-cardDark">
              <summary className="cursor-pointer list-none font-semibold">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed opacity-90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
