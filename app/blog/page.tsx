import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides and case studies on AI agents, software delivery, marketing systems, and change management.",
  alternates: { canonical: "/blog" },
};

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-brand-border bg-brand-muted px-3 py-1 text-xs font-semibold opacity-90">
      {text}
    </span>
  );
}

export default function BlogIndexPage() {
  return (
    <div className="bg-brand-bg">
        <section className="pt-14 pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-lg border border-brand-border bg-brand-card p-8 shadow-card dark:shadow-cardDark">
              <div className="text-xs font-semibold opacity-70">Blog</div>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Insights, playbooks, and real outcomes.
              </h1>
              <p className="mt-4 max-w-3xl opacity-90 md:text-lg">
                We share practical lessons from building software, deploying AI agents, and driving adoption—so your team can ship faster and scale smarter.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-lg border border-brand-border bg-brand-card p-6 shadow-card transition hover:opacity-95 dark:shadow-cardDark"
                >
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md border border-brand-border bg-brand-muted">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                    />
                  </div>

                  <div className="text-xs font-semibold opacity-70">
                    {new Date(post.date).toLocaleDateString()}
                  </div>

                  <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight group-hover:underline">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-sm opacity-90">{post.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 5).map((t) => (
                      <Tag key={t} text={t} />
                    ))}
                  </div>

                  <div className="mt-5 text-sm font-semibold text-brand-primary">
                    Read case study →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
