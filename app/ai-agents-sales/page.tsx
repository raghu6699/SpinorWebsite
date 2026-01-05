import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Sales Agents | AI Agents | Spinor Innovations",
  description:
    "Deploy sales AI agents for B2B outreach, qualification, follow-up sequences, meeting booking, and CRM hygiene—built with guardrails and KPI reporting.",
  alternates: { canonical: "/ai-agents-sales" },
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
    <section className="py-10">
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

const agentStack = [
  {
    title: "Outbound Sequencing Agent",
    bullets: [
      "Persona-based messaging aligned to your offer and ICP",
      "Cadence-based follow-up on LinkedIn + email (optional SMS)",
      "Stop rules for replies, unsubscribes, and low-fit signals",
      "Keeps activity consistent without manual reminders",
    ],
  },
  {
    title: "Qualification + Scheduling Agent",
    bullets: [
      "Captures fit signals: pain, timeline, stakeholders, constraints",
      "Routes high-intent leads to humans; nurtures mid-intent leads",
      "Books meetings and sends confirmations/reminders",
      "Creates handoff summaries so sellers enter with context",
    ],
  },
  {
    title: "Pipeline Hygiene Agent",
    bullets: [
      "Enforces next-step rules and flags stale deals",
      "Summarizes conversations + objections cleanly",
      "Updates CRM fields and stages consistently",
      "Keeps forecasting and prioritization trustworthy",
    ],
  },
];

const deliverables = {
  first14Days: [
    "ICP + persona messaging library (approved tone and angles)",
    "Qualification checklist + route vs nurture rules",
    "Outbound sequence pack (LinkedIn + email cadence templates)",
    "Meeting-ready handoff format (summary + objections + next step)",
    "Pipeline hygiene rules (stages, stale flags, next-step enforcement)",
    "KPI pilot dashboard template (meetings booked, reply quality, freshness)",
  ],
  pilotWeeks: [
    "Objection pattern library + approved responses",
    "Weekly iteration plan based on replies and conversions",
    "Scale-ready operating rhythm (who reviews what and when)",
  ],
};

const integrations = [
  "CRM & pipeline: HubSpot-style CRMs, Salesforce-style CRMs, custom pipelines",
  "Outbound channels: LinkedIn outreach workflows, email sequences, SMS (where permitted)",
  "Meeting booking: Calendly-style scheduling + calendar integrations + reminders",
  "Lead sources: website forms, landing pages, inbound routes, list imports",
  "Enablement: messaging libraries, objection playbooks, summaries/notes",
  "Reporting: KPI dashboards for meetings, response quality, pipeline freshness",
];

const process = [
  { step: "Discovery", desc: "Define ICP, offer framing, qualification rules, and KPIs with leadership." },
  { step: "Setup", desc: "Build sequences, configure routing, integrate CRM updates and meeting booking." },
  { step: "Pilot", desc: "Controlled outreach + weekly tuning based on replies, objections, and conversions." },
  { step: "Scale", desc: "Expand segments, add channels, and operationalize reporting for consistency." },
];

export default function SalesAgentsPage() {
  return (
    <main className="bg-brand-bg">
      {/* HERO */}
      <section className="pt-14 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
            <div className="text-xs font-semibold opacity-70">
              AI Agents Use Case • Sales
            </div>

            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Follow-up that never drops the ball.
            </h1>

            <p className="mt-4 max-w-3xl opacity-90 md:text-lg">
              We deploy sales agents that qualify leads, run consistent B2B follow-up, book meetings,
              and keep the CRM clean—so humans focus on closing, not chasing.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Talk to an Expert
              </ButtonLink>
              <ButtonLink href="/ai-agents" variant="secondary">
                Back to AI Agents Hub
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {[
                { k: "Goal", v: "More qualified meetings + cleaner pipeline" },
                { k: "Channels", v: "LinkedIn, email, SMS (optional)" },
                { k: "Control", v: "Approved messaging + opt-out rules" },
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

      {/* PROBLEM */}
      <Section
        title="Sales pipelines fail from inconsistency"
        desc="Most teams work hard—follow-up and process just aren&apos;t systematic."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Common friction">
            <BulletList
              items={[
                "Outreach starts strong, then follow-up fades",
                "Qualification isn&apos;t standardized → time wasted on low-fit leads",
                "CRM stages are messy → poor prioritization and forecasting",
                "Leadership wants a repeatable system, not heroics",
              ]}
            />
          </Card>
          <Card title="What changes after deployment">
            <BulletList
              items={[
                "Cadence-driven follow-up stays consistent automatically",
                "Lead routing ensures humans focus on high-intent prospects",
                "Pipeline hygiene becomes disciplined and measurable",
                "Weekly KPI loop drives continuous improvements",
              ]}
            />
          </Card>
        </div>
      </Section>

      {/* AGENT STACK */}
      <Section
        title="What we deploy"
        desc="Agents designed for qualification, booking, and pipeline hygiene—not noise."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {agentStack.map((a) => (
            <Card key={a.title} title={a.title}>
              <BulletList items={a.bullets} />
            </Card>
          ))}
        </div>

        <div className="mt-6 rounded-md border border-brand-border bg-brand-muted p-6">
          <p className="text-sm opacity-90">
            <span className="font-semibold">Compliance-first:</span> We respect opt-outs and keep messaging within your approved library.
            Complex objections and negotiations escalate to humans.
          </p>
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section title="Deliverables" desc="Everything needed to run a real pilot and scale cleanly.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="In the first 7–14 days">
            <BulletList items={deliverables.first14Days} />
          </Card>
          <Card title="During pilot (weeks 2–4)">
            <BulletList items={deliverables.pilotWeeks} />
          </Card>
        </div>
      </Section>

      {/* INTEGRATIONS */}
      <Section title="Tools we integrate with" desc="We connect outreach to booking and clean CRM updates.">
        <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
          <BulletList items={integrations} />
        </div>
      </Section>

      {/* PROCESS */}
      <Section title="How implementation works" desc="Low-risk rollout that turns into a repeatable system.">
        <div className="grid gap-6 md:grid-cols-4">
          {process.map((p) => (
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

      {/* OUTCOMES */}
      <Section title="Outcomes we aim for" desc="Measured improvements without exposing private client numbers.">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "More meetings booked", desc: "Consistent follow-up + clear routing improves conversion to meetings." },
            { title: "Higher lead quality for humans", desc: "Qualification rules ensure sellers focus on true intent." },
            { title: "Cleaner pipeline visibility", desc: "Stages, next steps, and stale flags keep forecasting real." },
          ].map((o) => (
            <Card key={o.title} title={o.title}>
              <p className="opacity-90">{o.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* NAV / CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
            <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              Want a sales pilot that&apos;s measurable?
            </h2>
            <p className="mt-3 max-w-2xl opacity-90">
              We&apos;ll define your ICP and qualification rules, launch controlled outreach, and tune weekly with clear KPIs.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Talk to an Expert
              </ButtonLink>
              <ButtonLink href="/ai-agents" variant="secondary">
                Back to AI Agents Hub
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents-marketing">
                Explore: Marketing Performance Agents →
              </Link>
              <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents-customer-service">
                Explore: Customer Service Agents →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
