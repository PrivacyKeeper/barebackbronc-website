# BarebackBronc.pro — Website

Marketing site for the BarebackBronc.pro mobile app. Built to the same pattern as
the other Rodeo Apps sites (BullRider.pro, BreakawayRoping.pro, TeamRope.pro,
TieDown.pro): Next.js App Router, Tailwind v4, Resend for the waitlist, no
database and no auth.

## Commands

- `npm run dev` — development server (http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npx eslint .` — lint

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4,
Resend. Path alias `@/*` maps to `./src/*`.

## Required assets

`public/logo.png` is referenced by the header, the hero, and the OG/Twitter
card, and is **not** in the repo yet. Drop the BarebackBronc crest in before
deploying or those three places render a broken image.

`public/cross.jpg` and `public/backgrounds/arena-1.jpg` / `arena-2.jpg` are
already here, carried over from the other Rodeo Apps sites.

## Environment

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Waitlist confirmation + team notification email |

Without it, `POST /api/waitlist` returns 503 and the form shows an error. The
build and every other page work fine without it.

## Structure

```
src/app/
  page.tsx                  Landing — 13 feature groups, score grid, pricing
  rules/                    Full bareback bronc rules reference (SEO + authority)
  events/                   Formats, draw integrity, judging, contractor tools
  blog/                     8 SEO posts; index reads from blog/posts.ts
  support/                  Support topics
  terms/ privacy/ refund/   Legal
  api/waitlist/route.ts     Resend handler
  robots.ts  sitemap.ts     SEO
  components/
    SchemaMarkup.tsx        JSON-LD: SoftwareApplication, WebSite, FAQPage
    CrossQuote.tsx          Rotating verse, matches the other sites
    Footer.tsx
  data/quotes.json
```

## Brand

Per the build map: **crimson on near black**. Defined in
`src/app/globals.css` — `--brand` `#cc2936`, `--cream` `#f2e9e7`, on `--ink`
`#0d0708`. The secondary `--brand-2` is a bone white-grey `#c9bcbc` — the
colour of athletic tape, which is the right register for this event.

Token names (`--brand`, `--brand-deep`, `--brand-2`, `--ink*`) are identical
across all six Rodeo Apps sites — only the values differ. That is deliberate:
the sites should diff cleanly against each other.

## Positioning

Two decisions drive the copy, and they apply across the portfolio:

**Everything-app.** This is the social platform for the bronc riding community
first. Social & Community leads the feature list because it is what people open
daily. The landing page states the bar outright: if you ride broncs, you should
not need another app.

**Amateur audience.** Users are amateur, youth and college riders, not PRCA
professionals. Copy, pricing and defaults follow that, and AI ride analysis is
framed as coaching for people who cannot afford a coach.

## What makes this site different from saddlebronc.pro

The build map is explicit: *"Shares the roughstock scoring engine with
saddlebronc.pro but the equipment rules, the analysis targets, and the health
module are materially different. Do not fork the saddle bronc codebase and
rename it."* The same applies to this site.

Three pillars, in the order the landing page presents them after the social
group:

1. **Rigging management** — has no analog in any other event. A piece of
   personal equipment with a legal specification, a per-horse fit problem, a
   wear life, and DQ risk. The landing page carries a `.spec-row` strip with
   the actual measurements, and `/rules` gives the full specification.
2. **Stock intelligence** — as saddlebronc, plus two bareback bronc-only fields on
   the pattern record: `wither_profile` and `rigging_fit_notes`.
3. **Injury and longevity** — shortest career and highest cumulative damage in
   rodeo. Injury records are private by default and never shown to producers,
   contractors or anyone else; the privacy policy says so explicitly.

There is no `.score-grid` here — the scoring structure is the same as
saddlebronc and is covered in `/rules` and a blog post rather than repeated as
a landing-page device.

## Rules content, and what is tagged

Two things carry `.assoc-tag` pills on `/rules`:

- **The mark-out rule** — an automatic disqualification under PRCA rules and,
  since 2024, a scored element folded into the judges' 25 points under IPRA
  rules. Same physical event, two outcomes.
- **Equipment inspection consequences** — a disqualification everywhere, but
  some associations add a fine and an ineligibility period.

`/rules` tags that with the `.assoc-tag` pill rather than asserting a single
answer. Keep that convention when editing — it is the single most likely thing
on this site to be got wrong.

## Adding a blog post

1. Create `src/app/blog/<slug>/page.tsx` with a `metadata` export and an
   `<article className="prose-arena">` body.
2. Add the entry to `src/app/blog/posts.ts` (drives the index).
3. Add the slug to `blogSlugs` in `src/app/sitemap.ts`.
