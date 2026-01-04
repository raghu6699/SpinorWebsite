export default function ProofChips() {
  const chips = ["Fast pilots", "Workflow-first AI", "Integrations-ready", "Clear KPIs"];
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-md border border-brand-border bg-brand-card px-3 py-1 text-sm">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
