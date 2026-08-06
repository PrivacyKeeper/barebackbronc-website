import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Bareback Bronc Riding Blog - Rules, Rigging, Stock & Longevity",
  description:
    "Bareback bronc riding rules explained, the rigging specification that gets riders turned out, how the 100-point score works, reading a draw, and the injury and conditioning side that decides how long a career lasts — from BarebackBronc.Pro.",
  alternates: { canonical: "https://www.barebackbronc.pro/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-brand">
        BarebackBronc.Pro Blog
      </h1>
      <p className="mt-3 text-muted">
        Rules, rigging, stock, and staying in one piece — written for people
        who actually nod for one.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-ink-border bg-ink-raised/70 p-6 transition hover:border-brand"
          >
            <p className="text-xs tracking-wider text-muted-dim uppercase">
              {post.date}
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand">
              <a href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#e6d3d3]">
              {post.excerpt}
            </p>
            <a
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-2 hover:underline"
            >
              Read more &rarr;
            </a>
          </article>
        ))}
      </div>
    </>
  );
}
