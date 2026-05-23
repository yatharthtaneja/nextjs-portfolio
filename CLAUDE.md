# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Next Portfolio — Yatharth Taneja

Personal portfolio site showcasing UX/design case studies with highly visual, interactive elements.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + custom CSS, CSS-in-JS via inline `style` props in components
- **Animation**: Framer Motion, CSS 3D transforms, keyframe animations
- **Fonts**: Bowlby One SC, Roboto, Playfair Display, Special Elite — loaded via direct Google Fonts `@import` in `globals.css` (not via `next/font` variables, despite those imports existing in `layout.tsx`)
- **React**: 19.1.0

## Project Structure

```
app/
├── layout.tsx              # Root layout — metadata, favicon, font imports (Geist only applied)
├── page.tsx                # Home page — three sections: Hero, Case Studies, About & Connect
├── globals.css             # Theme variables, font imports, global styles, utility classes
├── components/
│   ├── InteractiveName.tsx     # Letter-by-letter hover font cycling ("YATHARTH")
│   ├── CaseStudyJournal.tsx    # 3D book component with hover/scroll animations
│   ├── FloatingImage.tsx       # Framer Motion floating stamp images
│   ├── Rotatingtagline.tsx     # 3-item rotating tagline carousel (3s interval)
│   ├── OverlappingTitle.tsx    # Absolute-positioned rotated text overlays
│   ├── AboutSection.tsx        # Full about/connect section (Hello, How I Can Help, Let's Connect, footer)
│   ├── AboutButton.tsx         # Simple nav link to /work
│   └── ProductCard.tsx         # Wrapper around AboutButton
├── about/page.tsx          # Placeholder — fetches from JSONPlaceholder
└── work/page.tsx           # Placeholder — fetches from JSONPlaceholder
public/images/              # Static assets (stamps, logos, borders, patterns)
```

## Routes

| Route    | Status      | Description                                      |
|----------|-------------|--------------------------------------------------|
| `/`      | Complete    | Hero + 3D case study journals + About & Connect  |
| `/about` | Placeholder | Server component, demo API data                  |
| `/work`  | Placeholder | Server component, demo API data                  |

## Design System

- **Colors**: `--background: #ededed`, `--purplebackground: #27174E`, `--maroontext: #AB4967`, `--purpletext: #493972`
- **Body background**: Purple (#27174E); sections use `#F0EEF8` (lavender-white)
- **Utility classes**: `.purplebackground`, `.purpletext`, `.maroontext`, `.double-border` (box-shadow border with SVG wavy background), `.custom-black` — defined in `globals.css`
- **Breakpoint**: `md` (768px) separates mobile/desktop layouts
- **Responsive**: Fluid typography via `clamp()`, `min()` for component sizing

## Key Implementation Details

### Home Page Sections (`page.tsx`)
Three `<section>` elements with ids `hero`, `work`, and `about`. The About & Connect section is rendered via `<AboutSection />` (a server component — no `'use client'`).

### 3D Book Effect (`CaseStudyJournal.tsx`)
- CSS `perspective` + `transform-style: preserve-3d`
- Separate face elements: front cover, spine, page edges, back cover
- Hover: rotateY/rotateX/scale transitions
- Mobile: IntersectionObserver with hysteresis (0.6 open / 0.5 close thresholds), only on `pointer: coarse` devices

### InteractiveName.tsx
- Each letter cycles through 3 font families on hover (300ms interval)
- Auto-resets 2s after mouse leave

### RotatingTagline.tsx
- 3 taglines rotate every 3s with enter/exit animation states
- Accepts `mobile` boolean prop — when `true`, removes absolute positioning for flow layout

### Case Study Data
- Hardcoded `projects: JournalProject[]` array in `page.tsx`
- 3 projects: MATLAB Copilot, OPC-UA Explorer, Kawach
- Interface: `{ slug, title, readTime, type, problem, highlight, highlightLabel, coverColor, spineColor, coverImage, insetImages[], nda }`

### Font Loading
`globals.css` imports fonts directly via Google Fonts URLs. `layout.tsx` also imports them via `next/font/google` but only applies Geist as CSS variables — the portfolio fonts (Bowlby One SC, Roboto, etc.) are referenced by name in `@theme` and component styles, not as `--font-*` variables.

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
- No error/loading boundary files yet
- `/about` and `/work` routes are scaffolding — real content lives in `AboutSection.tsx` on the home page
- All interactive components use `'use client'` directive; `AboutSection.tsx` is server-side
- Images use Next.js `Image` component for optimization
