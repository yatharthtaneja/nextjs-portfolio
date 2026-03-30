# Next Portfolio — Yatharth Taneja

Personal portfolio site showcasing UX/design case studies with highly visual, interactive elements.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + custom CSS, CSS-in-JS in components
- **Animation**: Framer Motion, CSS 3D transforms, keyframe animations
- **Fonts**: Bowlby One SC (default), Roboto, Playfair Display, Special Elite (via Google Fonts + next/font)
- **React**: 19.1.0

## Project Structure

```
app/
├── layout.tsx              # Root layout — metadata, font setup, CSS variables
├── page.tsx                # Home page — hero section + case study journals
├── globals.css             # Theme variables, font imports, global styles
├── components/
│   ├── InteractiveName.tsx     # Letter-by-letter hover font cycling ("YATHARTH")
│   ├── CaseStudyJournal.tsx    # 3D book component with hover/scroll animations
│   ├── FloatingImage.tsx       # Framer Motion floating stamp images
│   ├── Rotatingtagline.tsx     # 3-item rotating tagline carousel (3s interval)
│   ├── OverlappingTitle.tsx    # Absolute-positioned rotated text overlays
│   ├── AboutButton.tsx         # Simple nav link to /work
│   └── ProductCard.tsx         # Wrapper around AboutButton
├── about/page.tsx          # Placeholder — fetches from JSONPlaceholder
└── work/page.tsx           # Placeholder — fetches from JSONPlaceholder
public/images/              # Static assets (stamps, logos, borders, patterns)
```

## Routes

| Route    | Status      | Description                        |
|----------|-------------|------------------------------------|
| `/`      | Complete    | Hero + 3D case study journals      |
| `/about` | Placeholder | Server component, demo API data    |
| `/work`  | Placeholder | Server component, demo API data    |

## Design System

- **Colors**: `--background: #ededed`, `--purplebackground: #27174E`, `--maroontext: #AB4967`, `--purpletext: #493972`
- **Body background**: Purple (#27174E)
- **Breakpoint**: `md` (768px) separates mobile/desktop layouts
- **Responsive**: Fluid typography via `clamp()`, `min()` for component sizing

## Key Implementation Details

### 3D Book Effect (CaseStudyJournal.tsx)
- CSS `perspective` + `transform-style: preserve-3d`
- Separate face elements: front cover, spine, page edges, back cover
- Hover: rotateY/rotateX/scale transitions
- Mobile: IntersectionObserver with hysteresis (0.6 open / 0.5 close thresholds), only on `pointer: coarse` devices

### InteractiveName.tsx
- Each letter cycles through 3 font families on hover (300ms interval)
- Auto-resets 2s after mouse leave

### RotatingTagline.tsx
- 3 taglines rotate every 3s with enter/exit animation states
- Accepts `mobile` boolean prop for responsive positioning

### Case Study Data
- Hardcoded `projects: JournalProject[]` array in `page.tsx`
- 3 projects: MATLAB Copilot, OPC-UA Explorer, Kawach
- Interface: `{ slug, title, readTime, type, problem, highlight, coverColor, spineColor, coverImage, insetImages[], nda }`

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
- `/about` and `/work` are scaffolding — to be replaced with real content
- All client components use `'use client'` directive
- Images use Next.js `Image` component for optimization
