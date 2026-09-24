# Lynra Design System

Brand, tokens, typography, iconography, components and templates for **Lynra** — a Strawberry Living company building villages for the workforce of tomorrow.

> Beyond function for people. Built to perform for the business.

## Quick start

Link one stylesheet. It loads the fonts and every token.

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css">

<h1>Lynra builds villages that make temporary life work really well</h1>
<p class="intro">A world beyond function for the workforce of tomorrow.</p>
```

Using React components from the prebuilt bundle:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="_ds_bundle.js"></script>
<script>
  const { Hero, VillageCard } = window.LynraDesignSystem_019e30;
</script>
```

Serve the repo over HTTP (`npx serve .`) — font and SVG paths are relative and will not load from `file://` in every browser.

## Repository structure

```
.
├── styles.css               Entry point — import this
├── colors_and_type.css      Tokens (source of truth) + element defaults + utilities
├── tokens/tokens.json       Same tokens in W3C DTCG format (generated)
├── fonts/                   Funnel Display (5 weights), Inter Tight (4 weights), fonts.css
├── assets/
│   ├── logos/               Symbol, wordmark, horizontal/vertical lockups, Strawberry byline × colour variants
│   └── imagery/             Atmosphere photography
├── ui_kits/
│   ├── website/             Marketing components (.jsx + .d.ts) and demo index.html
│   └── app/                 Resident "Portal" app components (.jsx + .d.ts) and demo index.html
├── slides/                  16:9 slide templates (Title, Section opener, Content, Bento, Quote, Stat, Wayfinding)
├── preview/                 Specimen cards for every token group and component
├── _ds_bundle.js            Prebuilt bundle of all components (window.LynraDesignSystem_019e30)
├── docs/
│   ├── RULES.md             Normative rules — MUST / MUST NOT
│   └── brand-guidelines.md  Full brand reference: voice, visual foundations, iconography
├── SKILL.md                 Agent skill manifest (Claude Code / Claude skills)
├── CLAUDE.md                Instructions for AI coding agents working in this repo
└── CONTRIBUTING.md          How to change the system
```

## Components

| Kit | Components |
|---|---|
| `ui_kits/website/` | `MetaStrip`, `SiteHeader`, `Hero`, `ValueProps`, `BentoOverview`, `VillageCard`, `QuoteBlock`, `SiteFooter` |
| `ui_kits/app/` | `StatusBar`, `TabBar`, `DotField`, `CheckInScreen`, `DashboardScreen`, `ServiceScreen`, `VillageScreen` |

Each component has a `.d.ts` with its props. Open `ui_kits/*/index.html` for a running demo.

## Tokens at a glance

| Group | Values |
|---|---|
| Brand colours | Red Ember `#FF4D4F` · Umber `#4D0B00` · Clay `#ABA69B` · Granite `#3E3B34` · Ash `#F6F4F4` · Obsidian `#242428` · Haze `#999999` · Aluminium `#D6D0CC` · White `#FFFFFF` |
| Type | Funnel Display (display) · Inter Tight (body/UI) · Frank Ruhl Libre (quote fallback for licensed Times Now) |
| Scale | 12 / 14 / 16 / 18 / 21 / 26 / 42 / 68 / 90 / 110 / 177 px |
| Spacing | 8 / 16 / 24 / 32 / 40 / 64 / 80 / 120 px |
| Radius | 6 / 8 / **10 (default)** / 16 / 24 / 40 / pill |
| Motion | `cubic-bezier(0.2,0,0,1)` · 120 / 200 / 400 ms |

## Rules

Read [`docs/RULES.md`](docs/RULES.md) before designing or coding with the system. The short version: grayscale plus one accent, Funnel Display for display and Inter Tight for everything else, sentence case, no punctuation on headlines, no emoji, Phosphor icons, always rounded corners.

## Known gaps

- **Times Now** is licensed and not included. Quotes fall back to Frank Ruhl Libre (Google Fonts) — add the licensed files to `fonts/` and `fonts.css` if you hold a licence.
- Phosphor icon mappings in the guidelines are best matches to the brandbook; verify on phosphoricons.com.
- `_ds_bundle.js` is a prebuilt artefact. Rebuild it when component source changes (see CONTRIBUTING.md).

## Ownership

Internal brand asset of Lynra / Strawberry Living. Fonts are distributed under their own licences (Funnel Display and Inter Tight: SIL Open Font License). Keep the repository private unless brand management approves otherwise.
