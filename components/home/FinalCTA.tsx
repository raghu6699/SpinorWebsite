import ButtonLink from "@/components/ui/ButtonLink";

export default function FinalCTA() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to automate the busywork?
          </h2>
          <p className="mt-3 max-w-2xl opacity-90">
            Tell us where you want speed—support, sales, or retention. We’ll recommend the fastest path to measurable results.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">Talk to an Expert</ButtonLink>
            <ButtonLink href="/ai-agents" variant="secondary">See AI Agent Use Cases</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
