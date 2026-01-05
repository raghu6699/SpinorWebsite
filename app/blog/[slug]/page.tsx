import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { blogPosts, getPostBySlug } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://spinorinnovations.com/blog/${post.slug}`,
      images: [{ url: post.coverImage }],
      type: "article",
    },
  };
}

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-brand-border bg-brand-muted px-3 py-1 text-xs font-semibold opacity-90">
      {text}
    </span>
  );
}

function ArticleJsonLd({
  title,
  description,
  datePublished,
  image,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  image: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: [{ "@type": "Organization", name: "Spinor Innovations" }],
    publisher: {
      "@type": "Organization",
      name: "Spinor Innovations",
      logo: {
        "@type": "ImageObject",
        url: "https://spinorinnovations.com/og.png",
      },
    },
    image: [`https://spinorinnovations.com${image}`],
    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return (
      <div className="bg-brand-bg">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="font-serif text-3xl font-semibold">Post not found</h1>
          <p className="mt-3 opacity-90">
            Go back to the <Link className="text-brand-primary underline" href="/blog">blog</Link>.
          </p>
        </div>
      </div>
    );
  }

  const url = `https://spinorinnovations.com/blog/${post.slug}`;

  return (
    <div className="bg-brand-bg">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        datePublished={post.date}
        image={post.coverImage}
        url={url}
      />

      <article className="pt-12 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Breadcrumb + internal link */}
          <div className="text-sm opacity-80">
            <Link href="/blog" className="text-brand-primary hover:underline">
              Blog
            </Link>{" "}
            <span className="opacity-60">/</span> Case Study
          </div>

          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg opacity-90">{post.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>

          {/* Hero image (Image #1) */}
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg border border-brand-border bg-brand-muted">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Table of contents */}
          <div className="mt-10 rounded-md border border-brand-border bg-brand-card p-6 shadow-card dark:shadow-cardDark">
            <h2 className="font-serif text-xl font-semibold">Quick navigation</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["problem", "The problem"],
                ["why-chatbots-fail", "Why traditional chatbots fail"],
                ["implementation", "How we implemented the agent"],
                ["results", "Results: 35% fewer tickets"],
                ["deliverables", "Deliverables we shipped"],
                ["tools", "Tools we integrated with"],
                ["best-practices", "Best practices you can copy"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a className="text-brand-primary hover:underline" href={`#${id}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTENT with proper spacing and headers */}
          <div className="mt-12 space-y-12">
            <section id="problem" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">
                The problem: repetitive tickets were drowning the team
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p className="opacity-90">
                  Customer support teams don't struggle because they're bad at support—they struggle because the same 10–20 questions show up all day,
                  every day: password resets, billing basics, account access, simple how-to steps, and "where do I find…?" requests. Those tickets are real,
                  but they don't require a human typing the same answer again and again.
                </p>
                <p className="opacity-90">
                  In our case, ticket volume increased while response time drifted upward. Customers waited longer, agents got stuck in copy-paste loops,
                  and complex cases suffered because the team had less time to think.
                </p>
              </div>

              <h3 className="font-serif text-xl font-semibold mt-8 mb-4">What the data showed</h3>
              <ul className="space-y-2.5 pl-6">
                <li className="list-disc opacity-90 leading-relaxed">Most tickets were "repeat questions" already answered in documentation</li>
                <li className="list-disc opacity-90 leading-relaxed">Peak hours created backlog and slower first responses</li>
                <li className="list-disc opacity-90 leading-relaxed">Agent morale dropped because the work felt robotic</li>
              </ul>
            </section>

            <section id="why-chatbots-fail" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">
                Why traditional chatbots weren't enough
              </h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p className="opacity-90">
                  We tried rule-based bots. They broke the moment a customer phrased a question differently or asked a follow-up.
                  The experience felt like fighting a menu, not getting help.
                </p>
                <p className="opacity-90">
                  A modern <Link href="/ai-agents-customer-service" className="text-brand-primary hover:underline font-semibold">AI helpdesk agent</Link> is different: it understands natural language, handles multi-turn conversations, and can pull answers from your
                  knowledge base—even when questions are messy, short, or typed with typos. Learn more about our <Link href="/ai-agents" className="text-brand-primary hover:underline">AI Agents solutions</Link>.
                </p>
              </div>
            </section>

            <section id="implementation" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">
                How we implemented the AI helpdesk agent (6 weeks)
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Phase 1: Knowledge base cleanup</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    We audited articles, removed duplicates, and rewrote the top FAQs with clear steps and headings. The agent is only as good as the knowledge
                    it can use.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Phase 2: Training + testing with real tickets</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    We trained on historical ticket patterns and tested edge cases with the support team. Incorrect answers were flagged and fixed early.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Phase 3: Gradual rollout with safe escalation</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    We started small, monitored outcomes, and added clear escalation rules: if confidence was low or the request was sensitive,
                    it handed off to a human with full context.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Phase 4: Weekly improvement loop</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    Every week we reviewed what the agent couldn't answer, improved documentation, and updated workflows.
                    This is where results compound with our <Link href="/change-management" className="text-brand-primary hover:underline">Change Management approach</Link>.
                  </p>
                </div>
              </div>
            </section>

            <section id="results" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">
                Results: 35% fewer tickets (and faster responses)
              </h2>
              <p className="text-base leading-relaxed opacity-90 mb-8">
                Within three months, the agent resolved routine inquiries without human involvement—reducing tickets by <strong className="text-brand-primary font-semibold">35%</strong>.
                That freed the team to focus on complex cases that actually needed a human.
              </p>

              {/* Inline image (Image #2) */}
              <figure className="my-8">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-brand-border bg-brand-muted">
                  <Image
                    src="/blog/ai-helpdesk/results.svg"
                    alt="Support dashboard showing ticket deflection and faster response times"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
                <figcaption className="mt-3 text-sm opacity-75">
                  Example results view: ticket deflection, faster first response, and improved satisfaction.
                </figcaption>
              </figure>

              <h3 className="font-serif text-xl font-semibold mt-8 mb-4">What improved immediately</h3>
              <ul className="space-y-2.5 pl-6">
                <li className="list-disc opacity-90 leading-relaxed">Faster first response (AI answers instantly, 24/7)</li>
                <li className="list-disc opacity-90 leading-relaxed">Better agent focus (less copy-paste, more complex problem solving)</li>
                <li className="list-disc opacity-90 leading-relaxed">More consistent answers (documentation-aligned responses)</li>
              </ul>
            </section>

            <section id="deliverables" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">Deliverables we shipped</h2>
              <ul className="space-y-2.5 pl-6">
                <li className="list-disc opacity-90 leading-relaxed">Helpdesk AI agent with approved knowledge scope</li>
                <li className="list-disc opacity-90 leading-relaxed">Escalation rules + human handoff playbook</li>
                <li className="list-disc opacity-90 leading-relaxed">Updated knowledge base with top FAQs + step-by-step guides</li>
                <li className="list-disc opacity-90 leading-relaxed">Weekly performance review dashboard (deflection + reasons)</li>
                <li className="list-disc opacity-90 leading-relaxed">Change Management Pack: SOPs + training + office hours during pilot</li>
              </ul>
            </section>

            <section id="tools" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">Tools we integrated with</h2>
              <p className="text-base leading-relaxed opacity-90 mb-4">
                We designed the solution to fit existing workflows (no "rip and replace"). Typical integrations include:
              </p>
              <ul className="space-y-2.5 pl-6">
                <li className="list-disc opacity-90 leading-relaxed">Helpdesk/ticketing system</li>
                <li className="list-disc opacity-90 leading-relaxed">Knowledge base / docs</li>
                <li className="list-disc opacity-90 leading-relaxed">CRM (for customer context)</li>
                <li className="list-disc opacity-90 leading-relaxed">Email + chat channels</li>
                <li className="list-disc opacity-90 leading-relaxed">Analytics + reporting</li>
              </ul>
            </section>

            <section id="best-practices" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-6">Best practices you can copy</h2>
              <ol className="space-y-4 pl-6 list-decimal">
                <li className="opacity-90 leading-relaxed">
                  <strong className="font-semibold">Start with knowledge cleanup</strong> — The agent can only be as helpful as your documentation. Before launch, audit your
                  knowledge base and fix outdated or unclear articles.
                </li>
                <li className="opacity-90 leading-relaxed">
                  <strong className="font-semibold">Test with real tickets</strong> — Use historical data to simulate common questions. This reveals gaps early.
                </li>
                <li className="opacity-90 leading-relaxed">
                  <strong className="font-semibold">Build escalation rules upfront</strong> — Define when the agent should hand off to a human. Include triggers like
                  low confidence, sensitive topics, or explicit customer requests.
                </li>
                <li className="opacity-90 leading-relaxed">
                  <strong className="font-semibold">Run a pilot before full rollout</strong> — Start with a subset of users or channels. Monitor outcomes, fix issues, then scale.
                </li>
                <li className="opacity-90 leading-relaxed">
                  <strong className="font-semibold">Review weekly</strong> — Track what the agent couldn't answer and why. Use that data to improve documentation and training.
                </li>
                <li className="opacity-90 leading-relaxed">
                  <strong className="font-semibold">Include your support team early</strong> — They know the pain points and can help shape the solution. Plus, involving them
                  reduces resistance during adoption (see our <Link href="/change-management" className="text-brand-primary hover:underline font-semibold">Change Management service</Link>).
                </li>
              </ol>
            </section>

            <section id="faq" className="scroll-mt-20">
              <h2 className="font-serif text-3xl font-bold tracking-tight mb-8">Frequently asked questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">How long does implementation take?</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    Typical timeline is 4–8 weeks depending on complexity. We spend the first 2 weeks on knowledge prep and training, then roll out
                    gradually with weekly reviews. Check our <Link href="/services" className="text-brand-primary hover:underline">Services page</Link> for more details.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">What if the agent gives a wrong answer?</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    Escalation rules ensure sensitive or uncertain queries go to a human. We also track all interactions and flag errors during
                    weekly reviews, so accuracy improves continuously.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Does this replace our support team?</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    No. It handles repetitive, low-complexity tickets so your team can focus on nuanced cases that need human judgment. Most clients see
                    headcount stay flat while ticket volume increases.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">What happens if we already have a chatbot?</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    We can integrate with or replace it depending on your needs. Modern <Link href="/ai-agents-customer-service" className="text-brand-primary hover:underline">AI agents</Link> handle multi-turn conversations and context better than
                    rule-based bots, so most teams see significant improvements.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold mb-3">How do we measure success?</h3>
                  <p className="text-base leading-relaxed opacity-90">
                    We track ticket deflection rate, first response time, resolution time, customer satisfaction, and agent feedback. You'll get a
                    dashboard updated weekly.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
            <h2 className="font-serif text-2xl font-semibold">Ready to reduce repetitive tickets?</h2>
            <p className="mt-4 text-base opacity-90 leading-relaxed">
              We'll build, train, and deploy a business-ready AI helpdesk agent—plus the rollout plan, training, and weekly support to make sure
              your team actually uses it. <Link href="/change-management" className="text-brand-primary hover:underline font-semibold">Learn more about our Change Management service</Link>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Talk to us</ButtonLink>
              <ButtonLink href="/ai-agents-customer-service" variant="secondary">
                See AI agents for customer service
              </ButtonLink>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-10 rounded-lg border border-brand-border bg-brand-muted p-6">
            <p className="text-sm font-semibold mb-3">Related pages:</p>
            <ul className="space-y-2 text-sm">
              <li>
                → <Link href="/ai-agents" className="text-brand-primary hover:underline">AI Agents Hub</Link>
              </li>
              <li>
                → <Link href="/ai-agents-customer-service" className="text-brand-primary hover:underline">AI Agents for Customer Service</Link>
              </li>
              <li>
                → <Link href="/change-management" className="text-brand-primary hover:underline">Change Management & Adoption</Link>
              </li>
              <li>
                → <Link href="/services" className="text-brand-primary hover:underline">All Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
