# Noah Barlow — Brand & Design System

A portable reference for **noahbarlow.work**. Paste this (or the raw URL at the bottom) into any chat where you need on-brand help — copy, design, slides, packaging mocks, decks, etc.

> **Live site:** https://noahbarlow.work
> **Stack:** Astro 4 static site → GitHub Pages → custom domain via Cloudflare DNS
> **Repo:** https://github.com/noahbarlow/noahbarlow.github.io

---

## At a glance

- **Positioning:** Senior brand, packaging, and growth operator for founder-led challenger brands (CPG, beverage, RTD, cannabis, food, wellness). Not an agency; not a fractional CMO platform. A partner-level operator who works in the seam between strategy and execution.
- **Voice:** Editorial, direct, opinionated, lived-in. Think a NYTimes magazine column or a sharp Substack essay — not a TED talk, not a McKinsey deck, not a LinkedIn post.
- **Palette:** Cream paper, near-black ink, electric lime accent. That's it.
- **Typography (locked):** Instrument Serif (display, italic carries the highlighter) + Instrument Sans (body). Both free, OFL, on Google Fonts. Italic always gets +12 letter-spacing. **No substitutions** on any artifact — web, deck, proposal, or print.
- **Format:** Magazine-style sections. Generous whitespace. Large display type. Eyebrows + numbered runheads. No carousels, no gradients, no decorative motion.
- **Signature move:** A lime "highlighter" stripe behind every italicized phrase.

---

## Voice & copy

### Tone

A senior brand operator with strong opinions, talking to founders directly. Confident without performing toughness. Lived-in, not LinkedIn. The writing sounds like someone who has been in the room and made the bet, not someone who has read about being in the room.

### Words and shapes to use

- **Contractions** — "isn't," "won't," "you're," "I'll," "we'd"
- **First person** — "I've watched founders…" / "the failure modes I've seen…"
- **Specific consequences** — "lose at shelf," "amplify confusion," "every dollar will fight the pack," "trial that won't repeat"
- **Proper nouns** — Miller Lite Canada, Kit Kat Chocolatory, Yorkdale, Pilsner Urquell, SABMiller, Smaller Agency
- **Concrete numbers** — "$9 chocolate," "three-second test," "18 months," "30+ brands launched"
- **Direct verbs** — Stop, Cut, Defend, Skip, Survive, Land, Earn
- **Short closers** — "In that order." / "These are the things I'll defend in a room." / "Decisions get made."

### AI tells to avoid (pruned during the copy sweep)

If a draft has more than one or two of these, it isn't shippable yet.

1. **Triadic parallel structure** — three sentences in identical shape, e.g. "X without Y will not earn Z" three times. Real writing breaks the pattern.
2. **Anaphora as a crutch** — same verb or opener repeated across sentences without earning it ("almost always X, almost always Y, almost always Z").
3. **Empty opening assertions** — "The order is not decorative." / "This matters." / "There is no shortcut." (Tells you something is important without giving a reason.)
4. **Awkward inversions to fit rhythm** — "Neither without demand will earn a P&L." (Phrasings no human says out loud.)
5. **No contractions** — reads as a TED-talk transcript.
6. **Abstract throughout** — paragraph after paragraph with no founders, no brands, no consequences, no real-world stakes.
7. **Em-dash overuse** — em-dashes everywhere instead of periods or "but."
8. **Fortune-cookie closings** — paragraphs ending on a wise-sounding maxim that doesn't actually conclude anything ("The connecting tissue is the work.").
9. **Hedge words** — "simply," "merely," "fundamentally," "often," "typically" sprinkled where a specific would land harder.
10. **Listy abstract-noun stacks** — "Positioning, point of view, and the strategic narrative" (three abstract nouns where one specific would do).
11. **Decorative business jargon** — "P&L," "ROI," "leverage" used to *sound* business-y, not to do semantic work.

### Headline pattern

Most H1s and H2s on the site follow the same shape: **a flat declarative + an italicized payoff.** The italic gets the lime highlighter automatically.

Live examples:

- `Score your brand. *Get a real read.*`
- `Brand → Package → *Demand.*`
- `Quick. Useful. *No newsletter trap.*`
- `Bring the brief. *I'll bring the framing.*`
- `Twenty years of *building demand.*`
- `Operator. Strategist. *Brand builder.*`

When generating new headlines, ask: *what's the noun the reader should remember?* That goes in the italic.

### Body copy examples (live, on-brand)

> *The order isn't decorative. Spend on packaging to fix a brand problem and you'll just amplify confusion. Spend on demand to fix a packaging problem and every dollar will lose at shelf. Brand sets the bet. Package carries it. Demand pulls it through. In that order.*

> *Most founder-led companies don't fail at execution — they fail between functions. The brand team writes one thing, packaging interprets another, retail sells whatever's left. I work end to end so the original argument survives the trip from deck to shelf.*

> *Five operating beliefs I keep coming back to after twenty years of running brands. They're not novel. They're the ones that have held up across every category I've worked in.*

---

## Color palette

### Light / primary (default pages)

| Token | Hex | Use |
|------|-----|-----|
| `--ink`           | `#0a0a0a` | Body text, primary marks, dark CTAs |
| `--ink-2`         | `#1a1a1a` | Slightly softened body for long-form |
| `--paper`         | `#f5f1e8` | Site background — cream |
| `--paper-2`       | `#ede8dc` | Callout backgrounds, alternate section variants |
| `--rule`          | `#d8d2c2` | 1px rules, dividers |
| `--mute`          | `#6a665d` | Muted text, captions, legal copy |
| `--mute-2`        | `#8a857a` | Quieter still |
| `--accent`        | `#d4ff1a` | Lime — the only color that fights ink and paper |
| `--accent-shadow` | `#aacf00` | Darker lime for subtle depth |

### Dark / diagnostic pages

The interactive diagnostics (`/scorecard`, `/packaging-audit`, `/modern-brand-os`) invert the palette for focus.

| Token | Hex | Use |
|------|-----|-----|
| `--dx-bg`     | `#000000`                  | Page background |
| `--dx-ink`    | `#ffffff`                  | Body text |
| `--dx-mute`   | `rgba(255,255,255,0.55)`   | Muted text on dark |
| `--dx-rule`   | `rgba(255,255,255,0.18)`   | Rules on dark |
| `--dx-accent` | `#e1e326`                  | Slightly desaturated lime — better contrast on black |

**No other colors are sanctioned.** If a draft needs a chart or visual that adds a third hue, use a tint of `--ink` or `--paper-2` first. Add color only as a last resort.

---

## Typography (locked)

This typography is the **official brand standard**. It applies to every artifact that carries the Noah Barlow name:

- The website (noahbarlow.work)
- Proposals, engagement letters, scopes of work
- Pitch decks, capability decks, working-session decks
- Brand readouts, audits, written diagnostics
- One-pagers, case studies, leave-behinds
- Email signatures and templates
- Slides for talks, panels, and guest appearances
- Social posts, story templates, profile graphics

**No substitutions.** If a tool doesn't have the fonts, install them or don't make the artifact in that tool.

### The fonts

| Role | Family | Source |
|------|--------|--------|
| Display (all headlines, big quotes, slide titles) | **Instrument Serif** | https://fonts.google.com/specimen/Instrument+Serif |
| Body (paragraphs, bullets, captions, slide body copy) | **Instrument Sans** | https://fonts.google.com/specimen/Instrument+Sans |
| Diagnostic alt display (the dark interactive pages only) | Young Serif | https://fonts.google.com/specimen/Young+Serif |

Both Instrument fonts are free, **OFL-licensed**, no commercial restriction. Designed by Instrument studio as a system — pair behavior is intentional.

### The rules (apply everywhere, web and off-web)

1. **Display = Instrument Serif.** Headlines, big quotes, callouts, hero copy, slide titles, deck section dividers, masthead.
2. **Body = Instrument Sans.** Paragraphs, bullets, captions, legal, slide body copy.
3. **Italics always get +12 tracking** (`letter-spacing: 0.012em` in CSS, +12 in Figma/Adobe). Instrument Serif's italic is tight by default; this is non-negotiable for legibility.
4. **The lime highlighter is the italic's only valid decoration.** No underline, no color swap, no boldface. Just the lime stripe behind the italic word.
5. **Light text on lime = banned.** When an italic appears on a dark background, the text becomes ink (`#0a0a0a`) so it reads *on* the lime stripe instead of fighting it. Light-on-lime is unreadable.
6. **Use italics for the word you most want read.** The lime is doing emphasis work — don't burn it on filler. One italicized phrase per paragraph, max.
7. **Sentence case for everything except eyebrows.** No Title Case headlines. Eyebrows use `letter-spacing: 0.14em; text-transform: uppercase` and live above headlines.

### Install once, use everywhere

**Mac (the master install — gives you the fonts in every app):**
1. Go to https://fonts.google.com/specimen/Instrument+Serif → **Get font → Download all**
2. Go to https://fonts.google.com/specimen/Instrument+Sans → **Get font → Download all**
3. Unzip both. Open each `.ttf` in **Font Book**, click **Install Font**.
4. Restart any open apps.

**Figma:**
- Desktop app reads system-installed fonts automatically (do the Mac install above)
- For Figma web: install the [Figma Font Helper](https://www.figma.com/downloads/) agent
- In the layer's text properties, set tracking to **+12** on italic text

**Google Docs / Slides:**
- In any doc, font dropdown → **More fonts** → search "Instrument Serif" → click to add → **OK**
- Same for "Instrument Sans"
- Both now show in the regular font picker

**Adobe (InDesign / Illustrator / Photoshop):**
- Not yet in Adobe Fonts. Use the Mac system install — all Adobe apps read system fonts.
- In Character panel, set **Tracking** to **+12** on any italic text

**Microsoft 365 (Word, PowerPoint, Outlook):**
- Mac install picks them up automatically
- Windows: download `.ttf` files, right-click → **Install**
- When sharing files, **embed the fonts** (File → Options → Save → "Embed fonts in the file") so recipients don't see a fallback

**Keynote / Pages / Numbers:**
- Mac install picks them up automatically
- When sharing, choose **File → Advanced → Reduce File Size**, and tick "Always include preview" so the typography is preserved in the rendered preview

**Email signatures (Gmail / Outlook / Apple Mail):**
- Most email clients ignore custom fonts unless rendered as an image
- Best approach: keep signature in **Instrument Sans** with a system fallback: `font-family: 'Instrument Sans', Helvetica, Arial, sans-serif`
- For the wordmark / "● Noah Barlow" line, use **Instrument Serif** with the same fallback chain
- If you want the lime highlighter on italic in signatures, render that line as an image (PNG/SVG) and embed

### Web (canonical CSS)

CSS variables in `src/styles/global.css`:

```css
--font-display:       'Instrument Serif', 'Times New Roman', Georgia, serif;
--font-sans:          'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
--font-serif-display: 'Young Serif', 'Cooper Black', serif;
```

Google Fonts loader (one line, in `BaseLayout.astro`):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Young+Serif&display=swap" />
```

### Type scale (fluid clamp — web)

| Token | Range | Use |
|-------|-------|-----|
| `--t-xs`  | 0.75 → 0.85rem  | Eyebrow, legal |
| `--t-sm`  | 0.875 → 1rem    | Small body, captions |
| `--t-md`  | 1 → 1.125rem    | Default body |
| `--t-lg`  | 1.125 → 1.25rem | Lede |
| `--t-xl`  | 1.375 → 1.75rem | Subhead, H4 |
| `--t-2xl` | 1.75 → 2.5rem   | H3 |
| `--t-3xl` | 2.25 → 3.75rem  | H2 |
| `--t-4xl` | 2.75 → 5.5rem   | H1 (standard) |
| `--t-5xl` | 3.5 → 7.5rem    | H1 (hero / display) |
| `--t-6xl` | 4.5 → 10rem     | Editorial extra-display |

**Deck/proposal equivalents** (use as a starting point, scale to slide size):

| Role | Point size (slides) | Point size (proposals/docs) |
|-----|--------------------|------------------------------|
| Hero / cover headline | 56–80pt | 32–44pt |
| Section divider | 40–56pt | 28–36pt |
| Slide title / H2 | 28–36pt | 20–28pt |
| Subhead / H3 | 20–24pt | 16–20pt |
| Body | 14–18pt | 11–13pt |
| Eyebrow / caption | 10–12pt | 9–10pt |

### The italic highlighter — signature move

The most recognizable typographic mark on every artifact. A horizontal lime stripe (color `#d4ff1a`) sits behind italicized phrases at display sizes, like an actual highlighter pass.

**Web (CSS for display headlines):**

```css
h1 em, h2 em, h3 em, .hero h1 em, .display em {
  font-style: italic;
  letter-spacing: 0.012em;
  background-image: linear-gradient(
    transparent 0 56%,
    var(--accent) 56% 92%,
    transparent 92% 100%
  );
  background-repeat: no-repeat;
  background-position: 0 0.08em;
  padding: 0 0.1em 0.02em;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
```

**Off-web (Figma / Adobe / PowerPoint):**

1. Italicize the word(s) and set tracking to **+12**.
2. Behind the italic text, draw a **rectangle** filled with `#d4ff1a`.
3. Size the rectangle to cover the **lower ~36% of the cap height** (visually: the rectangle should sit from roughly the x-line down to just below the baseline).
4. The italic text stays its normal color (ink `#0a0a0a` on cream; ink `#0a0a0a` on dark backgrounds too — see Rule 5).
5. Group the text + rectangle so they move together.

**Rule again:** italicize the word you most want read. The lime is doing emphasis work — don't burn it on filler.

### What changed when we locked this

The previous standard was Fraunces + Inter. It was swapped to Instrument Serif + Instrument Sans because Fraunces + Inter had become the unmistakable AI-generated-portfolio pairing in 2025–26, undercutting the senior positioning. Instrument's italic is sharper, more bookish, and pairs with a body sans that has more humanist warmth than Inter — both push the system toward genuinely editorial rather than templated-editorial. The decision is locked unless brand direction itself changes.

---

## Layout

### Shells & rhythm

```css
--shell:        78rem;  /* default content max-width */
--shell-narrow: 44rem;  /* long-form article + contact card width */
--gutter:       clamp(1.25rem, 1rem + 1.5vw, 2.5rem);
```

`.shell` wraps every section. `.shell-narrow` is for article body copy and tight contact moments. No nested grids — sections are stacked, each one a complete spread.

### Section sequencing convention

Most pages stack `01 / 02 / 03 / 04 / 05` numbered sections via the `.runhead` pattern. Each section is its own argument. No "next section" teasers, no carousels, no parallax. Pages read like a magazine spread top to bottom.

---

## Key components

| Class | What it is |
|-------|------------|
| `.eyebrow`         | Small uppercase tracked label above a headline. Tracking `0.14em`, color `--mute`. |
| `.runhead`         | Numbered section opener — `01 + What I solve` style. |
| `.s-head`          | Two-column section head: H2 left, supporting paragraph right. |
| `.hero`            | First section on every page. H1 + eyebrow + lede + optional meta band of stats. |
| `.hero-meta`       | The horizontal stats band (e.g. `30+ brands launched` · `300+ packages shipped`). |
| `.framework`       | Three-step grid (`01 / 02 / 03`) used for process explanations. |
| `.contact-card`    | Cream callout block: eyebrow + H2 + paragraph + button row. |
| `.work-grid`       | Asymmetric image-led grid for case-study tiles. |
| `.btn`             | Default ink button. |
| `.btn.hot`         | Lime fill, ink text — the primary CTA on every page. |
| `.btn.ghost`       | Outlined, transparent — secondary CTA. |
| `.bigquote`        | Centered editorial pull-quote, narrow shell. |
| `.dx-page`         | The dark-mode wrapper for diagnostic interactives. |
| `.contact-form`    | Branded form styling (inputs, textareas, selects, checkboxes). |
| `.contact-email-callout` | Bordered "Just email me." block (paper-2 bg, lime left border). |

### The wordmark

```html
<a href="/" class="nav-mark">
  <span class="dot"></span>
  <span class="nav-mark-text">Noah Barlow</span>
</a>
```

Text wordmark, not an image. Lime dot + name on one line. Never break to two lines on mobile (uses `white-space: nowrap` + responsive font size).

### Section sequencing — example skeleton

```astro
<section class="hero">
  <div class="shell">
    <p class="eyebrow">Section label</p>
    <h1>Flat declarative. <em>Italicized payoff.</em></h1>
    <p class="hero-sub">One sentence of context.</p>
  </div>
</section>

<section>
  <div class="shell">
    <div class="runhead"><span class="n">01</span><span class="l">What I solve</span></div>
    <div class="s-head">
      <div class="left"><h2>Brands stall when strategy, package, and demand <em>drift apart.</em></h2></div>
      <div class="right"><p>One short paragraph of stakes-and-consequence body copy.</p></div>
    </div>
  </div>
</section>
```

---

## Stack & operations

- **Generator:** Astro 4 (static)
- **Deploy:** Manual build → force-push `dist/` to `gh-pages` branch (the user's OAuth lacks `workflow` scope, so no GitHub Actions)
- **Domain:** `noahbarlow.work` via Cloudflare DNS — four A records on `@` pointing to GitHub Pages IPs (`185.199.108-111.153`) + CNAME `www` → `noahbarlow.github.io`. DNS-only (grey cloud), not proxied.
- **Fonts:** Google Fonts (Instrument Serif + Instrument Sans + Young Serif)
- **Lead capture:** Single Formspree endpoint, distinguished by `source` and `diagnostic` hidden fields per form. All leads land in `noah@smalleragency.com`.
- **Analytics:** GA4 + Google Ads + LinkedIn + Meta scaffolding installed in `src/components/Analytics.astro` — IDs configured per account once they're created.
- **Cursor:** Custom SVG smiley face (lime fill, ink eyes + smile, ink ring) on default; inverted (ink fill, lime details) on `:hover`.

---

## How to use this file in another chat

Plug it in as the first message or as supporting context:

```
Raw URL (paste anywhere):
https://raw.githubusercontent.com/noahbarlow/noahbarlow.github.io/main/DESIGN.md

GitHub view URL (browsable):
https://github.com/noahbarlow/noahbarlow.github.io/blob/main/DESIGN.md
```

Suggested prompt opener:

> *"Use the Noah Barlow brand + design system from this reference: [paste URL or contents]. Build me [a deck slide / packaging mock / email / one-pager / etc.] on-brand. Match the voice and the AI-tells-to-avoid list precisely."*

The assistant should then be able to:

- Write headlines in the declarative + italicized-payoff pattern
- Draft body copy that passes the AI-tells test
- Reference color tokens by name (`--accent`, `--ink`, `--paper`) when writing CSS
- Generate visuals using only the cream / ink / lime palette
- Mirror the section rhythm (eyebrow → runhead → s-head → body)
- Avoid the specific anti-patterns pruned during the copy sweep

Keep this file updated whenever the brand evolves. The site is the source of truth; this is the readable summary.
