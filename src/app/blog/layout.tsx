import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | BarebackBronc.Pro Blog",
    default: "BarebackBronc.Pro Blog - Team Roping News, Numbers, Rules & Partners",
  },
  description:
    "The official BarebackBronc.Pro blog. Team roping rules, the handicap number system, division caps and floors, tie-on eligibility, partner matching, and everything the team roping community needs.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="arena-page arena-bg-2 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#0d0708]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; BarebackBronc.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-muted transition hover:text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        {children}
      </main>

      <footer className="border-t border-ink-border bg-[#0d0708] px-8 py-8 text-center text-sm text-muted-dim">
        <p>&copy; 2026 Apps 1, LLC. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/terms" className="text-brand hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="text-brand hover:underline">
            Privacy
          </Link>
          <Link href="/refund" className="text-brand hover:underline">
            Refund Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
