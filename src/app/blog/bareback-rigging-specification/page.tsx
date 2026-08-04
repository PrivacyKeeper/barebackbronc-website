import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Rigging Specification, and the DQ Nobody Means to Take",
  description:
    "Eight inches of handhold, three inches of suede, ten at the handhold and six at the D-ring. The most avoidable disqualification in bareback riding, and it is almost never deliberate.",
  alternates: {
    canonical:
      "https://www.barebackbronc.pro/blog/bareback-rigging-specification",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        The Rigging Specification, and the DQ Nobody Means to Take
      </h1>

      <p>
        Bareback is the only event in rodeo where a piece of your own equipment
        carries a measurable legal specification that a judge can check with a
        tape. Get it wrong and you are turned out before you nod — and in some
        associations you pick up a fine and an ineligibility period as well.
      </p>

      <p>
        Almost nobody who fails an inspection meant to. That is the whole point
        of this post.
      </p>

      <h2>The numbers</h2>

      <div className="mt-4 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
        <div className="spec-row">
          <span className="text-sm text-muted">Handhold length</span>
          <span className="spec-value text-sm">not exceeding 8 in</span>
        </div>
        <div className="spec-row">
          <span className="text-sm text-muted">Suede cover on handhold</span>
          <span className="spec-value text-sm">at least 3 in</span>
        </div>
        <div className="spec-row">
          <span className="text-sm text-muted">Max width at handhold</span>
          <span className="spec-value text-sm">10 in</span>
        </div>
        <div className="spec-row">
          <span className="text-sm text-muted">Max width at D-ring</span>
          <span className="spec-value text-sm">6 in</span>
        </div>
      </div>

      <h2>And the rules that are not measurements</h2>

      <ul>
        <li>One-handed rigging with a flat leather or suede body</li>
        <li>
          The handhold must be <strong>continuous and solid</strong>
        </li>
        <li>
          The suede must be <strong>securely fastened</strong> — not merely
          present
        </li>
        <li>
          <strong>No fibreglass or metal in the handhold itself</strong>
        </li>
        <li>
          Attached with a <strong>non-metallic cinch strap</strong> of mohair or
          hemp
        </li>
        <li>
          <strong>D-rings only</strong> for hardware
        </li>
      </ul>

      <h2>How riders actually fail</h2>

      <p>Four ways, in rough order of frequency:</p>

      <h3>The suede has worn or come loose</h3>
      <p>
        Three inches of securely fastened suede is a requirement, and suede is a
        consumable. It wears from the inside where you cannot see it, and the
        stitching lets go gradually. A rigging that passed in March is a
        different object in August.
      </p>

      <h3>Somebody replaced the cinch</h3>
      <p>
        Mohair or hemp, non-metallic. A cinch gets damaged, gets replaced with
        whatever is in the trailer, and nobody thinks about it again until a
        chute judge does.
      </p>

      <h3>A used rigging was never measured</h3>
      <p>
        Riggings get bought secondhand, borrowed, and handed down constantly —
        it is one of the friendliest things about this event. But an inherited
        rigging comes with an inherited assumption that somebody checked it.
        Often nobody did.
      </p>

      <h3>Repairs changed the geometry</h3>
      <p>
        A handhold rebuilt or re-wrapped can come back a different width. Six
        inches at the D-ring is not a lot of margin.
      </p>

      <h2>The fix is boring and it works</h2>

      <p>Measure once. Store the numbers and a photo. Then track wear.</p>

      <p>
        That is the spec checker in our app: enter the measurements, get a pass
        or fail against the association specification, keep the record. It is
        not an inspection and it does not clear anything — only a chute judge
        can do that — but a stored measurement with a date and a photo turns a
        question at the chute into a two-second conversation.
      </p>

      <p>
        And the wear log is the part that matters over a season: rides on a
        handhold, suede condition, cinch condition, with a note when you did
        something about it.
      </p>

      <h2>The other reason to track it</h2>

      <p>
        A rigging failure mid-ride is not a disqualification. It is an{" "}
        <strong>injury event</strong>.
      </p>

      <p>
        You are attached to a bucking horse by one hand and nothing else. The
        legal specification exists because the equipment is load-bearing, and
        wear tracking is a safety practice that happens to also keep you legal.
      </p>

      <h2>The glove is part of the same system</h2>

      <p>
        The fit between glove and handhold is personal and critical, and riders
        rebuild that system from scratch every time they get a new glove — hand,
        size, brand, tape pattern, how many wraps.
      </p>

      <p>
        Worth writing down alongside the rigging it was built around, because
        the two only work as a pair.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
