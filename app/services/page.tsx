import type { Metadata } from "next";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Services | Spinor Innovations",
  description:
    "Software development, AI agents, marketing, and change management—built for real adoption and measurable outcomes.",
  alternates: { canonical: "/services" },
};

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

export default function ServicesPage() {
  return (
    <main className="bg-brand-bg">
        <section className="pt-14 pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
              <div className="text-xs font-semibold opacity-70">Services</div>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Built to launch—and built to stick.
              </h1>
              <p className="mt-4 max-w-3xl opacity-90 md:text-lg">
                Spinor builds business-ready software, AI agents, and growth systems—with adoption support so teams
                actually use what we deliver.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonLink>
                <ButtonLink href="/ai-agents" variant="secondary">
                  See AI Agent Use Cases
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card title="Software Development">
                <p>
                  Websites, mobile apps, and custom platforms that are fast, scalable, and designed for real users.
                </p>
                <BulletList
                  items={[
                    "Websites: eCommerce, dynamic, static",
                    "Mobile apps and desktop applications",
                    "Extensions and integrations",
                    "Performance, SEO-ready builds, and maintainable code",
                  ]}
                />
              </Card>

              <Card title="AI Agents Development">
                <p>
                  Workflow agents that answer customers, follow up leads, and run retention campaigns—with guardrails and reporting.
                </p>
                <BulletList
                  items={[
                    "Marketing performance agents (retention + lifecycle)",
                    "Customer service agents (triage + escalation)",
                    "Sales agents (qualification + meeting booking)",
                    "Integrations with CRM, inbox, and tools you already use",
                  ]}
                />
                <div className="mt-5">
                  <Link className="text-sm font-semibold text-brand-primary hover:underline" href="/ai-agents">
                    Explore AI Agents Hub →
                  </Link>
                </div>
              </Card>

              <Card title="Marketing (D2C + B2B)">
                <p>
                  Growth systems across D2C and B2B—built for compounding results, not one-off campaigns.
                </p>
                <BulletList
                  items={[
                    "D2C: retention, content/SEO, paid growth, lifecycle messaging",
                    "B2B: LinkedIn, email, SMS outreach systems",
                    "Offer positioning and conversion improvements",
                    "Reporting and weekly iteration cadence",
                  ]}
                />
              </Card>

              <Card title="Change Management & Adoption">
                <p>
                  Make new tech stick—process, training, and rollout support built for real teams.
                </p>
                <BulletList
                  items={[
                    "Stakeholder alignment + change champions",
                    "Training (live + recorded) and role-based playbooks",
                    "SOPs, checklists, and escalation paths",
                    "Internal comms templates (launch + reminders)",
                    "Adoption metrics + feedback loop",
                  ]}
                />
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink href="/change-management" variant="secondary">
                    Learn More
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="primary">
                    Plan Adoption
                  </ButtonLink>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
  );
}
