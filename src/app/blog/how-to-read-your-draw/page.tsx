import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Read Your Draw",
  description:
    "You drew a horse two days out. Here is what is actually worth knowing about it — buck pattern, buck-off rate, average mark, how it leaves the chute — and how to plan a ride around it.",
  alternates: {
    canonical: "https://www.barebackbronc.pro/blog/how-to-read-your-draw",
  },
};

export default function Post() {
  return (
    <article className="prose-arena">
      <p className="text-xs tracking-wider text-muted-dim uppercase">
        2026-08-03
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-brand">
        How to Read Your Draw
      </h1>

      <p>
        The draw comes out and you have a horse&apos;s name. For most riders
        that is where the information ends — you ask around, somebody knows
        somebody who got on it in Cheyenne, and you piece together a rumour.
      </p>

      <p>Here is what you would actually want to know, in order of usefulness.</p>

      <h2>1. Does it buck?</h2>

      <p>
        The <strong>average horse mark</strong> is the single most important
        number. It tells you the ceiling on your score before you get on.
      </p>

      <p>
        A horse averaging 22 gives you a shot at a winning ride. A horse
        averaging 17 does not, however well you ride — you would need a 90-level
        rider mark just to reach the low 80s, and nobody rides that well
        consistently.
      </p>

      <p>
        This is not defeatism, it is planning. On a horse that will not mark
        well, the goal is a clean qualified ride and points on the season, not a
        win.
      </p>

      <h2>2. How often does it get people off?</h2>

      <p>
        <strong>Buck-off rate</strong> is the risk number. High-marking horses
        are often high buck-off horses, and that trade-off is a real decision at
        a rodeo where you need a qualified ride more than you need a big one.
      </p>

      <p>
        The useful version is not just the raw rate but{" "}
        <em>at what point</em> people come off. A horse that unloads riders in
        the first two jumps is a different problem from one that wears people
        down at six seconds.
      </p>

      <h2>3. Which way does it go?</h2>

      <p>
        The <strong>buck pattern</strong>. Left, right, straight, or changes —
        and how consistently.
      </p>

      <p>
        This is what you can genuinely prepare for. A horse that turns back left
        every trip lets you set up for it. A horse that changes direction is
        harder and marks better, which is why it marks better.
      </p>

      <p>
        Worth knowing alongside it: <strong>kick height</strong>,{" "}
        <strong>drop</strong>, and whether the trip is{" "}
        <strong>honest or erratic</strong>. Honest horses buck the same way every
        time; erratic ones are a lottery in both directions.
      </p>

      <h2>4. How does it leave the chute?</h2>

      <p>
        Fast, slow, stalls, or rears. This is the mark-out information, and it
        is the difference between being ready and being behind before the front
        feet land.
      </p>

      <p>
        A horse that stalls in the chute and then leaves hard is where mark-outs
        get missed — you have relaxed, and then you are a half-second late.
        Knowing that in advance is worth more than any other single fact about
        the horse.
      </p>

      <h2>5. How does the rigging set on it?</h2>

      <p>
        This one is bareback bronc&apos;s alone, and it is the reason a shared
        database is worth more here than anywhere else.
      </p>

      <p>
        A horse has a <strong>wither profile</strong> — high, flat, or wide —
        and it changes where the rigging sits, how much pad you want under it,
        and how tight you can pull it without it rolling. A rigging set for a
        high-withered horse on a flat-backed one is a bad eight seconds.
      </p>

      <p>
        Riders already trade this. Somebody who has been on the horse tells you
        &ldquo;go a pad thinner and set it back,&rdquo; and you take their word
        for it in the ten minutes before you get on.
      </p>

      <p>
        Written down and accumulating across everyone who has been on that
        horse, it stops being folklore. And your own per-horse setup notes — pad
        stack, position, tape wraps, what actually worked — mean you are not
        rebuilding it from memory two seasons later.
      </p>

      <h2>6. Have you been on it?</h2>

      <p>
        Your own history on that horse, if any. What you marked, whether you
        covered it, and what happened.
      </p>

      <p>
        Memory is unreliable about this, particularly two seasons later and
        particularly if it went badly.
      </p>

      <h2>7. Who else has been on it, and how did that go?</h2>

      <p>
        Every recorded trip: rider, score, covered or not. Video where it
        exists.
      </p>

      <p>
        Watching two trips on a horse tells you more in four minutes than any
        amount of asking around, because you can see the pattern instead of
        hearing somebody&apos;s recollection of it.
      </p>

      <h2>The one nobody has had before: style fit</h2>

      <p>
        Everything above is about the horse. The more interesting question is
        about the <em>match</em>.
      </p>

      <p>
        If you consistently mark well on horses that turn back left and
        consistently struggle on straight buckers, that is in your own data —
        you have simply never been able to see it, because nobody has ever
        recorded what kind of horse each of your rides was on.
      </p>

      <p>
        Once both sides are recorded, the pattern falls out. And it changes what
        &ldquo;a good draw&rdquo; means: not the highest-marking horse in the
        pen, but the highest-marking horse{" "}
        <em>that you specifically ride well</em>.
      </p>

      <h2>Then go ride it</h2>

      <p>
        None of this rides the horse for you, and a bucking horse is an animal
        rather than a machine — the honest ones are honest until the day they
        are not.
      </p>

      <p>
        But walking into a rodeo knowing which way your horse goes, how it
        leaves, and what it has marked for the last twenty riders is a
        completely different position from knowing its name.
      </p>

      <p>
        <Link href="/#waitlist">Join the waitlist &rarr;</Link>
      </p>
    </article>
  );
}
