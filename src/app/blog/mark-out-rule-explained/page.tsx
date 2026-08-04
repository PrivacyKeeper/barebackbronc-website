import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Mark-Out Rule: One Event, Two Different Outcomes",
  description:
    "Spurs above the points of the shoulders until the front feet land. An automatic disqualification under PRCA rules — and since 2024, a scored element under IPRA rules instead.",
  alternates: {
    canonical: "https://www.barebackbronc.pro/blog/mark-out-rule-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        The Mark-Out Rule: One Event, Two Different Outcomes
      </h1>

      <p>
        The mark-out is the first half-second of a bronc ride and, depending on
        where you are, it is either worth everything or worth a few points.
        That is unusual enough to be worth understanding properly.
      </p>

      <h2>What the rule requires</h2>

      <p>Leaving the chute:</p>

      <ul>
        <li>
          The rider&apos;s feet must be <strong>forward</strong>
        </li>
        <li>
          Spurs <strong>touching the horse above the points of the
          shoulders</strong>
        </li>
        <li>
          Held there until the horse&apos;s front feet hit the ground after the
          first jump out
        </li>
        <li>
          <strong>Both spurs must qualify simultaneously</strong>
        </li>
      </ul>

      <p>
        That last clause is where people get caught. One foot in position and
        one drifting is not a mark-out, even if it looks close from the arena
        floor.
      </p>

      <h2>Then the associations disagree</h2>

      <h3>PRCA — automatic disqualification</h3>

      <p>
        Miss the mark-out and you have no score. It does not matter what
        happened in the remaining seven and a half seconds, and it does not
        matter how good the horse was. The ride is over before you have
        finished it.
      </p>

      <h3>IPRA — scored, not fatal, since 2024</h3>

      <p>
        The IPRA changed this in 2024. The position of the rider&apos;s feet
        when the animal&apos;s front feet touch the ground is now{" "}
        <strong>folded into the 25 points</strong> each official awards during
        the eight-second ride, rather than producing an automatic no score.
      </p>

      <p>
        Their stated purpose was more accurate and consistent judging. A
        marginal mark-out becomes a marginal deduction instead of a
        catastrophe, which removes a lot of the pressure on a single frame of a
        judge&apos;s attention.
      </p>

      <h2>Why this matters more than it looks</h2>

      <p>
        This is the same physical event producing two completely different
        outcomes. A ride that scores 76 at an IPRA rodeo is a no score at a PRCA
        one.
      </p>

      <p>
        For a rider, that changes how you leave the chute. If a missed mark-out
        costs you the whole ride, you protect it — you are conservative through
        the first jump and you accept whatever that costs you in the rest of the
        ride. If it costs you two or three points, you can ride the first jump
        differently.
      </p>

      <p>
        For anyone building software, it is the textbook case of why rules
        cannot be code. Store one outcome and apply it everywhere and you are
        wrong at every rodeo run by the other body. In our system it is a rule
        profile setting bound to the association <em>and the season</em>, since
        IPRA&apos;s answer in 2023 is not IPRA&apos;s answer in 2026.
      </p>

      <h2>How to not have the conversation at all</h2>

      <p>
        The mark-out is one of the few things in bronc riding you can rehearse
        away from a horse. A spur board or a bronc barrel drills exactly this:
        feet forward, spurs set above the points of the shoulders, both at once,
        held until the front end comes down.
      </p>

      <p>
        And it is measurable on video — the position of both feet at the exact
        frame the front feet land. That is one of the things our ride analysis
        reports, because it is a binary you either did or did not do, which
        makes it about the cleanest coaching signal in the event.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
