import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "Bareback Events & Formats - Draws, Judging & Equipment Inspection | BarebackBronc.pro",
  description:
    "Bareback formats explained: one head, two head plus average, go-round plus short round, jackpots and match rides. Plus the producer console with seeded stock draws, independent judge entry, chute-side equipment inspection, and reride management.",
  alternates: { canonical: "https://www.barebackbronc.pro/events" },
};

const formats = [
  { name: "One head", structure: "Standard at rodeos" },
  { name: "Two head plus average", structure: "Larger rodeos and finals" },
  { name: "Go-round plus short round", structure: "Finals" },
  { name: "Bareback jackpot", structure: "Standalone" },
  { name: "Match rides", structure: "Invitational, head to head" },
];

export default function EventsPage() {
  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="flex items-center justify-between border-b border-ink-border bg-[#0d0708]/90 px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-bold text-brand transition hover:text-brand-deep"
        >
          &larr; BarebackBronc.Pro
        </Link>
        <nav className="flex gap-6 text-sm font-semibold">
          <Link href="/rules" className="text-muted transition hover:text-brand">
            Rules
          </Link>
          <Link href="/blog" className="text-muted transition hover:text-brand">
            Blog
          </Link>
        </nav>
      </header>

      <main className="arena-panel mx-auto my-8 max-w-4xl px-6 py-8">
        <article className="prose-arena">
          <h1 className="text-3xl font-extrabold text-brand">
            Events &amp; Formats
          </h1>
          <p className="mt-3 text-muted">
            Fewer formats than the timed events, but the draw carries far more
            weight — so that is where the tooling goes.
          </p>

          <h2>Formats</h2>
          <div className="overflow-x-auto">
            <table className="mt-4 w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink-border text-left">
                  <th className="py-2 pr-4 font-bold text-brand">Format</th>
                  <th className="py-2 font-bold text-brand">Structure</th>
                </tr>
              </thead>
              <tbody className="text-[#e6d3d3]">
                {formats.map((f) => (
                  <tr key={f.name} className="border-b border-ink-border/50">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">
                      {f.name}
                    </td>
                    <td className="py-2">{f.structure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            A minimum age applies in most associations, and it is surfaced on
            the entry screen rather than discovered at the office.
          </p>

          <h2>The draw is the event</h2>
          <p>
            In a judged event where half the score belongs to the animal, the
            draw is not administrative — it is competitive. Which makes{" "}
            <strong>draw integrity</strong> the single most sensitive thing in
            roughstock, and the easiest thing for a producer to be accused of
            getting wrong.
          </p>
          <p>So we make it auditable rather than asking anyone to take it on trust:</p>
          <ul>
            <li>Stock draw uses a documented random seed</li>
            <li>The seed and the timestamp are visible, not hidden</li>
            <li>The draw sheet is published and the record is locked</li>
            <li>Pen assignment comes from the contractor&apos;s herd, with rest tracking</li>
          </ul>

          <h2>Once the draw is posted</h2>
          <p>
            Your horse and chute number are pushed to your phone, and the horse
            comes with its record: every recorded trip, buck-off rate, average
            horse score, buck pattern, and video where it exists. Plus your own
            history on that horse if you have been on it before.
          </p>
          <p>
            Contractors know this information. Travel partners trade it verbally.
            It has simply never been written down anywhere a contestant can get
            at it.
          </p>

          <h2>Judging</h2>
          <p>
            Two judges enter four numbers — rider and horse, each out of 25 —
            and neither sees the other&apos;s entry before submitting. The total
            is computed from the four.
          </p>
          <p>
            Independent entry is worth building properly for two reasons. It is
            a credibility feature for producers, and it produces judge-split data
            that has real analytical value later: where two carded officials saw
            the same eight seconds differently.
          </p>

          <h2>Rerides</h2>
          <p>
            The console handles the whole flow — offer, accept or decline, and
            the reride draw. When a rider keeps an original score rather than
            taking a reride, that decision is recorded rather than lost.
          </p>

          <h2>For producers</h2>
          <ul>
            <li>Stock draw with a documented seed and a locked audit record</li>
            <li>Pen assignment from a contractor&apos;s herd, with rest tracking</li>
            <li>Independent judge score entry, two judges, four numbers</li>
            <li>Reride management including the reride draw</li>
            <li>
              Equipment inspection log at the chute — rigging spec, rowels,
              glove. This is a real chute-side workflow and no software
              currently supports it.
            </li>
            <li>Chute order and slack management</li>
            <li>
              Payout by places, with the stock contractor percentage modelled in
              the payout config
            </li>
            <li>
              Day sheet <em>with horse names</em>, which is what the announcer
              actually needs
            </li>
          </ul>

          <h2>For stock contractors</h2>
          <p>
            Contractors are a first-class user here, not an afterthought — the
            data that makes this app valuable is theirs, and they should get
            real benefit back for it.
          </p>
          <ul>
            <li>Herd management and ownership documentation in one place</li>
            <li>Trip history and buck-off statistics per horse</li>
            <li>Pen assembly and rest tracking across a season</li>
            <li>
              Marketing pages for horses being promoted for sale or
              horse-of-the-year voting
            </li>
            <li>
              A supplier directory so producers can find you by region and herd
              size
            </li>
          </ul>

          <div className="mt-10 rounded-xl border border-ink-border bg-ink-raised/70 p-5">
            <p className="text-sm text-muted">
              Producing rodeos or running a bucking string?{" "}
              <Link href="/#waitlist">Join the waitlist</Link> and say which —
              producers and contractors are being onboarded first.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
