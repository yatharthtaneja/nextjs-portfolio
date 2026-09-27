# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Next Portfolio — Yatharth Taneja

Personal portfolio site showcasing UX/design case studies with highly visual, interactive elements.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + custom CSS, styled-jsx `<style>` blocks for case-study CSS, inline `style` props for one-off needs
- **Animation**: Framer Motion (sparingly — hover on FloatingImage only), CSS keyframes / transitions, CSS 3D transforms, SVG SMIL (gated on `prefers-reduced-motion`)
- **Fonts**: Bowlby One SC, Roboto, Playfair Display, Special Elite — loaded via Google Fonts `@import` in `globals.css`. `layout.tsx` applies only Geist as CSS variables.
- **React**: 19.1.0

## Project Structure

```
app/
├── layout.tsx                  # Root layout — metadata (incl. OG / Twitter cards), skip-to-content link, favicon
├── page.tsx                    # Home — Hero + Case Studies + About & Connect
├── globals.css                 # Theme vars, font imports, prefers-reduced-motion block, skip-link, focus-visible
├── not-found.tsx               # Branded 404 ("This page didn't make the cut")
│
├── about/page.tsx              # Redirects to /#about
├── work/
│   ├── page.tsx                # Redirects to /#work
│   ├── [slug]/page.tsx         # Generic "coming soon" fallback for case studies without a dedicated page
│   │
│   ├── opc-ua-explorer/
│   │   ├── page.tsx            # Case study JSX content (orchestration only)
│   │   └── _components/        # Extracted pieces (prefix `_` keeps them out of the route tree)
│   │       ├── theme.ts           # Palette constants (A, AS, AB, INK, INK2, INK3, LINE, CARD)
│   │       ├── Typography.tsx     # Pill, Artifact, EyebrowLabel, H2, P, SubLabel, Divider, PullQuote
│   │       ├── Detail.tsx         # Native <details> accordion — keeps collapsed text reachable by Cmd+F
│   │       ├── Reveal.tsx         # Reveal / StaggerGroup / StaggerItem (framer-motion, useInView once)
│   │       ├── Annotated.tsx      # Numbered callout pins on a screenshot + matching ordered legend
│   │       ├── PaperTexture.tsx   # PaperDefs / PaperGrid / Wash — graph-paper + watercolour filters
│   │       ├── SVGPrimitives.tsx  # PulseDot, DashedFlow, IsoTile
│   │       ├── DecisionBar.tsx    # Scroll-triggered stacked bar (19 decisions), on paper texture
│   │       ├── PhaseFunnel.tsx    # Narrowing bar chart, 18→14→27→11→5, on paper texture
│   │       ├── UserArchetypes.tsx, GlossaryTiles.tsx, LandscapeSVG.tsx     # Beat 1
│   │       ├── AudienceReframe.tsx, AnchorQuadrant.tsx, BrainstormCollage.tsx,
│   │       ├── CrazyEights.tsx, ForumConflict.tsx                          # Beat 2
│   │       ├── ImpactMetrics.tsx  # Beat 3 — escalation claim is deliberately unnumbered (TODO(yt))
│   │       └── OPCUAStyles.tsx    # All inline CSS for this case study
│   │
│   └── ni-daqmx/
│       ├── page.tsx            # Case study JSX content
│       └── _components/
│           ├── theme.ts           # Blue palette (A, AS, AB, AD, INK*, LINE, CARD)
│           ├── Typography.tsx     # Same helper set as opc-ua, blue-themed
│           ├── BeforeAfterHook.tsx# 50-line C → 3-line MATLAB code comparison
│           └── NiDaqmxStyles.tsx  # All inline CSS for this case study
│
└── components/                 # Shared across routes
    ├── CaseStudyJournal.tsx    # 3D book grid; also exports <Journal> for the featured band
    ├── JournalStyles.tsx       # Extracted CSS for CaseStudyJournal
    ├── FeaturedCaseStudy.tsx   # Lead study pulled out of the grid, with the outcome as the headline
    ├── CaseStudyIndexCards.tsx # Mobile (<=768px) index-card stack — all 4 studies on one screen
    ├── IndexCardStyles.tsx     # Extracted CSS for CaseStudyIndexCards
    ├── IntroSection.tsx        # Server component — "Hello." + the fixed facts line (#about)
    ├── BehancePostcard.tsx     # Earlier (college) work cards
    ├── icons.tsx               # Shared inline SVG glyphs
    ├── CaseStudyMenu.tsx       # Fixed-position morphing nav menu (used on case-study pages)
    ├── InteractiveName.tsx     # Letter-by-letter font crossfade on the hero ("YATHARTH")
    ├── FloatingImage.tsx       # Floating stamp images (CSS keyframes; Framer Motion only for hover)
    ├── Rotatingtagline.tsx     # 3-item rotating tagline carousel (4.5s interval, hover-pause)
    ├── OverlappingTitle.tsx    # Absolute-positioned rotated decorative text
    ├── AboutSection.tsx        # Server component — How I Can Help + Let's Connect + footer (#connect)
    ├── AboutButton.tsx         # Nav link wrapper
    └── ProductCard.tsx         # Wrapper around AboutButton

public/images/                   # Stamps, logos, stickers, decorative borders
```

### Refactor convention for case studies

Each case study under `app/work/<slug>/` follows the same structure:

- `page.tsx` — imports from `./_components/`, holds only the case-study JSX content
- `_components/theme.ts` — case-study-specific palette constants (each case study has its own accent + soft + bg)
- `_components/Typography.tsx` — `Pill`, `Artifact`, `EyebrowLabel`, `H2`, `P`, `SubLabel`, `Divider` — same signatures across case studies, palette-specific
- `_components/<CaseStudy>Styles.tsx` — single `<style>` block component holding all CSS for the case study, importing palette constants from `theme.ts` so styled-jsx interpolation works
- Additional case-study-specific components (illustrations, hooks, primitives)

The `_` prefix tells Next.js the folder is not a route. When adding a new case study, mirror this structure.

## Routes

| Route                       | Status      | Description                                              |
|-----------------------------|-------------|----------------------------------------------------------|
| `/`                         | Complete    | Hero + 3D case study journals + About & Connect          |
| `/about`                    | Redirect    | → `/#about`                                              |
| `/work`                     | Redirect    | → `/#work`                                               |
| `/work/opc-ua-explorer`     | Complete    | Industrial IoT case study                                |
| `/work/ni-daqmx`            | Complete    | API design study                                         |
| `/work/[slug]`              | Fallback    | Generic "coming soon" template for unbuilt case studies  |
| `/not-found`                | Complete    | Branded 404                                              |

## Design System

- **Brand palette**: `--background: #ededed`, `--purplebackground: #27174E`, `--maroontext: #AB4967`, `--purpletext: #493972`
- **Body background**: Purple (`#27174E`); content sections use `#F0EEF8` (lavender-white)
- **Case-study palettes** live in each case study's `_components/theme.ts` — OPC UA = green (`#1E6B4A`), NI-DAQmx = blue (`#1D4ED8`)
- **Utility classes**: `.purplebackground`, `.purpletext`, `.maroontext`, `.double-border`, `.custom-black` — in `globals.css`
- **Breakpoint**: `md` (768px) separates mobile/desktop layouts
- **Responsive**: Fluid typography via `clamp()`, `min()` for component sizing
- **Motion**: Custom cubic-beziers (`cubic-bezier(0.23, 1, 0.32, 1)` for ease-out, `cubic-bezier(0.22, 1, 0.36, 1)` for spring-ish) — see `app/components/JournalStyles.tsx` and the case-study Styles files for canonical timing values
- **Accessibility**: Global `prefers-reduced-motion` block in `globals.css` zeros transitions/animations; `@media (hover: hover) and (pointer: fine)` guards on every `:hover`; `:focus-visible` accent ring; SMIL animations gated in JS (CSS media queries don't reach `<animate*>`)

## Key Implementation Details

### Home Page (`app/page.tsx`)

Section order is **hero → about → work → connect**. Case-study data is a hardcoded `JournalProject[]` array at the top of `page.tsx` — 4 projects (opc-ua-explorer, ni-daqmx, mqtt-survey, opc-ua-server).

- The hero carries one `sr-only` `<h1>`. The visible name is decorative: it is split across separate mobile and desktop DOM trees and rendered as spans so `InteractiveName` can swap fonts per letter, so it cannot be the heading.
- `projects[0]` renders through `<FeaturedCaseStudy>` above the grid; `projects.slice(1)` goes to `<CaseStudyJournals>`. Mobile keeps all four in `<CaseStudyIndexCards>`.
- `highlight` / `highlightLabel` are the **outcome** of each study, not its volume of research. Keep them that way when editing.
- `coverImage` is declared on `JournalProject` but unused — `insetImages[0]` is what renders.

### 3D Book Effect (`CaseStudyJournal.tsx` + `JournalStyles.tsx`)

- CSS `perspective` + `transform-style: preserve-3d`
- Separate face elements: front cover, spine, page edges, back cover
- Hover: `rotateY/rotateX/scale` transitions via `data-hovered` attribute
- Mobile: `IntersectionObserver` with hysteresis (0.6 open / 0.5 close), only on `pointer: coarse` devices
- `data-scroll-open` exposes the touch state separately so the CTA can light up on scroll-in without depending on the hover state
- Entry animation: opacity + translate + slight scale + brief blur

### InteractiveName.tsx

- Each letter cycles between 2 font families on hover (300ms interval), with a 1.5px blur during swap
- Gated behind `(hover: hover) and (pointer: fine)`
- Resets instantly on mouse leave (was 2s, dropped)

### RotatingTagline.tsx

- 3 taglines rotate every 4.5s with asymmetric exit/enter (exit fast ease-in opacity, enter slower with custom ease-out + translate)
- Pauses on hover, snaps to visible when paused mid-transition
- Accepts `mobile` boolean prop — removes absolute positioning for flow layout

### FeaturedCaseStudy.tsx

- A band above `.journals-grid` carrying the lead study's outcome as the largest type on the page, plus the shipped pill, the docs link and a screenshot of the product.
- Reuses the exported `<Journal>` rather than forking it. `.journals-grid` is **flexbox**, so `grid-column: span 2` is inert, and the book geometry hard-codes a 60px depth across five CSS rules plus a locked 1.47 aspect ratio — hierarchy comes from position and type size instead.
- `.journal-wrapper` declares `display: block` because it is an `<a>`: inside the flex grid it was blockified for free, but outside one it collapses to 0×0.
- Desktop only (`hidden md:block`). It depends on `<JournalStyles>` being mounted by `CaseStudyJournals` on the same page.

### Annotated.tsx (`app/work/opc-ua-explorer/_components/`)

- Numbered green pins on a static screenshot with a matching ordered legend beneath. Pins are `aria-hidden`; the legend carries the text.
- Replaced `ZoomFrame`, which animated a zoom and pan — motion rather than explanation, since the reader still had to find the thing being discussed. `ZoomFrame` and its CSS have been deleted.

### Detail.tsx (`app/work/opc-ua-explorer/_components/`)

- Native `<details>`/`<summary>` on purpose: no JS state, works with scripting off, and find-in-page still reaches collapsed text. A JS accordion would hide it from Cmd+F, which is the whole reason the long-form detail stays on-page.
- Theme 1 and only Theme 1 is `open` by default, so the pattern reads. It is ~2,700px of the page's height — the single biggest lever if the study needs shortening.

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build --turbopack
npm run lint     # eslint
npm run start    # next start
```

## Path Aliases

`@/*` maps to `./*` (tsconfig paths)

## Notes

- No API routes, middleware, or database
- All interactive components use `'use client'`; `AboutSection.tsx` is a server component
- Images use Next.js `Image` component for optimization
- Animation philosophy: short-duration, custom cubic-beziers, hover guards on touch, motion respect via `prefers-reduced-motion` — see the audit doc in `~/.claude/plans/using-this-skill-do-partitioned-elephant.md` for the full rationale
