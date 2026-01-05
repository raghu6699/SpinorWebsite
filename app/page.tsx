import Hero from "@/components/home/Hero";
import ServicePillars from "@/components/home/ServicePillars";
import PainOutcome from "@/components/home/PainOutcome";
import HowItWorks from "@/components/home/HowItWorks";
import UseCases from "@/components/home/UseCases";
import ProofChips from "@/components/home/ProofChips";
import PricingPreview from "@/components/home/PricingPreview";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import ButtonLink from "@/components/ui/ButtonLink";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
            <div className="text-xs font-semibold opacity-70">Why Spinor</div>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              We don't just ship. We drive adoption.
            </h2>
            <p className="mt-3 max-w-3xl opacity-90">
              New tech fails when teams don't change habits. Spinor pairs software and AI delivery with practical change
              management—stakeholder alignment, training, SOPs, and rollout support—so your systems get used, not ignored.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Clear rollout plan (pilot → habits → scale)",
                "Training + playbooks for real teams",
                "Adoption KPIs and weekly iteration",
              ].map((t) => (
                <div key={t} className="rounded-md border border-brand-border bg-brand-muted p-4 text-sm opacity-90">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-primary mr-2 align-middle" />
                  <span className="align-middle">{t}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/change-management" variant="secondary">
                Plan Adoption
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary">
                Talk to an Expert
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <ServicePillars />
      <PainOutcome />
      <HowItWorks />
      <UseCases />
      <ProofChips />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
