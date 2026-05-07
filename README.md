# noahbarlow.github.io

Personal site — editorial portfolio + resume for senior agency leadership roles.

Single-file static site. No build step. Deploys to GitHub Pages.

**Visual:** electric lime on ink black. Custom cursor. Scroll-reactive ticker.

---

## Deploy to GitHub Pages

### 1. Create the GitHub repo

Go to [github.com/new](https://github.com/new):

- **Repository name:** `noahbarlow.github.io` (must match your GitHub username exactly)
- **Visibility:** Public (required for free GitHub Pages)
- **Initialize:** Leave everything unchecked

### 2. Push everything

Easiest path — use the GitHub web UI:

1. On the empty repo page, click **uploading an existing file**
2. Drag the contents of this folder in (`index.html`, `README.md`, `.nojekyll`, and the entire `img` folder)
3. Commit message: `Initial site`
4. Click **Commit changes**

Or via terminal:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/noahbarlow/noahbarlow.github.io.git
git push -u origin main
```

### 3. Enable Pages

1. Repo → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Wait ~60 seconds. Site goes live at **`https://noahbarlow.github.io`**

### 4. (Optional) Custom domain

If you want it at `noahbarlow.com`:

1. In your domain registrar's DNS settings, add 4 A records for `@`:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   And a CNAME for `www` pointing to `noahbarlow.github.io`.
2. In the GitHub repo: **Settings → Pages → Custom domain** → enter `noahbarlow.com` → Save
3. Tick **Enforce HTTPS** once the cert provisions (~10–60 minutes)

---

## Editing the site

One file. Plain HTML/CSS/JS. Open `index.html`.

**Common edits:**
- **Lead paragraph** — search for `class="blurb"`
- **The "Now Playing" section** (Reading, Building, Skeptical of, Looking for) — search for `class="now-list"`
- **Stats** (20+, 7, 12+) — search for `class="stat"`
- **Ticker phrases** — search for `id="ticker-track"`
- **Roles** — search for `class="role"`
- **Work tiles** — search for `class="work-tile`
- **Press** — search for `class="press-list"`

**Color system** — all colors are CSS variables at the top of the `<style>` block:
- `--ink` (background)
- `--lime` (primary accent — change this to swap the entire accent across the site)
- `--hot` (secondary punch — used for the strike-through)

**Replacing work images** — drop a new image into `img/work/` with the same filename, or update the `src` on the relevant `<img>` inside the matching `<a class="work-tile">` block.

---

## Tech notes

- No build step, no framework, no dependencies
- Fonts: Fraunces (display, with WONK + SOFT axes), Space Grotesk (UI), JetBrains Mono (mono)
- 15 portfolio images, ~1.7MB total (optimized JPEG)
- Works without JavaScript (graceful fallback, content fully visible)
- Mobile-first responsive
- Respects `prefers-reduced-motion`
- Custom cursor disabled on touch devices

Built in Toronto.
