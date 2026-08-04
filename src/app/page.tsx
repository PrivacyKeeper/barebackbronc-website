"use client";

import { useState } from "react";
import CrossQuote from "./components/CrossQuote";
import Footer from "./components/Footer";
import Link from "next/link";

/**
 * Feature groups mirror the screens in the build map's route tree.
 *
 * The map names three pillars for this app and warns explicitly against
 * forking the saddle bronc codebase and renaming it: stock intelligence,
 * rigging management (which has no analog in any other event), and physical
 * preparation, injury and longevity. Social leads because this is an
 * everything-app; rigging is second because it is the genuinely unique one.
 *
 * Audience is amateur, youth and college riders, not PRCA professionals.
 */
const features = [
  {
    id: "social",
    icon: "👥",
    title: "Social & Community",
    desc: "The Whole Bareback World, In One Feed",
    detail: [
      "A real feed — post video of your trips, not just scores",
      "Stories that disappear in 24 hours",
      "Like, comment, bookmark, repost, and share anywhere",
      "Follow the riders you look up to and build your own following",
      "Group chats for your travel rig, your school team, or your practice group",
      "Direct messaging with read receipts",
      "Find riders near you or entered at the same rodeo",
      "Regional groups — your local rodeo scene, organized",
      "Celebrate first qualified rides, first checks, and first buckles",
      "Badges for milestones, streaks, and consistency",
      "Block, report, and mute on every account from day one",
    ],
  },
  {
    id: "rigging",
    icon: "🔧",
    title: "Rigging Management",
    desc: "Nothing Else In Rodeo Has This Problem",
    detail: [
      "Spec checker: enter the measurements once, get a pass or fail",
      "Checked against the association specification, with a stored photo",
      "Handhold length, handhold and D-ring width, suede cover, cinch material",
      "Per-horse setup notes — how you set it on a big-withered horse versus a flat one",
      "Pad stack, position, cinch tightness, and handhold tape wraps, saved",
      "Wear tracking: rides on a handhold, suede condition, cinch condition",
      "Because a rigging failure mid-ride is an injury event, not an inconvenience",
      "Glove and tape log, paired to the rigging it was built around",
      "Setup outcome correlation — which settings produced which scores",
      "Inspection log with photos, ready if a chute judge questions anything",
    ],
  },
  {
    id: "stock",
    icon: "🐎",
    title: "Draw Analysis & Stock Data",
    desc: "Know The Horse Before You Nod",
    detail: [
      "Every recorded trip on the horse you drew — score, rider, covered or not",
      "Buck-off rate and average horse score across the season",
      "Out of the chute: fast, slow, stalls, or rears",
      "Kick height, drop, direction changes, and jump frequency",
      "Whether the trip is honest or erratic",
      "Wither profile — high, flat, or wide — and how the rigging sets on it",
      "Rigging fit notes accumulated from every rider who has been on it",
      "Video of previous trips where available",
      "Your own history on that horse, if you have been on it",
      "Riders trade this verbally. Nobody has ever written it down.",
    ],
  },
  {
    id: "longevity",
    icon: "🩹",
    title: "Injury & Longevity",
    desc: "The Difference Between Five Years And Fifteen",
    detail: [
      "Injury records by body region — elbow, shoulder, neck, back, hand, wrist",
      "Severity, treatment, provider, and the date you were actually cleared",
      "Private by default, never shown to producers, contractors, or anyone else",
      "Conditioning log by block: strength, mobility, conditioning, grip, neck, recovery",
      "Rate of perceived exertion tracked alongside, so a week reads honestly",
      "Workload across a season, so you can see when you are cooked",
      "Sports medicine and chiropractic directory",
      "Return-to-competition tracking after an injury",
      "This event has the shortest career in rodeo. That is the design brief.",
    ],
  },
  {
    id: "scores",
    icon: "⚖️",
    title: "Scores & Judging",
    desc: "Two Judges. Four Numbers. One Hundred Points.",
    detail: [
      "Your score broken into its four parts, not just the total",
      "Rider marks and horse marks tracked separately over a season",
      "See how much of your average total is coming from the stock you draw",
      "Judge split data — where two judges saw the ride differently",
      "Mark-out outcome recorded per association, because it is not the same everywhere",
      "Reride offered, taken or declined, with the decision kept on the record",
      "Disqualification reasons recorded properly rather than as a blank",
      "Every score cites the rule set and edition it was scored under",
    ],
  },
  {
    id: "competition",
    icon: "🏆",
    title: "Competition & Events",
    desc: "Every Rodeo Within Driving Distance",
    detail: [
      "Browse and enter by association, date, and distance",
      "One head, two head plus average, go-round plus short round",
      "Bareback jackpots and match rides",
      "Draw posted with a documented random seed and a visible timestamp",
      "Your horse and chute number pushed to your phone",
      "Live scores as judges submit",
      "Averages, short-round standings, and payouts",
      "Season standings by association",
      "Minimum age requirements surfaced before you enter",
    ],
  },
  {
    id: "rules",
    icon: "📖",
    title: "Rules & Officiating",
    desc: "Know The Call Before It Gets Made",
    detail: [
      "The eight seconds, and exactly when they start",
      "The mark-out rule — a disqualification under PRCA, a scored element under IPRA",
      "The free arm rule, including touching your own body",
      "The full rigging specification in plain language, with the numbers",
      "Spur rowel requirements and what a chute judge is looking at",
      "Reride grounds and how the decision works",
      "Rules versioned by date — a 2026 ride is scored under 2026 rules",
      "Producer ground rules stated up front, before you enter",
    ],
  },
  {
    id: "training",
    icon: "🎯",
    title: "Training & Video",
    desc: "Coaching For People Who Cannot Afford A Coach (Premium)",
    detail: [
      "Film a trip on your phone and get it broken down — no special equipment",
      "Mark-out position at the moment the front feet land",
      "The lick: spur stroke completeness, timing, and where it shortens",
      "Knee lift and how far the spurs roll up the shoulders",
      "Toe turnout held through the eight seconds",
      "Where in the ride your form breaks down, second by second",
      "Side by side against your own best trip",
      "Progress measured against your own baseline, not a professional's",
      "Drill library: spur board, drop barrel, grip and neck work",
      "Book schools and clinics in the app",
    ],
  },
  {
    id: "contractors",
    icon: "📦",
    title: "For Stock Contractors",
    desc: "Your Horses, Your Data, Your Marketing",
    detail: [
      "Herd management with ownership records kept in one place",
      "Trip history and buck-off statistics per horse",
      "Wither profile and rigging fit notes accumulating across riders",
      "Pen assembly — which horses go to which rodeo",
      "Rest and workload tracking across a season",
      "Marketing pages for horses being promoted for sale or horse-of-the-year",
      "Award history and horse-of-the-year campaigns",
      "Supplier directory so producers can find you by region and herd size",
      "Health and vaccination records for a bucking string",
    ],
  },
  {
    id: "marketplace",
    icon: "🛒",
    title: "Marketplace",
    desc: "Buy & Sell With Confidence",
    detail: [
      "Riggings by maker, handhold size, and spec",
      "Gloves by hand and size, tape, and rosin",
      "Spurs, spur straps, and rowels",
      "Chaps, boots, hats, protective vests, and mouthguards",
      "Spur boards, drop barrels, and bucking machines",
      "Bucking horse prospects, broodmares, stock, semen and breedings",
      "Trailers, rigs, and living quarters",
      "Contractor supply: flank straps, chute equipment, panels, arena equipment",
      "Schools, clinics, hauling, sports medicine, and training",
      "Seller ratings, saved listings, and direct messaging",
    ],
  },
  {
    id: "travel",
    icon: "🚗",
    title: "Travel & Safety",
    desc: "Travel Safe, Arrive Ready",
    detail: [
      "Route planner built around the rodeos you actually entered",
      "Split the drive and the fuel with whoever is in the rig",
      "Real-time weather and severe weather alerts",
      "Emergency alert system with one-tap contacts",
      "Arena finder with reviews from other riders",
      "Entry deadlines and draw times surfaced before you miss them",
      "Gas, food, and rest stop finder",
    ],
  },
  {
    id: "youth",
    icon: "🎓",
    title: "Youth, School & College",
    desc: "Junior Rodeo Through The CNFR",
    detail: [
      "NHSRA and NIRA bareback standings and qualification tracking",
      "Junior and youth divisions, including steer riding progressions",
      "Minimum age requirements enforced at entry",
      "Coach dashboards with roster, entries, travel, and eligibility",
      "School event calendars and region standings",
      "Scholarship board with deadlines and requirements",
      "Recruiting profile with highlight reel, coaches-only by default for minors",
      "Progression pathway: first qualified ride, first 70, first check, first buckle",
      "A minor's recruiting profile never goes public automatically at 18",
    ],
  },
  {
    id: "producers",
    icon: "💼",
    title: "Producers & Judges",
    desc: "Chute-Side Equipment Inspection, Built In (Premium)",
    detail: [
      "Stock draw with a documented random seed and a locked audit record",
      "Pen assignment from a contractor's herd, with rest tracking",
      "Independent judge entry: two judges, four numbers, neither seeing the other",
      "Equipment inspection log at the chute: rigging spec, rowels, glove",
      "A real chute-side workflow that no software currently supports",
      "Reride offer and acceptance flow",
      "Chute order and slack management",
      "Payout by places, with contractor payout percentage modelled",
      "Day sheet with horse names, which is what the announcer actually needs",
    ],
  },
];

const riggingSpec = [
  { label: "Handhold length", value: "max 8 in" },
  { label: "Suede cover on handhold", value: "min 3 in" },
  { label: "Width at handhold", value: "max 10 in" },
  { label: "Width at D-ring", value: "max 6 in" },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    perks: [
      "Rider profile and community feed",
      "Event discovery and entries",
      "Rigging spec checker and inspection log",
      "Per-horse setup notes",
      "Score history and rider/horse split",
      "Injury and conditioning logs",
      "Marketplace access",
      "Rules reference",
    ],
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mo",
    featured: true,
    perks: [
      "Everything in Free",
      "Full draw analysis with patterns and buck-off rates",
      "Wither profiles and shared rigging fit notes",
      "Trip video on drawn horses where available",
      "AI ride breakdown: mark-out, spur stroke, toe turnout",
      "Setup outcome correlation across a season",
      "Side-by-side video comparison",
      "Priority support",
    ],
  },
  {
    name: "Annual",
    price: "$49.99",
    period: "/yr",
    best: true,
    perks: [
      "Everything in Premium",
      "Save $10 versus monthly",
      "Early access to new features",
      "Exclusive community badge",
    ],
  },
];

export default function Home() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="arena-page arena-bg-1 min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-ink-border bg-[#0d0708]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="BarebackBronc.pro"
              className="h-14 w-auto"
            />
            <span className="hidden text-lg font-bold tracking-wide text-brand sm:block">
              BAREBACKBRONC<span className="text-brand-2">.PRO</span>
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-semibold tracking-wider text-muted uppercase md:flex">
            <a href="#features" className="transition hover:text-brand">
              Features
            </a>
            <Link href="/rules" className="transition hover:text-brand">
              Rules
            </Link>
            <a href="#pricing" className="transition hover:text-brand">
              Pricing
            </a>
            <Link href="/blog" className="transition hover:text-brand">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.png"
          alt="BarebackBronc.pro crest"
          className="w-[300px] drop-shadow-2xl md:w-[400px]"
        />
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-cream md:text-5xl">
          Everything Bareback.{" "}
          <span className="text-brand-2">One App.</span>
        </h1>
        <p className="mt-4 text-xl font-bold tracking-wide text-brand italic md:text-2xl">
          &ldquo;Shortest career in rodeo. Make it longer.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
          Bareback riders take more physical punishment than anyone else in
          rodeo. Elbow, shoulder, neck, back, hand — it accumulates, and it does
          not resolve between rodeos. That is not commentary. It is the reason
          this app exists in the shape it does.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          Three things nobody has built: a rigging you can check against the
          spec before a chute judge does, a database of what the horse you drew
          actually does, and an honest record of what your body is carrying.{" "}
          <span className="text-cream">
            Plus the whole community, in one place.
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 384 512" className="h-8 w-8 fill-cream">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Download on the
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  App Store
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <div className="flex cursor-default items-center gap-3 rounded-xl border border-ink-border bg-ink-raised px-6 py-3 opacity-70">
              <svg viewBox="0 0 512 512" className="h-8 w-8 fill-cream">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight text-muted uppercase">
                  Get it on
                </p>
                <p className="text-lg leading-tight font-semibold text-cream">
                  Google Play
                </p>
              </div>
            </div>
            <span className="absolute -top-3 -right-3 rounded-full bg-brand-deep px-2 py-1 text-[10px] font-bold text-white uppercase shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        <a
          href="#waitlist"
          className="mt-8 rounded-lg bg-brand px-8 py-4 text-lg font-bold tracking-wider text-[#0d0708] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep"
        >
          Join the Waitlist
        </a>
      </section>

      {/* Rigging spec strip */}
      <section className="mx-auto max-w-3xl px-6 pb-10">
        <div className="rounded-xl border border-ink-border bg-ink-raised/70 p-6">
          <p className="mb-3 text-center text-sm font-bold tracking-wider text-brand uppercase">
            The spec a chute judge measures against
          </p>
          {riggingSpec.map((s) => (
            <div key={s.label} className="spec-row">
              <span className="text-sm text-muted">{s.label}</span>
              <span className="spec-value text-sm">{s.value}</span>
            </div>
          ))}
          <p className="mt-4 text-center text-xs text-muted">
            Plus: no fibreglass or metal in the handhold, non-metallic mohair or
            hemp cinch, D-rings only.{" "}
            <Link href="/rules" className="text-brand-2 hover:underline">
              Full specification &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Riders", note: "Amateur, youth, college" },
            { label: "Contractors", note: "Your horses, your data" },
            { label: "Producers", note: "Draws, judges, inspections" },
            { label: "Families", note: "Parents, guardians, fans" },
          ].map((who) => (
            <div
              key={who.label}
              className="rounded-xl border border-ink-border bg-ink-raised/70 p-4 text-center"
            >
              <p className="text-sm font-bold tracking-wider text-brand uppercase">
                {who.label}
              </p>
              <p className="mt-1 text-xs text-muted">{who.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold tracking-wider text-brand uppercase">
          What&apos;s Inside
        </h2>
        <p className="mx-auto mt-4 mb-14 max-w-2xl text-center text-muted">
          Thirteen feature groups — the social side, the competing side, and the
          side that decides how long you last. Built for weekend and college
          riders, not just the ones on TV. Tap any card for the full list.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setOpenModal(i)}
              className="group rounded-xl border border-ink-border bg-ink-raised p-6 text-left transition-all hover:border-brand hover:shadow-lg hover:shadow-brand/10"
            >
              <div className="mb-4 text-4xl">{f.icon}</div>
              <h3 className="text-xl font-semibold text-brand group-hover:underline">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
              <p className="mt-3 text-xs font-semibold text-brand-2">
                See all {f.detail.length} features &rarr;
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Feature modal */}
      {openModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setOpenModal(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ink-border bg-ink-panel p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 text-5xl">{features[openModal].icon}</div>
            <h3 className="text-2xl font-bold text-brand">
              {features[openModal].title}
            </h3>
            <p className="mt-1 text-sm text-muted">{features[openModal].desc}</p>
            <ul className="mt-4 space-y-2">
              {features[openModal].detail.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-[#e6d3d3]">
                  <span className="mt-0.5 text-brand-2">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenModal(null)}
              className="mt-6 rounded-lg bg-brand px-6 py-2 font-semibold text-[#0d0708] transition hover:bg-brand-deep"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Why it is different */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Why Bareback Needed Its Own App
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              t: "The rigging is a whole problem by itself",
              d: "A piece of personal equipment with a legal specification, a per-horse fit problem, a wear life, and a set of disqualification risks. No other event has this, and nobody tracks any of it.",
            },
            {
              t: "Career length is the real metric",
              d: "The highest cumulative damage in rodeo, concentrated in one arm. Conditioning, injury records and recovery are not a wellness tab bolted on the side — they are half the point of the product.",
            },
            {
              t: "It is not saddle bronc with the saddle removed",
              d: "No stirrups, no rein, a completely different spurring stroke, and different equipment rules. Software that treats the two as one event gets the parts that matter wrong.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-ink-border bg-ink-raised p-6"
            >
              <h3 className="text-lg font-semibold text-brand-2">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-wider text-brand uppercase">
          Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 ${
                plan.featured
                  ? "border-brand bg-ink-panel shadow-lg shadow-brand/15"
                  : "border-ink-border bg-ink-raised"
              }`}
            >
              {plan.featured && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand-2 uppercase">
                  Most Popular
                </p>
              )}
              {plan.best && (
                <p className="mb-2 text-xs font-bold tracking-wider text-brand uppercase">
                  Best Value
                </p>
              )}
              <h3 className="text-xl font-bold text-brand">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-cream">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-[#e6d3d3]"
                  >
                    <span className="mt-0.5 text-brand-2">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-brand uppercase">
          Get Early Access
        </h2>
        <p className="mb-8 text-muted">
          Drop your email and be the first to know when BarebackBronc.pro
          launches.
        </p>
        {status === "success" ? (
          <p className="text-lg font-semibold text-brand">
            &#127881; You&apos;re on the list! Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleWaitlist}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-ink-border bg-ink-raised px-4 py-3 text-cream placeholder-muted-dim focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-brand px-6 py-3 font-bold tracking-wider text-[#0d0708] uppercase shadow-lg shadow-brand/20 transition hover:bg-brand-deep disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Notify Me"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-400">
            Something went wrong. Try again.
          </p>
        )}
      </section>

      <Footer />
      <CrossQuote />
    </div>
  );
}
