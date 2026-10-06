# Vorleak Hak: Portfolio

Personal portfolio site, built with [Astro](https://astro.build). The site is fully static: no backend, no database, and one dependency. It deploys free on Vercel, Netlify, or GitHub Pages.

- **Home** (`/`): Intro + About → What I bring → Featured case studies → Research & design experience → Other experience → Skills → Contact
- **Case studies**: `/work/la-colaborativa`, `/work/memory-lab`, `/work/owl-head` (featured), `/work/expressit` (compact card under Other experience)

---

## Run it locally

You need Node.js **22.12 or newer** (`node -v` to check).

```bash
npm install      # first time only
npm run dev      # → http://localhost:4321 (auto-reloads as you edit)
```

Other commands:

| Command           | What it does                                           |
| ----------------- | ------------------------------------------------------ |
| `npm run build`   | Builds the production site into `dist/`                |
| `npm run preview` | Serves the built `dist/` locally to double-check it    |
| `npm run todos`   | Lists every remaining TODO and every missing image     |

---

## Edit content (no layout code needed)

**All text lives in [`src/content.ts`](src/content.ts).** Open it, change words, save. The dev server updates instantly.

- **Intro/About, Experience, Skills, Contact:** clearly labeled sections in the file. The About paragraphs (`about`) appear in the opening section, right under the headline (`hero`).
- **Case studies:** the `caseStudies` array. Each has a `snapshot` (the Role/Team/Timeline box) and `sections`, each made of blocks:

  | Block           | Renders as                                                        |
  | --------------- | ----------------------------------------------------------------- |
  | `p`             | A paragraph                                                        |
  | `list`          | Bullet list (`ordered: true` → numbered index rows)               |
  | `callout`       | `tone: 'decision'` (teal rule) or `'insight'` (one sentence → serif pull quote) |
  | `cards`         | Grid of small numbered cards (used for ExpressIt's problem areas)  |
  | `figures`       | One or more images with captions                                   |
  | `link`          | Big button that opens in a new tab                                 |
  | `walkthrough`   | Step-by-step screenshots in tablet frames (La Colaborativa)        |
  | `reflection`    | Dashed "Reflection coming soon" box                                |
  | `todo`          | Yellow placeholder                                                 |

- **Reordering case studies:** the order of the `caseStudies` array is the order on the home page. The first one gets the large featured card. Set `tier: 'more'` to move a case study down to a compact card under "Other experience".
- **Roles:** each entry in `experience` has `tier: 'research'` (Research & design section) or `'other'`. `focus` adds the small labels; the first one is highlighted.
- **Switching headlines:** the alternate hero headline is in a comment next to `hero.headline`.
- **Italic emphasis:** in headings, wrap words in `*asterisks*` to set them in italic serif (in the hero headline they also get the ochre highlighter).
- **Design system:** colors and type come from the Vorleak Hak Portfolio design system (`tokens.json` in Product-Portfolio-Hub). The values live at the top of `src/styles/global.css`.

### Placeholders

- Any text that starts with `TODO:` shows on the site as a **yellow dashed badge**, so nothing unfinished slips through. Replace the whole string, including `TODO:`.
- The **"Reflection coming soon"** boxes show your writing prompts *only when running locally* (`npm run dev`). The live site shows just the box. When you're ready, replace the `reflection` block with `p` blocks and callouts.

### Images

Every image is a labeled placeholder until you add the file. **Drop a file at the exact path shown on the placeholder** (inside `public/`) and it appears automatically. No code changes needed.

- Use `.png` or `.jpg` and keep the file names in `content.ts` in sync (rename either one).
- Every image has `alt` text in `content.ts`. Update it to describe what's actually in your screenshot. Alt text that still says `TODO` falls back to the label.
- Suggested sizes: case covers ~1600×800, walkthrough screens 4:3, headshot 4:5 portrait.

---

## Before you deploy

Run `npm run todos` for the live list. As of the last update:

- [ ] **`public/resume.pdf`**: add your resume **with your phone number removed**. The nav, intro, and contact links all point here.
- [ ] **`astro.config.mjs` → `site`**: set to your real URL once deployed (used for social previews).
- [ ] **ExpressIt** (`content.ts`): after the December presentation, replace the "In progress" outcome with what the client adopted.

Already done: headshot, social preview image (`public/og-image.png`), all case study images, LinkedIn.

> ⚠️ **ExpressIt confidentiality:** never add revenue, budget figures, vendor names, competitor names, board discussions, or individual people's names.

---

## Deploy (free)

First push the project to a GitHub repo:

```bash
git add -A && git commit -m "Portfolio site"
# create an empty repo on github.com, then:
git remote add origin https://github.com/<you>/vorleak-portfolio.git
git push -u origin main
```

### Option A: Vercel (recommended, easiest)
1. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Add New → Project** → import the repo.
2. It auto-detects Astro. Click **Deploy**.
3. You get a URL like `vorleak-portfolio.vercel.app`. Put it in `astro.config.mjs` → `site`, then commit and push. Every push redeploys automatically.

### Option B: Netlify
1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → pick the repo.
2. Build command `npm run build`, publish directory `dist`. Deploy.

### Option C: GitHub Pages
1. In `astro.config.mjs` set `site: 'https://<you>.github.io'` and `base: '/vorleak-portfolio'` (your repo name).
2. Add `.github/workflows/deploy.yml` using Astro's official action. Copy the file from the [Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).
3. Repo **Settings → Pages → Source: GitHub Actions**.

All internal links go through a `url()` helper, so the `base` setting just works.

### Custom domain (optional)
Buy a domain (e.g. `vorleakhak.com`) and add it in Vercel/Netlify → Domains. Then update `site` in `astro.config.mjs`.

---

## Accessibility (part of the pitch)

- WCAG 2.1 AA color contrast on all text (tokens + ratios documented at the top of `src/styles/global.css`). The system's bright coral is only used for large type and decoration; small text uses a deeper coral
- Semantic landmarks and headings, a skip link, and one `h1` per page
- Fully keyboard navigable with a high-visibility blue focus ring
- Every image has alt text. Placeholders are announced as "Image placeholder: …"
- `prefers-reduced-motion` removes animations, transitions, and smooth scrolling
- 44px+ tap targets. Type: Instrument Serif (headings), DM Sans (body), DM Mono (labels)
- The case-study progress bar is decorative. The section tracker exposes position with `aria-current`

Checked with axe-core (0 WCAG A/AA violations at first build) and by keyboard at 375 / 768 / 1440px. Re-check after adding images: <https://wave.webaim.org/> or Chrome DevTools → Lighthouse → Accessibility.

---

## Project structure

```
src/
  content.ts              ← ALL the words. Edit this.
  pages/index.astro       ← Home page layout
  pages/work/[slug].astro ← Case study template (one file → all 4 pages)
  components/             ← Header, Footer, CaseCard, Media (image/placeholder), Blocks, Txt
  layouts/Base.astro      ← <head>, SEO + Open Graph tags, skip link
  styles/global.css       ← Colors, fonts, buttons, chips
  lib/utils.ts            ← Small helpers
public/                   ← Images, resume, favicon (served as-is)
scripts/list-todos.mjs    ← `npm run todos`
```
