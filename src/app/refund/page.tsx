import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | BarebackBronc.pro",
  description:
    "Refund terms for BarebackBronc.pro subscriptions, and how rodeo entry fees, office charges, turnouts, and rerides are handled.",
  alternates: { canonical: "https://www.barebackbronc.pro/refund" },
};

const sections = [
  {
    h: "1. Subscriptions",
    p: "Premium subscriptions are billed monthly or annually and renew automatically until cancelled. You may cancel at any time; cancellation takes effect at the end of your current billing period and you keep premium access until then.",
  },
  {
    h: "2. App Store Purchases",
    p: "Subscriptions purchased through the Apple App Store or Google Play are governed by that store's refund policy and must be requested directly from Apple or Google. We cannot issue refunds for store-processed purchases on their behalf.",
  },
  {
    h: "3. Purchases Made Directly",
    p: "For subscriptions purchased directly through us, contact support@barebackbronc.pro within 14 days of the charge and we will review the request. Refunds are issued to the original payment method.",
  },
  {
    h: "4. Entry Fees and Office Charges",
    p: "Entry fees are collected on behalf of event producers and are subject to that producer's own entry and refund terms — including the office charge, which is typically non-refundable. Requests to withdraw an entry must go to the producer, and once a draw has been made a withdrawal is a turnout under association rules. We can help you reach a producer, but we cannot override their refund terms.",
  },
  {
    h: "5. Turnouts and Doctor Releases",
    p: "Turning out is governed by the sanctioning association and typically carries a fine rather than a refund. Doctor releases and medical withdrawals follow the association's own procedure and timelines. We are not the association and cannot waive a turnout fine or grant a release.",
  },
  {
    h: "6. Rerides, Scores, and Corrections",
    p: "A reride offered and declined, a reride taken, or a score corrected after the fact changes results, not fees. Where a correction changes a payout after money has been distributed, resolution is between the producer and the association under their rules. We record the decision, including whether a rider kept an original score or took the reride.",
  },
  {
    h: "7. Cancelled or Postponed Events",
    p: "If a producer cancels or postpones a rodeo, refunds are handled by that producer under their stated terms. Where an event is cancelled for biosecurity or venue reasons, we will surface the producer's notice and refund instructions in the app as soon as we receive them.",
  },
  {
    h: "8. Marketplace Transactions",
    p: "Marketplace sales — horses, tack, cattle, rigs, and services — are between buyer and seller. We are not a party to those transactions and do not issue refunds for them.",
  },
  {
    h: "9. Contact",
    p: "Refund questions can be sent to support@barebackbronc.pro.",
  },
];

export default function Refund() {
  return (
    <div className="arena-page arena-bg-2">
      <main className="mx-auto min-h-screen max-w-4xl px-6 py-16">
        <div className="arena-panel p-8 md:p-10">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-brand hover:underline"
          >
            &larr; Back to Home
          </Link>
          <h1 className="mb-2 text-4xl font-bold text-cream">Refund Policy</h1>
          <p className="mb-10 text-sm text-muted">Last updated: August 2026</p>

          <div className="space-y-8 text-[#e6d3d3]">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="mb-2 text-xl font-bold text-brand">{s.h}</h2>
                <p className="leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
