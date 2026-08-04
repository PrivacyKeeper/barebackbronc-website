import type { Metadata } from "next";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | BarebackBronc.pro",
  description:
    "Get help with BarebackBronc.pro — account questions, entries and draws, score and stock data corrections, contractor access, safety reports, and data requests.",
  alternates: { canonical: "https://www.barebackbronc.pro/support" },
};

const topics = [
  {
    h: "Account and billing",
    p: "Subscription changes, cancellations, and receipts. Purchases made through the App Store or Google Play must be refunded through those stores.",
    email: "support@barebackbronc.pro",
    subject: "Account%20and%20billing",
  },
  {
    h: "Entries, draws, and rerides",
    p: "Entry and draw problems are usually fastest to solve with the event producer, since they control the entries, the stock draw, and the payout. Reride decisions are the judges'. We can help you reach a producer.",
    email: "support@barebackbronc.pro",
    subject: "Entry%20or%20results%20question",
  },
  {
    h: "Scores and results",
    p: "If a score is wrong in the app, it is almost always fastest to go to the producer or the association first, since they hold the official record and we display it. If our copy disagrees with theirs, tell us and we will correct ours. We do not judge, re-score, or arbitrate a mark — score disputes go through the association's grievance process.",
    email: "support@barebackbronc.pro",
    subject: "Score%20correction",
  },
  {
    h: "Rigging spec and equipment",
    p: "If the specification we hold for an association looks wrong, tell us and include the rulebook edition — a wrong spec in a checker is worse than no checker. We cannot clear a rigging for use; only a chute judge can do that, and our checker is a record-keeping tool rather than an inspection.",
    email: "support@barebackbronc.pro",
    subject: "Rigging%20spec%20question",
  },
  {
    h: "Stock data corrections",
    p: "If a horse's record has a trip attributed to the wrong rider, a duplicate entry, or a buck pattern that no longer reflects the horse, send it to us. Trip results themselves are competition record and are not removable, but errors in them are worth fixing and we would rather know.",
    email: "support@barebackbronc.pro",
    subject: "Stock%20data%20correction",
  },
  {
    h: "Stock contractor access",
    p: "Running a bucking string and want herd management, pen assembly, rest tracking, buck-off statistics, and horse marketing pages. Contractors are being onboarded first, because the data that makes this app useful is yours.",
    email: "support@barebackbronc.pro",
    subject: "Contractor%20early%20access",
  },
  {
    h: "Safety, harassment, or unwanted contact",
    p: "Report it in the app for the fastest response — reports there reach our moderation team directly with the relevant context attached. You can also email us, and if a minor is involved, say so in the subject line so it is prioritized.",
    email: "support@barebackbronc.pro",
    subject: "Safety%20report",
  },
  {
    h: "Producer access",
    p: "Producing rodeos and want the console — stock draw with a documented seed, independent judge entry, reride management, equipment checks, and payouts.",
    email: "support@barebackbronc.pro",
    subject: "Producer%20early%20access",
  },
  {
    h: "Guardian requests",
    p: "Guardians can adjust a minor's visibility, messaging, media sharing, and location settings, and can export or delete the account's data. Adults cannot message a minor outside a linked school, barn, or mentor relationship.",
    email: "support@barebackbronc.pro",
    subject: "Guardian%20request",
  },
  {
    h: "Data export or account deletion",
    p: "You can export your data or delete your account in the app. If you would rather we handle it, email us from the address on the account.",
    email: "support@barebackbronc.pro",
    subject: "Data%20request",
  },
  {
    h: "Rules corrections",
    p: "If something in our rules reference is out of date or wrong, tell us. Include the association and the amendment date if you have it — we version rules by date, and both the mark-out rule and the rigging specification differ between bodies, so corrections are welcome.",
    email: "support@barebackbronc.pro",
    subject: "Rules%20correction",
  },
];

export default function Support() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#0d0708]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="BarebackBronc.pro" className="h-12 w-auto" />
            <span className="hidden text-base font-bold tracking-wide text-brand sm:block">
              BAREBACKBRONC<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-semibold tracking-wider text-muted uppercase">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-cream">
          Support
        </h1>
        <p className="mt-4 text-lg text-muted">
          Email us at{" "}
          <a
            href="mailto:support@barebackbronc.pro"
            className="text-brand hover:underline"
          >
            support@barebackbronc.pro
          </a>{" "}
          and we will get back to you. Pick the closest topic below so it
          reaches the right person faster.
        </p>

        <div className="mt-10 space-y-4">
          {topics.map((t) => (
            <div
              key={t.h}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h2 className="text-lg font-semibold text-brand">{t.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#e6d3d3]">
                {t.p}
              </p>
              <a
                href={`mailto:${t.email}?subject=${t.subject}`}
                className="mt-3 inline-block text-sm font-semibold text-brand-2 hover:underline"
              >
                Email about this &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
