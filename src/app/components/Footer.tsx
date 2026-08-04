import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-[#0d0708]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wider text-brand uppercase">
              BarebackBronc.pro
            </h4>
            <p className="max-w-xs text-sm text-muted">
              Two ropers, two numbers, one time. Find the partner, know the
              division, rope your number honestly.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wider text-brand uppercase">
              Explore
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/events"
                className="text-muted transition hover:text-brand"
              >
                Events
              </Link>
              <Link
                href="/rules"
                className="text-muted transition hover:text-brand"
              >
                Rules &amp; Penalties
              </Link>
              <Link
                href="/blog"
                className="text-muted transition hover:text-brand"
              >
                Blog
              </Link>
              <Link
                href="/support"
                className="text-muted transition hover:text-brand"
              >
                Support
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wider text-brand uppercase">
              Legal
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/privacy"
                className="text-muted transition hover:text-brand"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted transition hover:text-brand"
              >
                Terms of Service
              </Link>
              <Link
                href="/refund"
                className="text-muted transition hover:text-brand"
              >
                Refund Policy
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wider text-brand uppercase">
              Contact
            </h4>
            <a
              href="mailto:support@barebackbronc.pro"
              className="text-sm text-muted transition hover:text-brand"
            >
              support@barebackbronc.pro
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-ink-border pt-6 text-sm text-muted-dim">
          <span>&copy; 2026 Apps 1, LLC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
