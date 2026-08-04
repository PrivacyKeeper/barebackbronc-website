import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BarebackBronc.pro",
  description:
    "How BarebackBronc.pro collects, uses, and protects your data — including our additional protections for users under 18 and how stock data and judge scores are handled.",
  alternates: { canonical: "https://www.barebackbronc.pro/privacy" },
};

const sections = [
  {
    h: "1. Information We Collect",
    p: "We collect information you provide directly, including name, email, profile information, and payment details when you subscribe to premium features. We also collect competition data such as scores, judge marks, covered and buck-off outcomes, event entries, draws, riding history by horse, conditioning logs, location data (GPS), and app interactions.",
  },
  {
    h: "2. How We Use Your Information",
    p: "We use your information to provide and improve our services, produce draw analysis and rider-horse matchup history, process entries and transactions, send notifications about draws, results, and rerides, personalize your experience, and provide location-based features such as weather, arena finding, and nearby rodeo discovery. We never sell your personal data to third parties.",
  },
  {
    h: "3. Competition Results Are Public Record",
    p: "Scores, placings, covered and buck-off outcomes, and which horse you were on are competition record. They are visible to other users and they attach to both you and the horse, because a bucking horse's statistics are only meaningful if every trip on it is counted. You cannot remove a trip from a horse's record, and a horse's record cannot be edited to remove you. This is different from most data in the app, and it is deliberate.",
  },
  {
    h: "4. Users Under 18",
    p: "Bareback has a youth population through junior rodeo, high school and college, and we apply additional protections by default. Profiles for users under 18 default to followers-only visibility. Location precision for minors is never shown below city level. Adults cannot direct message a minor outside of an established school, barn, or mentor relationship, and those relationships carry guardian visibility. Photo and video sharing for minors is controlled by a guardian setting on the account. A minor's recruiting profile does not become public automatically upon turning 18 — that requires an explicit action by the account holder.",
  },
  {
    h: "5. Injury and Health Records",
    p: "Injury records, conditioning logs, and recovery tracking are private to your account by default and are never shown to other users, producers, associations, or contractors. We do not sell, share, or analyse them for anyone but you. This is health information about a sport with a serious injury profile, and it is treated accordingly. You can export or delete it at any time. Where a producer uses our judge entry tools, individual judge marks are submitted independently and form part of the competition record — that is separate from anything in this section.",
  },
  {
    h: "6. Location Data",
    p: "We collect GPS location data to provide weather information, severe weather alerts, arena and rodeo discovery, route planning, and travel features. You can disable location services at any time through your device settings, though some features will be limited. For accounts belonging to minors, location is never displayed to other users below city level regardless of device settings.",
  },
  {
    h: "7. Self-Recorded Data vs. Official Results",
    p: "Anything you record yourself — practice sessions, conditioning logs, self-noted scores — is stored separately and clearly labeled. It is never merged into official results, standings, or public leaderboards. Official scores originate from carded judges via event producers and sanctioning bodies.",
  },
  {
    h: "8. Photos, Video, and Run Analysis",
    p: "Video you upload for ride analysis is stored securely and processed to produce coaching metrics such as mark-out position, spur stroke timing and rhythm, and body position through the ride. A trip video also shows a horse that belongs to a contractor; where you share a trip publicly it may be surfaced on that horse's page. You control whether analyzed rides are shared. For accounts belonging to minors, guardian controls apply to all media sharing.",
  },
  {
    h: "9. Data Storage and Security",
    p: "Your data is stored securely using industry-standard encryption. We use Supabase for database management and authentication, and Stripe for payment processing, both of which maintain strict security standards.",
  },
  {
    h: "10. Your Rights",
    p: "You have the right to access, correct, or delete your personal data at any time. You can export your data or request account deletion in the app, or by contacting support@barebackbronc.pro. Guardians may exercise these rights on behalf of a minor.",
  },
  {
    h: "11. Third-Party Services",
    p: "We integrate with third-party services including payment processors (Stripe), mapping and places services (Google Maps), weather APIs, push notification providers, analytics providers, and cloud storage. These services have their own privacy policies governing their use of your data.",
  },
  {
    h: "12. Blocking, Reporting, and Moderation",
    p: "Block, report, and mute are available on every account from launch and apply to messages, posts, and comments alike. Report categories include harassment and unwanted contact specifically. Reports are reviewed by our moderation team, and reported content may be retained for the duration of an investigation and any subsequent enforcement.",
  },
  {
    h: "13. Changes to This Policy",
    p: "We may update this policy as the product develops. Material changes will be communicated in the app and by email to the address on your account.",
  },
  {
    h: "14. Contact",
    p: "Questions about this policy or your data can be sent to support@barebackbronc.pro.",
  },
];

export default function Privacy() {
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
          <h1 className="mb-2 text-4xl font-bold text-cream">Privacy Policy</h1>
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
