export default function PainOutcome() {
  const items = [
    { title: "Missed inquiries", desc: "Answer and route automatically with smart escalation." },
    { title: "Leads go cold", desc: "Instant follow-ups and meeting booking—without chasing." },
    { title: "Retention is inconsistent", desc: "Lifecycle campaigns shipped weekly across owned channels." },
  ];

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Most teams don’t need more tools. They need less manual work.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
              <h3 className="font-serif text-xl font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
