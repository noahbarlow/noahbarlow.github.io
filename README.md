# noahbarlow.github.io — v2

Personal consultancy site for **Noah Barlow**: brand, packaging, and growth
leadership for founder-led challenger companies.

Built with [Astro](https://astro.build/). Deployed to GitHub Pages via the
workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

## Stack

- **Astro** (static output, no framework runtime)
- **Vanilla CSS** with a small design-system file in `src/styles/global.css`
- **Fraunces** (display serif) and **Inter** (body sans), via Google Fonts
- No JS framework, no build-time client-side hydration

## Develop locally

```bash
npm install
npm run dev
```

Site runs at <http://localhost:4321>.

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Deploy

GitHub Pages, via Actions. First time only:

1. Push to `main`.
2. In repo **Settings → Pages**, set **Source: GitHub Actions**.

After that, every push to `main` builds and deploys automatically.

> User Pages note: this is a `username.github.io` repo, so the site
> publishes at <https://noahbarlow.github.io>. No `base` path is needed in
> `astro.config.mjs`.

## Structure

```
src/
├─ components/   Nav, Footer
├─ layouts/      BaseLayout (shell, head, fonts, nav, footer)
├─ pages/
│  ├─ index.astro             Home
│  ├─ about.astro
│  ├─ advisory.astro
│  ├─ contact.astro
│  ├─ work/
│  │  ├─ index.astro          All work index
│  │  └─ <slug>.astro         Case study pages
│  └─ thinking/
│     ├─ index.astro          Essays index
│     └─ <slug>.astro         Essay pages
└─ styles/global.css

public/
├─ img/                       Tile + case-study imagery (preserved from v1)
├─ docs/                      Whitepapers / scorecards
└─ favicon.svg

legacy/
└─ index.v1.html              Archived v1 page (not deployed)
```

## Adding work or essays

Each case study and essay is currently a single `.astro` file in
`src/pages/work/` or `src/pages/thinking/`. To add new ones:

1. Copy an existing file as a template.
2. Update the front-matter `BaseLayout` props (title, description).
3. Drop hero imagery into `public/img/work/` and reference it.
4. Add a row to the relevant `index.astro` (and to home for "selected work").

If the list grows past ~10 entries, graduate to Astro Content Collections
(`src/content/work/`, `src/content/thinking/`) for typed front-matter and
auto-routing.

## Design tokens

All design tokens live as CSS variables in `src/styles/global.css`:

- Color: `--ink`, `--paper`, `--rule`, `--mute`
- Type: `--font-display` (Fraunces), `--font-sans` (Inter)
- Scale: `--t-xs` through `--t-5xl` (all `clamp()` for fluid sizing)
- Layout: `--shell`, `--shell-narrow`, `--gutter`

To rebrand colors or type, change the tokens in one place.

## Notes

- `.nojekyll` exists at repo root so GitHub Pages serves the build output
  without Jekyll processing.
- The v1 site lives at `legacy/index.v1.html` for reference.
