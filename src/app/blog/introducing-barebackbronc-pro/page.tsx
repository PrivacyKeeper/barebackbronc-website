import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introducing BarebackBronc.Pro",
  description:
    "The shortest career in rodeo and the highest cumulative damage in the sport. Three things nobody has built — rigging management, a stock database, and an honest record of what your body is carrying.",
  alternates: {
    canonical:
      "https://www.barebackbronc.pro/blog/introducing-barebackbronc-pro",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        Introducing BarebackBronc.Pro
      </h1>

      <p>
        Bareback bronc riders take more physical punishment than anyone else in rodeo.
        Shortest career, highest cumulative damage — elbow, shoulder, neck,
        back, and hand, all on one side.
      </p>

      <p>
        That is not colour commentary. It is the design brief for this app.
      </p>

      <h2>Three things nobody has built</h2>

      <h3>1. Rigging management</h3>

      <p>
        The rigging has no analog anywhere else in rodeo. It is a piece of
        personal equipment with a <em>legal specification</em>, a{" "}
        <em>per-horse fit problem</em>, a <em>wear life</em>, and a set of{" "}
        <em>disqualification risks</em>.
      </p>

      <p>Nobody tracks any of it.</p>

      <p>
        So: measure it once, get a pass or fail against the association spec,
        keep the photo. Save your per-horse setup — pad stack, position, tape
        wraps — instead of rebuilding it from memory on a big-withered horse you
        last saw two seasons ago. Track wear on the handhold and the suede,
        because a rigging failure mid-ride is an injury event, not an
        inconvenience.
      </p>

      <h3>2. Stock intelligence</h3>

      <p>
        Half your score is the horse, and the draw decides seasons. Every
        recorded trip, buck-off rate, average horse mark, how it comes out of
        the chute, whether it is honest or erratic.
      </p>

      <p>
        Plus two things that only matter in this event: the horse&apos;s{" "}
        <strong>wither profile</strong> — high, flat, or wide — and{" "}
        <strong>rigging fit notes</strong> accumulated from everyone who has
        been on it. Riders already trade this verbally. A shared database of how
        the rigging sets on a given horse is a feature only this app can have.
      </p>

      <h3>3. Your body</h3>

      <p>
        Injury records by region, conditioning by block, workload across a
        season. Private by default and never shown to a producer, a contractor,
        or anyone else.
      </p>

      <p>
        In this event that is not a wellness tab bolted on the side. It is the
        difference between a five-year career and a fifteen-year one, and it is
        the least-supported thing in the sport.
      </p>

      <h2>It is not saddle bronc with the saddle taken off</h2>

      <p>
        The two events share a scoring engine and almost nothing else. No
        stirrups, no rein, one hand on a rigging, and a completely different
        spurring stroke — knees up, spurs rolled up the shoulders as the horse
        rises, legs straightened and spurs returned over the shoulder point for
        the next jump.
      </p>

      <p>
        The equipment rules are different, the analysis targets are different,
        and the health module is different. Software that treats them as one
        event gets the parts that matter wrong.
      </p>

      <h2>And it is the whole community</h2>

      <p>
        The feed, the groups, the DMs, the people. Entries and draws. Scores
        broken into their four parts. Rerides. Schools and clinics. The
        marketplace. Youth and college standings.
      </p>

      <p>
        If you ride bareback bronc, you should not need another app. That is the bar.
      </p>

      <h2>Built for the amateur side</h2>

      <p>
        Most bareback bronc riders are at amateur rodeos, high school and college, and
        offseason jackpots. That is who the copy, the pricing and the defaults
        are written for.
      </p>

      <p>
        And it is why the rules are configuration rather than code — the
        mark-out alone is an automatic disqualification under PRCA and a scored
        element under IPRA. See the <Link href="/rules">rules reference</Link>,
        including the full rigging specification with the actual numbers.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
