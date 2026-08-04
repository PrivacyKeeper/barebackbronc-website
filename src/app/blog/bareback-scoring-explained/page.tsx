import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bareback Scoring Explained: The Lick and the Other 50 Points",
  description:
    "Two judges, four numbers. What the spurring stroke actually has to look like to mark, and why half your score was decided when the draw came out.",
  alternates: {
    canonical:
      "https://www.barebackbronc.pro/blog/bareback-scoring-explained",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Bareback Scoring Explained: The Lick and the Other 50 Points
      </h1>

      <p>
        Two judges. Each awards <strong>0–25 for the rider</strong> and{" "}
        <strong>0–25 for the horse</strong>. Four numbers, maximum 100. Simple
        structure, and half of it has nothing to do with you.
      </p>

      <h2>The rider half: the lick</h2>

      <p>
        Bareback spurring is visibly different from saddle bronc and it is the
        thing judges are watching:
      </p>

      <ol>
        <li>Knees come up as the horse rises</li>
        <li>Spurs roll up the horse&apos;s shoulders</li>
        <li>Legs straighten</li>
        <li>
          Spurs return over the shoulder point, ready for the next jump
        </li>
      </ol>

      <p>
        The completeness and timing of that stroke is what riders call{" "}
        <strong>the lick</strong>, and it is where the rider marks come from.
      </p>

      <p>What judges are specifically assessing:</p>

      <ul>
        <li>
          <strong>Spurring technique</strong> — is the stroke full, or is it a
          token movement
        </li>
        <li>
          <strong>Toes turned out</strong>, and how far they stay that way
        </li>
        <li>
          <strong>Continuity</strong> — every jump, all eight seconds
        </li>
        <li>
          <strong>Control</strong>
        </li>
        <li>
          <strong>Willingness to take what the horse brings</strong> — riding
          the horse rather than surviving it
        </li>
      </ul>

      <p>
        That last one is the difference between a 19 and a 23 on the same
        horse, and it is the hardest to fake.
      </p>

      <h2>Where rider marks are actually lost</h2>

      <p>
        Almost always in the last two or three seconds. The arm is gone, the
        grip is going, and the stroke shortens — the knees do not come as high,
        the spurs do not roll as far, the toes come in.
      </p>

      <p>
        From the chute it looks like the same ride throughout. On video,
        second-by-second, it is obvious. Which is exactly the kind of thing
        worth measuring rather than remembering: where in the eight seconds your
        form starts to come apart, tracked over a season.
      </p>

      <p>
        And notice that the fix for it is not technique work. It is grip and
        conditioning — see{" "}
        <Link href="/blog/bareback-injuries-and-career-length">
          why careers are short
        </Link>
        .
      </p>

      <h2>The horse half</h2>

      <p>Power, height, direction change, difficulty.</p>

      <p>
        Same principle as saddle bronc: a horse that bucks hard{" "}
        <em>and changes direction</em> marks better than one that bucks hard in
        a straight line, because it is harder to ride.
      </p>

      <p>
        Which means up to 50 of your 100 points were determined when the draw
        came out. You cannot win on a horse that will not mark, however good the
        lick is.
      </p>

      <h2>Why the split matters more than the total</h2>

      <p>Two 76s:</p>

      <ul>
        <li>
          <strong>Rider 20+20, horse 18+18.</strong> You rode well on a plain
          horse. Nothing more was available.
        </li>
        <li>
          <strong>Rider 15+16, horse 22+23.</strong> You had a good horse and
          left points on it.
        </li>
      </ul>

      <p>
        Those tell you completely different things about what to do next, and a
        results sheet reading &ldquo;76&rdquo; tells you neither. That is why we
        store all four component numbers rather than the total.
      </p>

      <p>Tracked across a season, the split answers two questions:</p>

      <ol>
        <li>
          <strong>Am I improving?</strong> If totals are rising but rider marks
          are flat, you are drawing better, not riding better.
        </li>
        <li>
          <strong>Am I drawing badly, or does it just feel that way?</strong>{" "}
          Your average horse mark against the field&apos;s answers it.
        </li>
      </ol>

      <h2>And judge splits</h2>

      <p>
        Where two carded officials marked the same eight seconds differently is
        genuinely interesting over enough rides — it says something about which
        parts of a ride get read consistently and which are more subjective. We
        keep both judges&apos; numbers rather than just the sum.
      </p>

      <p>
        <Link href="/rules">Read the full rules reference &rarr;</Link>
      </p>
    </article>
  );
}
