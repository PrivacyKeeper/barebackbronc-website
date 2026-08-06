import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Bareback Bronc Riding Rules Explained - Rigging Spec, Mark Out & Scoring | BarebackBronc.pro",
  description:
    "A complete plain-language bareback bronc riding rules reference: the eight seconds, the full rigging specification with measurements, the mark-out rule and why it differs between PRCA and IPRA, scoring, disqualifications, and rerides. Current as of August 2026.",
  alternates: { canonical: "https://www.barebackbronc.pro/rules" },
};

/**
 * Two things get tagged by association here: the mark-out rule (a
 * disqualification under PRCA, a scored element under IPRA since 2024) and
 * the consequences of failing equipment inspection, which in some
 * associations carries a fine and an ineligibility period on top of the DQ.
 */
function Assoc({ children }: { children: React.ReactNode }) {
  return <span className="assoc-tag">{children}</span>;
}

const spec = [
  { label: "Handhold length", value: "not exceeding 8 in" },
  { label: "Suede cover on handhold", value: "at least 3 in" },
  { label: "Maximum width at handhold", value: "10 in" },
  { label: "Maximum width at D-ring", value: "6 in" },
];

export default function RulesPage() {
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
          <Link href="/rules" className="text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-3xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Bareback Bronc Riding Rules
          </h1>
          <p className="mt-3 text-muted">
            A plain-language reference to the rules that decide rides and
            scores. Current as of 3 August 2026.
          </p>

          <div className="mt-6 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-[#e6d3d3]">
              <strong className="text-brand">Read this first.</strong> Two
              things on this page vary by association: the{" "}
              <strong className="text-brand">mark-out rule</strong>, which is an
              automatic disqualification under PRCA rules and a scored element
              under IPRA rules, and the consequences of{" "}
              <strong className="text-brand">failing equipment
              inspection</strong>, which in some associations adds a fine and an
              ineligibility period to the disqualification.
            </p>
            <p className="mt-3 text-sm text-[#e6d3d3]">
              Ground rules for a specific rodeo override association rules for
              that rodeo. Youth and junior classes may run modified stock and
              modified requirements.
            </p>
          </div>

          <h2>The ride</h2>
          <p>
            <strong>Eight seconds</strong>, from the moment the horse&apos;s
            front feet hit the ground outside the chute until the whistle. Being
            bucked off before the whistle is a no score.
          </p>
          <p>
            The rider holds a <strong>rigging</strong> — a leather handhold
            cinched over the horse&apos;s withers — with{" "}
            <strong>one hand only</strong>.
          </p>
          <p>
            <strong>No stirrups. No rein.</strong> The only contact points are
            the rigging hand, the spurs, and the rider&apos;s body. That is the
            whole difference between this event and saddle bronc, and it is why
            they are not variations of each other.
          </p>

          <h3>The spurring stroke</h3>
          <p>
            The visible difference from saddle bronc. The rider pulls his knees
            up and rolls his spurs up the horse&apos;s shoulders as the horse
            rises, then straightens his legs and returns the spurs over the
            shoulder point in anticipation of the next jump.
          </p>
          <p>
            The stroke is aggressive and continuous, and the{" "}
            <strong>&ldquo;lick&rdquo;</strong> — the completeness and timing of
            that stroke — is what judges reward.
          </p>

          <h2>The mark-out</h2>
          <p>
            Leaving the chute, <strong>both spurs</strong> must be touching the
            horse above the point of the shoulders and must remain there until
            the horse&apos;s front feet hit the ground after the first jump.
            Both spurs must qualify.
          </p>
          <ul>
            <li>
              <Assoc>PRCA</Assoc> Missing the mark-out is an{" "}
              <strong>automatic disqualification</strong>.
            </li>
            <li>
              <Assoc>IPRA</Assoc> As of 2024, foot position at the moment the
              front feet touch the ground is{" "}
              <strong>folded into the judges&apos; 25 points</strong>, which
              eliminates the automatic no score.
            </li>
          </ul>

          <h2>The rigging specification</h2>
          <p>
            This is the section that makes bareback bronc different from every other
            event, and it is <strong>enforceable at the chute</strong>. Failing
            an equipment inspection is a disqualification and, in some
            associations, an ineligibility period plus a fine.{" "}
            <Assoc>Varies</Assoc>
          </p>

          <div className="mt-4 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            {spec.map((s) => (
              <div key={s.label} className="spec-row">
                <span className="text-sm text-muted">{s.label}</span>
                <span className="spec-value text-sm">{s.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-4">Beyond the measurements:</p>
          <ul>
            <li>One-handed rigging with a flat leather or suede body</li>
            <li>
              The handhold must be <strong>continuous and solid</strong>
            </li>
            <li>
              The suede cover must be <strong>securely fastened</strong>
            </li>
            <li>
              <strong>No fibreglass or metal</strong> in the handhold itself
            </li>
            <li>
              Attached with a <strong>non-metallic cinch strap</strong> of
              mohair or hemp
            </li>
            <li>
              <strong>D-rings only</strong> for hardware
            </li>
          </ul>

          <p>
            This is the most avoidable disqualification in the event, and it is
            usually not deliberate — a handhold wears, suede comes loose, a
            cinch gets replaced with the wrong material. Which is exactly why
            measuring once, storing the result with a photo, and tracking wear
            is worth doing.
          </p>

          <h3>Rider equipment</h3>
          <ul>
            <li>
              <strong>Glove</strong>, taped, sized to the handhold. The fit
              between glove and handhold is personal and critical, and rebuilding
              it from scratch every time you get a new glove is a real cost.
            </li>
            <li>
              <strong>Spurs</strong> with free spinning, dull, humane rowels. The
              chute judge may inspect and disqualify.
            </li>
            <li>
              <strong>Chaps, boots, protective vest, mouthguard.</strong>
            </li>
          </ul>

          <h2>How the score works</h2>
          <p>
            Two judges. Each awards <strong>0 to 25 for the rider</strong> and{" "}
            <strong>0 to 25 for the horse</strong>. Maximum 100.
          </p>
          <p>
            <strong>Rider points</strong> come from spurring technique, the
            degree to which the toes stay turned out, continuity of the spurring
            stroke, control, and willingness to take what the horse brings.
          </p>
          <p>
            <strong>Horse points</strong> come from power, height, direction
            change, and difficulty.
          </p>
          <p>
            All four component numbers are worth storing, never just the total —
            a 76 built on a great horse and a poor ride is a completely
            different afternoon from a 76 built the other way round.
          </p>

          <h2>What ends a ride instantly</h2>
          <ul>
            <li>
              <strong>Bucked off</strong> before the whistle
            </li>
            <li>
              <strong>Free arm contact</strong> — the free arm may not touch the
              horse <em>or the rider&apos;s own body</em>
            </li>
            <li>
              <strong>Equipment inspection failure</strong> — rigging spec, or
              rowels
            </li>
            <li>
              <strong>Failing to mark out</strong> <Assoc>PRCA</Assoc>
            </li>
          </ul>

          <h2>Rerides</h2>
          <p>
            A reride may be offered when a score is affected by equipment
            failure or by a horse that does not buck to performance
            specification. The decision is at the judges&apos; discretion, and a
            rider who is offered one may keep the score he has or take the
            reride.
          </p>

          <h2>The part the rulebook does not cover</h2>
          <p>
            Bareback bronc riders take more physical punishment than anyone else in
            rodeo — the shortest career and the highest cumulative damage in the
            sport, concentrated in the elbow, shoulder, neck, back and hand of
            the riding arm.
          </p>
          <p>
            No rule governs that. But it is the thing that actually determines
            how many seasons you get, which is why injury records, conditioning
            and recovery are built into{" "}
            <Link href="/">BarebackBronc.pro</Link> as a first-class feature
            rather than an afterthought — and kept private to you.
          </p>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              <strong className="text-brand">Sources and currency.</strong> PRCA
              values are from the 2026 PRCA Rule Book. The IPRA mark-out change
              is the 2024 amendment, and the rigging specification is as
              documented in the BarebackBronc.pro build map, rules-verified 24
              July 2026. Rodeo rules change annually and mid-season. This page
              is a reference, not a rulebook — the association&apos;s current
              published rulebook and the ground rules of the specific rodeo
              always govern, and only a chute judge can pass equipment for use.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
