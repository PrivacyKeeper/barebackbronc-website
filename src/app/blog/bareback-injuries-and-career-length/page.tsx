import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Bareback Careers Are Short, and What Actually Extends Them",
  description:
    "Elbow, shoulder, neck, back, hand. The damage accumulates rather than resolving, and the riders who last are the ones who treat conditioning and recovery as part of the job.",
  alternates: {
    canonical:
      "https://www.barebackbronc.pro/blog/bareback-injuries-and-career-length",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Why Bareback Careers Are Short, and What Actually Extends Them
      </h1>

      <p>
        Everyone in rodeo knows bareback riders take the worst of it. Fewer
        people are precise about why, and being precise about it is the first
        step to doing anything about it.
      </p>

      <h2>The load is asymmetric and it does not reset</h2>

      <p>
        You are attached to a bucking horse by one hand. Every jump transmits
        force up one arm — hand, wrist, elbow, shoulder — and out through the
        neck and back.
      </p>

      <p>
        The important word is <strong>cumulative</strong>. A tie-down roper who
        has a bad run is sore for two days. A bareback rider is not accumulating
        acute injuries so much as a load that never fully clears between rodeos,
        on top of the acute ones.
      </p>

      <p>
        Which is why the career-ending problem is usually not a single wreck.
        It is an elbow or a shoulder that has been quietly getting worse for
        four seasons.
      </p>

      <h2>The regions that matter</h2>

      <ul>
        <li>
          <strong>Elbow</strong> — the classic bareback injury, and the one most
          likely to end a career
        </li>
        <li>
          <strong>Shoulder</strong> — repeated hyperextension on the riding side
        </li>
        <li>
          <strong>Neck</strong> — whiplash load on every jump, and the one riders
          under-report the most
        </li>
        <li>
          <strong>Back</strong> — compression and rotation
        </li>
        <li>
          <strong>Hand and wrist</strong> — grip load plus taping over the top
          of existing problems
        </li>
      </ul>

      <p>
        Those are the categories our injury records use, deliberately, because
        &ldquo;arm&rdquo; is not specific enough to see a pattern in.
      </p>

      <h2>What the riders who last actually do</h2>

      <p>
        Nothing exotic. The riders with long careers treat the physical side as
        part of the job rather than as something for after they retire.
      </p>

      <h3>Grip and forearm work</h3>
      <p>
        The hand is the connection. Grip endurance is trainable, and a hand that
        fails at six seconds is a buck-off that reads on video as a technique
        problem.
      </p>

      <h3>Neck</h3>
      <p>
        The most neglected and probably the highest-return. Neck strength work
        is unglamorous, takes ten minutes, and is the difference between
        absorbing a jump and being snapped by it.
      </p>

      <h3>Mobility, not just strength</h3>
      <p>
        Shoulder and thoracic mobility keep the load moving through the system
        rather than concentrating at one joint. A rigid upper back sends
        everything to the shoulder.
      </p>

      <h3>Actual recovery</h3>
      <p>
        Sleep, food, and days off. The least popular item on the list and the
        one that decides the most.
      </p>

      <h2>Why writing it down changes anything</h2>

      <p>
        Two reasons, and both are ordinary.
      </p>

      <p>
        <strong>You cannot see a trend you have not recorded.</strong> An elbow
        that hurts after every rodeo is a fact you know. An elbow that has hurt
        after every rodeo for eleven weeks and is now hurting on the drive home
        is a decision, and you only get that second version if it is written
        down.
      </p>

      <p>
        <strong>Workload is invisible in the moment.</strong> Rodeos entered,
        miles driven, rides taken, and conditioning sessions actually completed
        — across a season that picture tells you when you are cooked. In the
        middle of a run of rodeos, nobody can see it.
      </p>

      <p>
        We log conditioning by block — strength, mobility, conditioning, grip,
        neck, recovery — with a rate of perceived exertion, so a week reads
        honestly rather than as a list of things you meant to do.
      </p>

      <h2>It is private, and that is deliberate</h2>

      <p>
        Injury records in this app are private to your account by default and
        are never shown to producers, contractors, associations, or other
        riders. We do not analyse them for anyone but you.
      </p>

      <p>
        That matters because the culture of this sport does not reward admitting
        you are hurt, and a health log that could be read by somebody deciding
        whether to add you to a card is a health log nobody will fill in
        honestly. An honest private record is worth more than a dishonest
        public one.
      </p>

      <h2>The blunt version</h2>

      <p>
        This is a dangerous event and nothing here changes that. But the
        difference between five years and fifteen is mostly made in the parts of
        the week nobody films — and those are the parts that have never had any
        tooling at all.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
