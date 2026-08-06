import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bareback Bronc Riding Rules Explained: Eight Seconds, One Hand",
  description:
    "No stirrups, no rein, and a free arm that cannot touch anything including you. Every rule that decides whether you get a score at all.",
  alternates: {
    canonical:
      "https://www.barebackbronc.pro/blog/bareback-riding-rules-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Bareback Bronc Riding Rules Explained: Eight Seconds, One Hand
      </h1>

      <p>
        Bareback bronc has very few rules and almost all of them are absolute. You get
        a score or you get nothing. Here is the complete list.
      </p>

      <h2>Eight seconds</h2>

      <p>
        From the moment the horse&apos;s{" "}
        <strong>front feet hit the ground outside the chute</strong> until the
        whistle. Not from the gate opening — a horse that stalls has not started
        your clock.
      </p>

      <p>Come off before the whistle and it is a no score.</p>

      <h2>One hand, and nothing else</h2>

      <p>
        You hold a <strong>rigging</strong> — a leather handhold cinched over
        the horse&apos;s withers — with one hand.
      </p>

      <p>
        <strong>No stirrups. No rein.</strong> The only contact points are the
        rigging hand, the spurs, and your own body against the horse.
      </p>

      <p>
        This is the whole reason bareback bronc is not saddle bronc with the saddle
        removed. There is nothing to brace against, nothing to balance with, and
        one point of attachment.
      </p>

      <h2>The free arm</h2>

      <p>
        The free arm may not touch the horse <strong>or your own body</strong>.
        Contact is a disqualification.
      </p>

      <p>
        The second half of that catches people. Grabbing your own leg, slapping
        your thigh, steadying against yourself — all disqualifications, and all
        things a tired rider does without deciding to.
      </p>

      <h2>The mark-out</h2>

      <p>
        Leaving the chute, <strong>both spurs</strong> must be touching the
        horse above the point of the shoulders and must stay there until the
        front feet hit the ground after the first jump. Both must qualify — one
        in position and one drifting is not a mark-out.
      </p>

      <p>
        Under PRCA rules, missing it is an automatic disqualification. Under
        IPRA rules since 2024, it is folded into the judges&apos; 25 points
        instead.{" "}
        <Link href="/blog/mark-out-rule-explained">
          That difference gets its own post
        </Link>
        .
      </p>

      <h2>The equipment inspection</h2>

      <p>
        This is where bareback bronc differs most from every other event. The chute
        judge can inspect your rigging and your rowels, and failing is a
        disqualification — in some associations with a fine and an
        ineligibility period on top.
      </p>

      <p>The rigging specification, in short:</p>

      <ul>
        <li>Handhold not exceeding 8 inches, continuous and solid</li>
        <li>At least 3 inches of securely fastened suede on the handhold</li>
        <li>Maximum 10 inches wide at the handhold, 6 inches at the D-ring</li>
        <li>No fibreglass or metal in the handhold</li>
        <li>Non-metallic mohair or hemp cinch strap</li>
        <li>D-rings only for hardware</li>
      </ul>

      <p>
        Rowels must be <strong>free spinning, dull, and humane</strong>.
      </p>

      <p>
        Full detail, plus how riders actually fail these, is in{" "}
        <Link href="/blog/bareback-rigging-specification">
          the rigging specification post
        </Link>
        .
      </p>

      <h2>Rerides</h2>

      <p>
        Offered for <strong>equipment failure</strong> or a{" "}
        <strong>horse that does not buck to performance specification</strong>,
        at the judges&apos; discretion. If offered, you may keep the score you
        have or take the reride — a real decision, and one worth recording so
        you can look back at how those calls went.
      </p>

      <h2>Age</h2>

      <p>
        Most associations set a minimum age for bareback bronc, and it is enforced at
        entry rather than discovered at the office. It is surfaced on the entry
        screen in our app for that reason.
      </p>

      <h2>The short version</h2>

      <p>
        Cover it for eight, mark it out with both spurs, keep the free arm off
        everything including yourself, and have a rigging that measures legal.
        Everything else is points.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
