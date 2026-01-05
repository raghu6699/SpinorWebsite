import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Change Management & Adoption | Spinor Innovations",
  description:
    "Change management for software and AI adoption—training, SOPs, rollout support, and measurable adoption KPIs so teams actually use what you build.",
  alternates: { canonical: "/change-management" },
};

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {desc ? <p className="mt-3 max-w-3xl opacity-90">{desc}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
      <h3 className="font-serif text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed opacity-90">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2">
          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ChangeManagementPage() {
  return (
    <main className="bg-brand-bg">
      {/* HERO */}
      <section className="pt-14 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
            <div className="text-xs font-semibold opacity-70">
              Change Management & Adoption
            </div>

            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Make technology adoption predictable.
            </h1>

            <p className="mt-4 max-w-3xl opacity-90 md:text-lg">
              Spinor pairs software and AI delivery with practical change management—stakeholder alignment,
              training, SOPs, and rollout support—so your systems become daily habits, not abandoned tools.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Plan Adoption
              </ButtonLink>
              <ButtonLink href="/ai-agents" variant="secondary">
                See AI Agent Use Cases
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                { k: "Best for", v: "New software, AI agents, workflow rollouts" },
                { k: "Focus", v: "Habits + confidence + clear escalation" },
                { k: "Proof", v: "Adoption KPIs and feedback loops" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-md border border-brand-border bg-brand-muted p-4"
                >
                  <div className="text-xs font-semibold opacity-70">{x.k}</div>
                  <div className="mt-1 text-sm opacity-90">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY ADOPTION FAILS */}
      <Section
        title="Why most rollouts stall"
        desc="The tech works—but teams don't change the way they work."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Common failure modes">
            <BulletList
              items={[
                "Teams don't know the new \"way of working\"",
                "No SOPs or escalation rules—only tribal knowledge",
                "Training happens once, then disappears",
                "Leadership lacks a clear adoption signal",
              ]}
            />
          </Card>

          <Card title="What we do differently">
            <BulletList
              items={[
                "We define boundaries: what's automated vs what escalates",
                "We ship SOPs, playbooks, and training alongside delivery",
                "We run office hours during pilot to remove friction fast",
                "We measure adoption with KPIs—not just go-live",
              ]}
            />
          </Card>
        </div>
      </Section>

      {/* APPROACH */}
      <Section
        title="A simple rollout that builds habits"
        desc="We keep it practical: align → enable → pilot → scale."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              step: "Align",
              desc: "Goals, stakeholders, champions, and success metrics.",
            },
            {
              step: "Enable",
              desc: "SOPs, checklists, role-based playbooks, training.",
            },
            {
              step: "Pilot",
              desc: "Limited rollout + office hours + daily feedback loops.",
            },
            {
              step: "Scale",
              desc: "Expand to teams + operationalize support + measure adoption.",
            },
          ].map((p) => (
            <div
              key={p.step}
              className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark"
            >
              <div className="text-xs font-semibold opacity-70">{p.step}</div>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE DELIVER */}
      <Section title="What we deliver" desc="Artifacts that teams reference and use every day.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Pre-launch (week 1–2)">
            <BulletList
              items={[
                "Stakeholder alignment workshop (sponsor, champions, teams)",
                "Success metrics + adoption KPI targets",
                "Role-based playbooks (what each role does + when)",
                "Training deck + video walkthroughs",
                "Launch comms + FAQ",
              ]}
            />
          </Card>

          <Card title="During pilot (weeks 2–4)">
            <BulletList
              items={[
                "Daily office hours (live Q&A + edge case resolution)",
                "Adaptation checklist (what worked, what needs tweaking)",
                "Weekly adoption KPI report",
                "Escalation SOP updates (collect and publish)",
                "One-pager for early wins + team testimonials",
              ]}
            />
          </Card>
        </div>

        <div className="mt-6 rounded-md border border-brand-border bg-brand-muted p-6">
          <p className="text-sm opacity-90">
            <span className="font-semibold">Post-launch:</span> We hand over a playbook, nominate internal adoption champions, and set up a quarterly feedback cadence to catch degradation early.
          </p>
        </div>
      </Section>

      {/* ADOPTION KPIs */}
      <Section title="How we measure adoption" desc="Real signals that tell you if the rollout is actually working.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Usage KPIs",
              desc: "Daily active users, feature usage distribution, escalation rates.",
            },
            {
              title: "Quality KPIs",
              desc: "Error rates, rework cycles, average handling time, satisfaction scores.",
            },
            {
              title: "Business KPIs",
              desc: "Time saved per transaction, deflection rates, revenue impact, NPS.",
            },
          ].map((kpi) => (
            <Card key={kpi.title} title={kpi.title}>
              <p className="opacity-90">{kpi.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ROLLOUT SCENARIOS */}
      <Section
        title="Common adoption scenarios"
        desc="We've handled these. We know what works."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Scenario 1: Large org, skeptical team">
            <p className="opacity-90">
              We run a controlled pilot with a champion group, showcase quick wins, then expand. Skepticism turns to confidence when the team sees results.
            </p>
          </Card>

          <Card title="Scenario 2: Distributed team, timezone challenges">
            <p className="opacity-90">
              We pre-record training, set up async Q&A channels, and schedule office hours across timezone windows. Documentation is your friend here.
            </p>
          </Card>

          <Card title="Scenario 3: High stakes—trading floor, contact center">
            <p className="opacity-90">
              We run 1-on-1 training + pair shadowing before go-live. We staff the launch day + first week heavily to catch issues live.
            </p>
          </Card>

          <Card title="Scenario 4: Legacy system replacement">
            <p className="opacity-90">
              We run parallel workflows until comfort rises. We document workarounds, then retire them phase by phase. No surprises.
            </p>
          </Card>
        </div>
      </Section>

      {/* SUPPORT & ESCALATION */}
      <Section
        title="Support & escalation"
        desc="We don't disappear after launch day."
      >
        <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
          <BulletList
            items={[
              "Weekly check-ins (adoption + feedback) for first 4 weeks",
              "Escalation path: team lead → adoption champion → Spinor team",
              "Monthly retrospectives: what's working, what needs refinement",
              "Ongoing playbook updates as edge cases emerge",
              "Optional: quarterly health checks and refresher training",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
            <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to make adoption stick?
            </h2>
            <p className="mt-3 max-w-2xl opacity-90">
              Let's map your rollout timeline, identify champions, and ship a plan that turns technology into daily habit.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Talk to an Expert
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                Explore All Services
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents">
                See AI Agent Services →
              </Link>
              <Link className="font-semibold text-brand-primary hover:underline" href="/services">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
