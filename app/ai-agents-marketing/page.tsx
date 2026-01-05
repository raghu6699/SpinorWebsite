import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Marketing Performance Agents | AI Agents | Spinor Innovations",
  description:
    "Deploy AI agents to run D2C retention, content/SEO ops, and campaign optimization—with guardrails, weekly KPI loops, and scale-ready workflows.",
  alternates: { canonical: "/ai-agents-marketing" },
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

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
    title: "Lifecycle Retention Agent",
    bullets: [
      "Triggers: new customer, first purchase, time since last order, category interest",
      "Flows: welcome, post-purchase education, reorder reminders, win-back",
      "Stop rules to prevent over-messaging",
      "Weekly optimization suggestions based on performance signals",
    ],
  },
  {
    title: "Content & SEO Ops Agent",
    bullets: [
      "Topic pipeline aligned to search intent + customer questions",
      "Content briefs + outlines in your brand voice",
      "On-page improvements and internal linking targets",
      "Publishing routine that compounds results over time",
    ],
  },
  {
    title: "Campaign Optimization Agent",
    bullets: [
      "Monitors performance signals (CTR, CVR, repeat-rate movement)",
      "Identifies what to scale, pause, or retest",
      'Creates a simple weekly "what to change next" plan',
      "Keeps experimentation structured (no chaos)",
    ],
  },
];

const deliverables = {
  first14Days: [
    "Lifecycle map + KPI targets (repeat behavior, contribution by flows)",
    "Audience segments + trigger plan (start/stop rules per flow)",
    "Brand voice + claims guardrails (what's allowed, what needs approval)",
    "3–5 core retention flows (pilot-ready)",
    "Content & SEO ops starter kit (topic pipeline + 4–8 briefs + link map)",
    "Weekly performance review template (exec-ready summary)",
  ],
  pilotWeeks: [
    "Experiment backlog (offers, segments, message variations)",
    "KPI dashboard snapshot (action-focused)",
    "Iteration change log (what changed and why)",
  ],
};

const integrations = [
  "eCommerce & CMS: Shopify / WooCommerce / custom storefronts, headless CMS",
  "Email & messaging: email platforms, SMS tools, WhatsApp (where permitted), push notifications",
  "Analytics: GA4, Search Console, attribution dashboards, pixel tracking",
  "Ads: Meta, Google Ads, TikTok (as applicable) + creative testing workflows",
  "Data signals: customer lists, order history, product catalog feeds, segmentation rules",
  "Content ops: keyword research tools, calendars, publishing workflows",
];

const process = [
  { step: "Discovery", desc: "Map the lifecycle, define KPIs, pick the fastest ROI flow set." },
  { step: "Setup", desc: "Connect approved knowledge, build segments, set guardrails, configure channels." },
  { step: "Pilot", desc: "Controlled launch, weekly KPI review, tune prompts + rules based on data." },
  { step: "Scale", desc: "Expand flows, deepen segmentation, add channels and content themes." },
];

export default function MarketingAgentsPage() {
  return (
    <main className="bg-brand-bg">
      {/* HERO */}
      <section className="pt-14 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
            <div className="text-xs font-semibold opacity-70">
              AI Agents Use Case • Marketing Performance
            </div>

            <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              Turn retention into a system—not a scramble.
            </h1>

            <p className="mt-4 max-w-3xl opacity-90 md:text-lg">
              We deploy marketing performance agents that run lifecycle retention, content/SEO operations,
              and campaign optimization—so your team ships faster and learns every week. Guardrails and
              reporting are built in.
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
                { k: "Focus", v: "Repeat purchases + lifecycle efficiency" },
                { k: "Channels", v: "Email, SMS, onsite, ads, content" },
                { k: "Control", v: "Guardrails + weekly KPI loop" },
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
        title="When D2C grows, marketing becomes patchwork"
        desc="This is what we typically see before agents: campaigns happen, but execution is inconsistent and learnings don&apos;t compound."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Common friction">
            <BulletList
              items={[
                "Retention exists, but not as a repeatable operating system",
                'Content/SEO is "when we have time," not a pipeline',
                "Insights are scattered—actions aren't consistent",
                "Leadership wants predictable growth without constant firefighting",
              ]}
            />
          </Card>
          <Card title="What changes after deployment">
            <BulletList
              items={[
                "Lifecycle flows run with start/stop rules and clean segmentation",
                "Content becomes a weekly engine with internal linking discipline",
                "Campaign decisions happen on a steady KPI rhythm",
                "Your team spends less time on manual coordination and rework",
              ]}
            />
          </Card>
        </div>
      </Section>

      {/* AGENT STACK */}
      <Section
        title="What we deploy"
        desc="A stack of workflow agents designed around signals → actions → reporting (not just chatting)."
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
            <span className="font-semibold">Note:</span> We don&apos;t automate blindly. High-impact changes (policy wording,
            medical/health claims, aggressive discounting) can be set to "human approval required."
          </p>
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section
        title="Deliverables"
        desc="Concrete artifacts your team can operate with—starting day one."
      >
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
        desc="If you already have a stack, we plug in. If not, we recommend a simple setup that matches your budget."
      >
        <div className="rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
          <BulletList items={integrations} />
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        title="How implementation works"
        desc="A rollout model that keeps risk low and learning fast."
      >
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
      <Section
        title="Outcomes we aim for"
        desc="We keep results measurable without exposing private client numbers."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Retention becomes systematic",
              desc: "Lifecycle flows run with segmentation, stop rules, and consistent iteration.",
            },
            {
              title: "Content becomes a pipeline",
              desc: "SEO ops moves from ad-hoc writing to a repeatable weekly engine.",
            },
            {
              title: "Faster execution + clearer decisions",
              desc: "Weekly KPI loop clarifies what to change next—without guesswork.",
            },
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
              Want a retention plan in 30 minutes?
            </h2>
            <p className="mt-3 max-w-2xl opacity-90">
              Tell us your customer lifecycle and KPI goal. We'll recommend the fastest first workflow and a pilot plan.
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
              <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents-customer-service">
                Next: Customer Service Agents →
              </Link>
              <Link className="font-semibold text-brand-primary hover:underline" href="/ai-agents-sales">
                Explore: Sales Agents →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
