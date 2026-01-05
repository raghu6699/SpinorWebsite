import type { Metadata } from "next";
import ButtonLink from "@/components/ui/ButtonLink";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents Hub | Spinor Innovations",
  description:
    "Spinor builds business-ready AI agents that answer customers, follow up leads, and run retention campaigns—safely, with guardrails, handoff rules, and KPI reporting.",
  alternates: { canonical: "/ai-agents" },
};

const useCases = [
  {
    title: "Marketing Performance Agents",
    desc: "Retention + lifecycle automations that keep customers engaged and increase repeat purchases—without manual chasing.",
    href: "/ai-agents-marketing",
    bullets: [
      "Lifecycle messages (welcome, nurture, win-back)",
      "Offer testing + personalization",
      "Segmentation + campaign scheduling",
      "Weekly KPI review + iteration",
    ],
    tag: "Retention + revenue",
  },
  {
    title: "Customer Service Agents",
    desc: "Front desk and telecalling-style support to handle common questions, triage requests, and escalate cleanly to humans.",
    href: "/ai-agents-customer-service",
    bullets: [
      "Answer FAQs + capture details",
      "Ticket creation + routing",
      "Call scripts + follow-ups",
      "Human handoff when needed",
    ],
    tag: "Faster response",
  },
  {
    title: "Sales Agents",
    desc: "Lead follow-up that never sleeps—qualify, answer, nudge, and book meetings with clean CRM updates.",
    href: "/ai-agents-sales",
    bullets: [
      "Lead qualification + scoring",
      "Follow-up sequences (email/SMS/LinkedIn)",
      "Meeting booking + reminders",
      "CRM updates + pipeline hygiene",
    ],
    tag: "More meetings booked",
  },
];

const guardrails = [
  "Approved knowledge sources only (no guessing)",
  "Confidence rules + safe fallback messaging",
  "Human handoff + escalation paths",
  "Audit logs + versioned improvements",
  "Role-based access + data boundaries",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We map the workflow, define success metrics, and choose the first agent use case with fastest ROI.",
  },
  {
    step: "02",
    title: "Setup",
    desc: "We connect approved knowledge, define triggers/actions, set guardrails, and integrate required tools (CRM, inbox, forms).",
  },
  {
    step: "03",
    title: "Pilot",
    desc: "We run a controlled launch, review transcripts + edge cases, tune responses, and report weekly KPIs.",
  },
  {
    step: "04",
    title: "Scale",
    desc: "We expand to more channels, workflows, and teams—while keeping quality, safety, and reporting consistent.",
  },
];

const packages = [
  {
    name: "Starter",
    badge: "Best for proving value",
    priceNote: "Pilot-ready in weeks",
    highlight: false,
    includes: [
      "1 use case (choose Marketing OR Support OR Sales)",
      "Approved knowledge setup (basic)",
      "Guardrails + human handoff",
      "1 channel (web chat or email)",
      "Basic KPI report (weekly)",
      "Change Management Pack available (training + SOPs + office hours)",
    ],
    goodFor: "Teams starting with a single workflow and clear ROI target.",
  },
  {
    name: "Growth",
    badge: "Most popular",
    priceNote: "Multi-workflow momentum",
    highlight: true,
    includes: [
      "2 use cases (ex: Sales + Support)",
      "Knowledge + escalation playbooks",
      "2–3 channels (web + email + SMS)",
      "CRM integration (lead/ticket updates)",
      "Prompt/testing iteration cadence",
      "KPI dashboard + weekly review",
      "Change Management Pack included (role-based playbooks + KPI review)",
    ],
    goodFor: "Teams that want consistent follow-ups + support triage at the same time.",
  },
  {
    name: "Scale",
    badge: "For serious automation",
    priceNote: "Full system build",
    highlight: false,
    includes: [
      "3 use cases (Marketing + Support + Sales)",
      "Advanced routing + role-based behavior",
      "Omnichannel rollout (web/email/SMS/LinkedIn)",
      "Quality controls + audit logs",
      "Monthly optimization roadmap",
      "Training + internal handover docs",
      "Expanded Change Management Pack included (multi-team enablement + governance)",
    ],
    goodFor: "Teams ready to operationalize agents across customer lifecycle end-to-end.",
  },
];

const faqs = [
  {
    q: "What can the AI agents do?",
    a: "They handle repeatable workflows like lead follow-up, customer support triage, retention campaigns, and internal operations—using rules and approved knowledge.",
  },
  {
    q: "How do you prevent the agent from making mistakes?",
    a: "We add guardrails: approved knowledge only, confidence thresholds, escalation rules, and human approval for sensitive actions.",
  },
  {
    q: "How long does a pilot take?",
    a: "Most pilots run 2–4 weeks: discovery → setup → pilot → scale, with weekly KPI review and iteration.",
  },
  {
    q: "Can you integrate with our tools?",
    a: "Yes. We integrate with your CRM, inbox, website, ticketing, analytics, and marketing tools—so the agent fits your workflow.",
  },
  {
    q: "Do you support change management and training?",
    a: "Yes. Adoption is built in: SOPs, playbooks, training (live + recorded), office hours during pilot, and adoption KPI tracking.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <div className="text-xs font-semibold opacity-70">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 max-w-3xl opacity-90">{desc}</p> : null}
    </div>
  );
}

function Card({
  title,
  children,
  highlight,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark ${
        highlight ? "ring-1 ring-brand-primary/50" : ""
      }`}
    >
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

function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AIAgentsHubPage() {
  return (
    <main className="bg-brand-bg">
      <FAQJsonLd />
      {/* HERO */}
      <section>
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
            <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
              <div className="text-xs font-semibold opacity-70">AI Agents Hub</div>

              <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
                Turn conversations into outcomes—automatically.
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed opacity-90 md:text-lg">
                Spinor builds business-ready AI agents that answer customers, follow up leads, and run retention
                campaigns—so your team focuses on what matters. Guardrails and reporting are built in.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="#use-cases" variant="secondary">
                  Explore Use Cases
                </ButtonLink>
              </div>

              {/* Warm illustration placeholder (swap with your actual SVG/illustration later) */}
              <div className="mt-8 rounded-md border border-brand-border bg-brand-muted p-6">
                <div className="font-mono text-sm opacity-90">
                  Signals → Decide → Act → Handoff → Report
                </div>
                <p className="mt-2 text-sm opacity-90">
                  Agents shouldn't be "chatbots." We build workflow agents with triggers, actions, escalation, and KPIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Pick your fastest win"
              title="AI Agent use cases we deploy"
              desc="Start with one use case, prove ROI, then scale to more workflows and channels."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {useCases.map((u) => (
                <Card key={u.title} title={u.title} highlight={u.title === "Sales Agents"}>
                  <div className="inline-flex rounded-md border border-brand-border bg-brand-muted px-3 py-1 text-xs font-semibold">
                    {u.tag}
                  </div>
                  <p className="mt-3 opacity-90">{u.desc}</p>
                  <BulletList items={u.bullets} />
                  <div className="mt-5">
                    <Link
                      href={u.title === "Marketing Performance Agents" ? "/ai-agents-marketing" : u.href}
                      className="text-sm font-semibold text-brand-primary hover:underline"
                    >
                      View this use case →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GUARDRAILS */}
        <section>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Safety + reliability"
              title="Guardrails built in"
              desc="We ship agents that operate within boundaries you approve—so quality stays high."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="What we lock down">
                <BulletList items={guardrails} />
              </Card>
              <Card title="What you can expect">
                <ul className="mt-3 space-y-2">
                  {[
                    "Clear escalation paths for sensitive queries",
                    "Consistent tone aligned to your brand",
                    "Transparent iteration (what changed and why)",
                    "Weekly insights: what users ask, where friction happens",
                  ].map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <ButtonLink href="/contact" variant="secondary">
                    Discuss guardrails
                  </ButtonLink>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ADOPTION & CHANGE */}
        <section id="adoption">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Adoption matters"
              title="AI isn't the hard part—adoption is."
              desc="Agents only deliver outcomes when teams trust them and workflows change. We run a practical change track alongside build and integration—so your team knows what to do, when to trust the agent, and how to escalate."
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
                <h3 className="font-serif text-xl font-semibold">What we enable</h3>
                <ul className="mt-3 space-y-2 text-sm opacity-90">
                  {[
                    "Agent boundaries: what it can do vs when it escalates",
                    "Team training + quick guides (role-based)",
                    "SOPs for handoff, approvals, and exceptions",
                    "Adoption KPIs (usage, resolution, conversions)",
                    "Weekly review loop to improve performance safely",
                  ].map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <ButtonLink href="/change-management" variant="secondary">
                    Learn about Change Management
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-md border border-brand-border bg-brand-muted p-6">
                <h3 className="font-serif text-xl font-semibold">How teams adopt faster</h3>
                <p className="mt-3 text-sm opacity-90 leading-relaxed">
                  Launch day isn't the finish line. We define the operating rhythm: who owns what, when to escalate,
                  what "good" looks like, and how performance improves week over week.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" variant="primary">
                    Talk to an Expert
                  </ButtonLink>
                  <ButtonLink href="#use-cases" variant="secondary">
                    See Use Cases
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IMPLEMENTATION WORKS */}
        <section id="process">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Delivery model"
              title="How implementation works"
              desc="A simple rollout that keeps risk low and learning fast."
            />

            <div className="grid gap-6 md:grid-cols-4">
              {process.map((p) => (
                <div
                  key={p.step}
                  className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark"
                >
                  <div className="text-xs font-semibold opacity-70">{p.step}</div>
                  <h3 className="mt-2 font-serif text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-brand-border bg-brand-muted p-6">
              <p className="text-sm opacity-90">
                <span className="font-semibold">Tip:</span> start with the workflow that currently costs you the most time
                (slow replies, missed follow-ups, repeated questions). That's usually the quickest ROI.
              </p>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="pricing">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle
              eyebrow="Packages"
              title="Starter / Growth / Scale"
              desc="Designed around the exact use cases above—so you can start small and scale confidently."
            />

            <div className="mb-6 rounded-md border border-brand-border bg-brand-muted p-6">
              <div className="text-xs font-semibold opacity-70">Optional Add-On</div>
              <h3 className="mt-2 font-serif text-xl font-semibold">
                Change Management Pack (recommended for faster adoption)
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Training, SOPs, internal launch comms templates, and adoption KPIs—so teams actually use the agent workflows after go-live.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((p) => (
                <div
                  key={p.name}
                  className={`rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark ${
                    p.highlight ? "ring-2 ring-brand-primary/60" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl font-semibold">{p.name}</h3>
                    <span className="rounded-md border border-brand-border bg-brand-muted px-3 py-1 text-xs font-semibold">
                      {p.badge}
                    </span>
                  </div>
                  <div className="mt-2 text-sm opacity-80">{p.priceNote}</div>

                  <BulletList items={p.includes} />

                  <p className="mt-4 text-sm opacity-90">
                    <span className="font-semibold">Good for:</span> {p.goodFor}
                  </p>

                  <div className="mt-5">
                    <ButtonLink href="/contact" variant={p.highlight ? "primary" : "secondary"}>
                      Choose {p.name}
                    </ButtonLink>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-brand-border bg-brand-muted p-6">
              <p className="text-sm opacity-90">
                Want custom pricing? We'll recommend the smallest plan that hits your KPI goal—then scale once results are proven.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <SectionTitle title="FAQ" desc="Quick answers before you start." />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="rounded-md border border-brand-border bg-brand-card p-5 shadow-card dark:shadow-cardDark"
                >
                  <summary className="cursor-pointer list-none font-semibold">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border-2 border-brand-border bg-brand-card p-10 shadow-card dark:shadow-cardDark">
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                Want an agent plan in 30 minutes?
              </h2>
              <p className="mt-3 max-w-2xl opacity-90">
                Tell us your workflow and KPI goal. We'll recommend the best first use case and a simple rollout plan.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary">
                  View All Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
