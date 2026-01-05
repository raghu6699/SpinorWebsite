import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Customer Service Agents | AI Agents | Spinor Innovations",
  description:
    "Deploy customer service AI agents for front-desk style triage, FAQ resolution, structured intake, routing, and clean human handoff—with guardrails and reporting.",
  alternates: { canonical: "/ai-agents-customer-service" },
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
    title: "Instant Resolution Agent",
    bullets: [
      "Answers FAQs using approved knowledge only",
      "Guided prompts to avoid vague replies",
      "Confidence rules: escalate instead of guessing",
      "Consistent tone aligned to your brand",
    ],
  },
  {
    title: "Support Intake Agent",
    bullets: [
      "Captures structured details per issue type",
      "Reduces back-and-forth by collecting the right info upfront",
      "Supports attachments/links where applicable",
      "Creates clean summaries for fast handling",
    ],
  },
  {
    title: "Routing + Escalation Agent",
    bullets: [
      "Routes by category/urgency (rules you approve)",
      "Immediate escalation for sensitive categories",
      "Notifies the right owner/team with context",
      "Tracks themes to improve knowledge base over time",
    ],
  },
];

const deliverables = {
  first14Days: [
    "Support taxonomy + escalation matrix (what the agent can resolve vs must escalate)",
    "Approved knowledge pack (FAQ/policies transformed into agent-ready answers)",
    "Intake form + must-capture fields per issue type",
    "Routing rules + handoff playbook (who gets what and when)",
    "Pilot agent (web/email) with guardrails + safe fallback messaging",
  ],
  pilotWeeks: [
    "Transcript review + edge-case fixes (tighten responses safely)",
    "Knowledge gap tracker (new FAQs and policy clarifications)",
    "Support insights report (top issues, friction points, deflection opportunities)",
  ],
};

const integrations = [
  "Website chat & forms: embedded web chat, contact forms, live chat widgets",
  "Email & shared inbox: Outlook/Microsoft 365, Gmail/Google Workspace, shared inbox routing",
  "Helpdesk & ticketing: Jira Service Management / Zendesk-style tools / internal queues",
  "Knowledge base: FAQs, policy docs, SOPs, documentation libraries",
  "CRM: customer profile lookup, case history, tagging, follow-up tasks",
  "Scheduling & handoff: calendar links, escalation notifications, team channels",
];

const process = [
  { step: "Discovery", desc: "Define categories, priorities, escalation paths with leadership." },
  { step: "Setup", desc: "Load approved knowledge, configure intake, routing, and handoff rules." },
  { step: "Pilot", desc: "Monitor transcripts weekly, improve coverage, tune confidence + fallbacks." },
  { step: "Scale", desc: "Expand to more channels and integrate deeper into ticketing/CRM." },
];

export default function CustomerServiceAgentsPage() {
  return (
    <main className="bg-brand-bg">
        {/* HERO */}
        <section className="pt-14 pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
              <div className="text-xs font-semibold opacity-70">
                AI Agents Use Case • Customer Service
              </div>

              <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
                Front-desk support that routes, resolves, and escalates cleanly.
              </h1>

              <p className="mt-4 max-w-3xl opacity-90 md:text-lg">
                We deploy customer service agents that handle FAQs, capture the right details, route requests,
                and escalate when needed—so humans spend time on real problems, not repetitive triage.
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
                  { k: "Goal", v: "Faster response + cleaner handoff" },
                  { k: "Coverage", v: "FAQs, intake, routing, escalation" },
                  { k: "Safety", v: "No guessing + sensitive escalation" },
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
          title="Support breaks when volume spikes"
          desc="Repeated questions + incomplete requests create backlogs and frustrate customers."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Common friction">
              <BulletList
                items={[
                  "Too many repeated questions reach humans",
                  "Requests lack key details (order/account/context)",
                  "Urgent vs non-urgent items get mixed",
                  "Inconsistent escalation and routing",
                ]}
              />
            </Card>
            <Card title="What changes after deployment">
              <BulletList
                items={[
                  "FAQs resolved instantly using approved knowledge",
                  "Structured intake reduces back-and-forth",
                  "Routing rules send issues to the right owner",
                  "Escalation triggers protect trust and safety",
                ]}
              />
            </Card>
          </div>
        </Section>

        {/* AGENT STACK */}
        <Section
          title="What we deploy"
          desc="A workflow agent system optimized for resolution + routing—not just conversation."
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
              <span className="font-semibold">Guardrail principle:</span> If the agent isn&apos;t confident, it escalates.
              That&apos;s how you protect customer trust while still moving fast.
            </p>
          </div>
        </Section>

        {/* DELIVERABLES */}
        <Section title="Deliverables" desc="Practical artifacts your team can run with immediately.">
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
        <Section
          title="Tools we integrate with"
          desc="We work with your existing setup and keep human handoff clean and fast."
        >
          <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
            <BulletList items={integrations} />
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="How implementation works" desc="Low-risk rollout with fast learning loops.">
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
              { title: "Faster first response", desc: "Common questions resolved instantly; humans handle edge cases." },
              { title: "Higher-quality tickets", desc: "Intake captures the right details so resolution is faster." },
              { title: "Cleaner escalation", desc: "Urgent issues route immediately with context and next steps." },
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
                Want support triage working in weeks?
              </h2>
              <p className="mt-3 max-w-2xl opacity-90">
                We&apos;ll help you pick the first category set, define escalation rules, and launch a controlled pilot.
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
                <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents-sales">
                  Next: Sales Agents →
                </Link>
                <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents-marketing">
                  Explore: Marketing Performance Agents →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}
