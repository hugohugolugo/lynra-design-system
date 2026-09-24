# Lynra Design System

> **Beyond function for people. Built to perform for the business.**

Lynra is a hospitality-led operating system for large-scale, temporary work
environments — "villages" built for the workforce of tomorrow.
This folder is the canonical source for Lynra's brand, type, color,
spacing, iconography, components and UI kits.

---

## What is Lynra?

Lynra is the brand and operating method behind a network of named **villages**
(Polaris Village is the first; future locations follow the same pattern) built
to house and serve large industrial workforces — gigafactory crews, energy
projects, offshore facilities. Lynra is part of **Strawberry Living**.

The brand exists at the intersection of three identities:

1. **Hoteliers.** Decades of hospitality experience applied to environments
   that are usually managed as logistics.
2. **Operators.** Coordinated infrastructure: booking, onboarding, daily
   services and maintenance run through a single digital layer.
3. **Designers.** Scandinavian-rooted, peg-board–inspired modular systems —
   structured enough to guide, open enough to adapt.

### Brand hierarchy

```
Strawberry Living
   └─ Lynra              ← the system / framework (quiet)
        ├─ Polaris Village   ← the site (primary on-site)
        └─ Village Y …
```

There are **no verbal lockups**: avoid "Polaris Village by Lynra" or
"Lynra Polaris." The relationship is architectural, not branded —
Polaris Village is the primary on-site identifier; the Lynra symbol
sits underneath as a consistent, quiet marker.

### Products represented in this system

- **Website** (Lynra marketing — `village-test.webflow.io` was the WIP
  reference). UI kit: `ui_kits/website/`.
- **App** ("Portal" — resident-facing companion app: check-in, room info,
  services, support). UI kit: `ui_kits/app/`.
- **Brandbook & presentation deck** template (`slides/`).

---

## Sources

These files were assembled from materials supplied by the client:

| Source | Type | Notes |
|---|---|---|
| `uploads/Lynra Brandbook.pdf` | PDF, 41 pages | Definitive brand reference. Quoted throughout this README. |
| `uploads/Funnel_Display,Inter_Tight.zip` | Font archive | TTFs extracted to `fonts/`. |
| `uploads/Lynra *.svg` (54 files) | Logos | Symbol, wordmark, horizontal & vertical lockups, Strawberry byline; in 9 color variants each. Copied to `assets/logos/`. |
| Figma — *LYNRA - PROCESS - HUGOS KOPIA* | Figma file (mounted) | Used the `/Export/Brand` page (the brandbook deck itself) as the precise design reference. Atmosphere photos copied to `assets/imagery/`. |

If you have the live Figma file, the relevant frames are under
**`/Export/Brand`** — Colors, Typography, Spacing, Iconography, Visual Toolbox,
Bento Layout, Data Visualization, Wayfinding, Website, App.

---

## Content fundamentals

> "We use simple words and direct sentences. Meaning should be immediate."

The Lynra voice is **clear, intentional, grounded, human-not-emotional, and
subtly futuristic.** Five pillars from the brandbook:

| Pillar | Write… | Avoid… |
|---|---|---|
| **Clear** | short, clean, unambiguous lines | metaphors, decorative language, vague statements |
| **Subtle futurism** | "calibrated", "aligned", "steady", "configured" | sci-fi language, technical jargon, dramatic futurism |
| **Human, not emotional** | respectful, concise, functional | motivational tone, hospitality clichés, intimate language |
| **Intentional** | logical order, consistent rhythm, economical expression | clutter, drift, unnecessary variation |
| **Grounded** | measured, concrete, accurate | hype, emotional framing, speculation |

### Tone in practice

- **Sentence case** for everything — headlines, buttons, navigation. No
  ALL-CAPS as a style choice; ALL-CAPS is reserved for very small labels or
  utility marks (e.g. header meta "BRAND ID Lynra 2025 CONFIDENTIAL").
- **No punctuation** on display headlines ("Lynra builds villages that make
  temporary life work really well" — no period).
- **You** speaks directly to the resident ("Your room is designed to give you
  a sense of steadiness…"). **We** speaks for Lynra as an operator ("We design
  and operate environments as coherent systems"). Never "I."
- **No emoji.** Ever. The system is built on iconography (Phosphor), not
  emoji.
- **No exclamation marks** except in extremely rare functional cases.
- **Em-dash and arrows used sparingly.** The arrow glyph `→` is part of the
  visual toolbox (wayfinding) and may appear in copy as a directive marker.
- **Naming convention for places**: `Polaris: Market`, `Polaris: Reception` —
  colon, sentence case, no possessive. The village name is the namespace.

### Example copy

| Surface | Example |
|---|---|
| Check-in success | *"Your check-in is complete. The village is ready for you."* |
| Maintenance ticket | *"Your request is logged and scheduled. We will update you when the issue is resolved."* |
| Brand promise | *"Beyond function for people. Built to perform for the business."* |
| Vision | *"A world beyond function for the workforce of tomorrow."* |
| Place name | *"Polaris: Market"* (not "The Polaris Marketplace") |

---

## Visual foundations

### Background

Default page background is **Lynra Ash** (`#F6F4F4`) — a warm,
near-white. Pure white (`#FFFFFF`) is reserved for elevated surfaces
(cards, sheets, the app foreground). The system avoids dark mode by default;
inverted surfaces use **Lynra Obsidian** (`#242428`).

Backgrounds may carry a quiet **dot grid** pattern as decoration (24×
the dot size) — used on website hero, business cards, brochures, and
optionally on app surfaces. A denser dot grid (2× the dot size) appears in
wayfinding and blocked layouts.

### Imagery vibe

Warm, desaturated, **slightly cool/grey** atmosphere with cardboard, raw
materials, soft daylight. Photography is documentary-style — no models
staring at the camera, no stock-shiny renderings. Lynra-branded objects
(boxes, signage, uniforms) sit in matter-of-fact contexts. Renders favour
Nordic neutrals: concrete, plywood, ash, beige.

### Color usage rule

> "Not more than two colors per slide for a majority of the content. You may
> use additional colors as accents."

The brand works primarily in **grayscale + one accent (Lynra Red Ember)**.
Three high-leverage combinations from the brandbook:

- **Lynra Umber (fill) + Lynra Red Ember (text)** — visionary content, hero
  quotes, ambitious targets.
- **Lynra Clay + photography** — Clay's darkness makes photos pop.
- **Lynra Ash + (Obsidian, Aluminium, Haze, White)** — the everyday workhorse
  grayscale. Default to Ash and Obsidian unless you have reason to vary.

### Type

| Use | Family | Weight | Notes |
|---|---|---|---|
| Headlines, place names, hero | **Funnel Display** | Medium (500) / SemiBold (600) / Bold (700) | Negative tracking `-0.04em` at display sizes. No punctuation on headlines. |
| Intro / lede | **Inter Tight** | SemiBold (600) | Sits between H3 and body. |
| Body, UI, captions | **Inter Tight** | Medium (500) | 16/15px most contexts, line-height 1.35. |
| Editorial quotes | **Times Now SemiLight** *(licensed)* | Light italic | Fallback: **Frank Ruhl Libre** — used here. |

Scale: base 16, ratio 1.618 (golden) → 16 / 26 / 42 / 68 / 110 / 177 px.
Spacing follows the **8px rule**: 8 / 16 / 24 / 32 / 40 / 64 / 80 / 120.

### Corner radii

Always rounded, never sharp. Default card radius is **10px**. Larger panels
use 16–40px; pills are fully rounded. Asymmetric radii (e.g. `64 40 40 40`
on a peg-board tile) are part of the visual toolbox.

### Borders, dividers

Hairline `1px` in **Aluminium** (`#D6D0CC`) for cards and dividers; subtle
gradients are not used as a style. The brandbook explicitly forbids dropshadow
on the logo. Body shadow elsewhere is restrained:
- `--shadow-1` for raised UI
- `--shadow-2` for floating menus
- `--shadow-3` for modals only

### Hover & press states

- **Hover** on neutral elements: shift one tone darker (Ash → Aluminium;
  Aluminium → Clay) — never opacity-only.
- **Hover** on accent: Red Ember → Umber background, or invert.
- **Press**: 96% scale, 100ms — no color shift required.
- **Focus**: 2px Obsidian ring, 2px offset, on every interactive element.
- **Disabled**: 40% opacity, no interaction.

### Transparency & blur

Used sparingly. Blur is acceptable on (a) sticky headers over imagery and
(b) Bento overlay captions on photo tiles. The brand prefers **opaque
surfaces with clear edges** over translucency.

### Animation

Steady, considered, never bouncy.
- Standard ease: `cubic-bezier(0.2, 0, 0, 1)`.
- Standard durations: 120 / 200 / 400 ms.
- **No spring**. **No long anims** (> 600ms). **No parallax.**
- One sanctioned motion motif: an **animated progress path** (a dotted line
  growing across a card) used "as decoration, sparely."

### Layout rules

- 1920×1080 deck canvas. Side margin **80px**, header height **52px**.
- Web layout uses the same 8px scale; container max-width ~1280–1440.
- The **Bento layout** is the brand's preferred multi-panel composition:
  asymmetric rectangular tiles with 10–16px radii and 16px gaps. Reserve it
  for branded overviews — not for content-dense screens.
- The **peg-board** mental model: every element has a defined slot. If a
  block feels free-floating, snap it to the column grid.

### Specific motifs to reuse

- **Tone-on-tone** giant display words (e.g. "Gym" in `Umber` on `Red Ember`).
  Title fills the tile to the bleed; one word per panel.
- **Marker dots** (small Clay circles, scattered) — sparingly.
- **Animated progress path** — a dotted arc/line with a moving head.
- **Wayfinding arrows** (`→ Gym Opened 24/7`) — bold, geometric, big.
- **Strawberry byline** under the wordmark — for executive / employer-brand
  contexts only, rarely.

### Don'ts (from the brandbook)

Treat the logo with respect. Don't:
- Use it at low resolution
- Add a dropshadow
- Squash it / change proportions
- Mix the logo colors
- Use non-brand colors
- Fill the logo with an image
- Give too little contrast or free space

---

## Iconography

> "For most icons, the brand utilizes the **Phosphor Icons** set. In
> presentations, **thin** icons are used to maintain a light, editorial feel.
> On the web, the **light** icon weight is applied to ensure clarity and
> consistency across interfaces."

### Sizes
- **Small 24px** — inline with text
- **Medium 28px** — buttons
- **Large 56px** — presentations, feature cards

### How to use Phosphor

Load via the official CDN — no SVG hand-rolling, no emoji substitution:

```html
<!-- For presentations / decks: Thin weight -->
<i class="ph-thin ph-bed" style="font-size: 56px"></i>
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/thin/style.css" />

<!-- For web / app UI: Light weight -->
<i class="ph-light ph-bed" style="font-size: 24px"></i>
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css" />
```

Common Lynra icon mapping (brandbook → Phosphor):

| Lynra meaning | Phosphor name |
|---|---|
| Check-in / Check-out | `door`, `door-open` |
| Arrival / Departure letter | `envelope-open`, `envelope-simple` |
| Cleaning services | `spray-bottle` |
| Departure cleaning | `basket` |
| Janitor / Maintenance | `wrench`, `handyman` |
| Gym | `barbell` |
| Shower | `shower` (or `drop`) |
| Restroom | `person`, `person-simple`, `toilet` |
| Room | `bed`, `king-bed` |
| Market | `storefront`, `basket` |
| Bus | `van`, `bus` |
| Rooms (admin) | `door` |
| Guests | `users` |
| Cost / Invoice | `coins`, `receipt` |
| Contract | `file-text` |
| Security | `shield`, `shield-check`, `shield-checkered` |
| 24/7 support | `headset` |
| Guest information | `info` |
| Guest lounge | `armchair`, `weekend` |
| Communication | `clipboard-text` |

### Emoji & unicode
**No emoji.** The arrow glyph `→` is permitted as a directional marker and
appears in display copy and wayfinding signage. The bullet `•` is fine in
running text but prefer Phosphor `ph-circle-fill` at scale.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `colors_and_type.css` | Design tokens — colors, typography, spacing, radius, motion. Import this. |
| `fonts/` | Funnel Display (5 weights) + Inter Tight (4 weights) TTFs + `fonts.css`. |
| `assets/logos/` | Logos in 9 color variants × multiple lockups (symbol, wordmark, horizontal, vertical, Strawberry byline). |
| `assets/imagery/` | Brand atmosphere photography. |
| `preview/` | Design-system tab cards (Type, Colors, Spacing, Components, Brand). |
| `ui_kits/website/` | Marketing site UI kit (React/JSX). Components are exported on the bundle namespace — see below. |
| `ui_kits/app/` | Resident "Portal" app UI kit. Components are exported on the bundle namespace — see below. |
| `slides/` | Sample brandbook-style 16:9 slides. |
| `SKILL.md` | Agent Skill manifest — load this folder as a Claude Code skill. |
| `README.md` | This file. |

---

## How to use these tokens

```html
<link rel="stylesheet" href="/colors_and_type.css" />
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css" />

<h1>Lynra builds villages that make temporary life work really well</h1>
<p class="intro">A world beyond function for the workforce of tomorrow.</p>
<button class="ember-btn">Book a viewing →</button>
```

Use semantic vars (`--bg`, `--fg`, `--bg-accent`) where possible. Reach for
raw palette tokens (`--lynra-red-ember`) only when building brand-specific
moments. **Never invent colors.**

---

## Components (UI kits)

The website and app UI kits are compiled into the design-system bundle and
exposed on `window.LynraDesignSystem_019e30`. To use a component, load the
bundle (after React) and destructure it:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="/_ds_bundle.js"></script>
<script type="text/babel">
  const { Hero, VillageCard } = window.LynraDesignSystem_019e30;
  // render <Hero/>, <VillageCard .../> etc.
</script>
```

| Kit | Components |
|---|---|
| `ui_kits/website/` | `MetaStrip`, `SiteHeader`, `Hero`, `ValueProps`, `BentoOverview`, `VillageCard`, `QuoteBlock`, `SiteFooter` |
| `ui_kits/app/` | `StatusBar`, `TabBar`, `DotField`, `CheckInScreen`, `DashboardScreen`, `ServiceScreen`, `VillageScreen` |

Each component has a `.d.ts` describing its props. The kit `index.html` files
are runnable demos that compose these components from the bundle. Component
source styling relies on the classes/tokens defined in each kit's `index.html`
and `colors_and_type.css`.

---

> **Note on kit coverage:** all 15 components above predate the mounted
> `Affärsflöde.fig` (a presentation file whose only families are `Symbol`,
> `GOOGLE SLIDES HEADER` and `Pres header`). They were built from the
> original *LYNRA - PROCESS - HUGOS KOPIA* brand kit and are intentional
> parts of this design system — do not rename them to match `Affärsflöde.fig`.

## Caveats & gaps

- **Times Now** (used for editorial quotes) is licensed and not in the
  font archive. Fallback used throughout: **Frank Ruhl Libre** (Google).
- **BPdots** and **Braile font** (each used ~10 times in Figma decorative
  context) are not provided — they are not part of the production type
  system and are safe to ignore.
- Only horizontal lockups in 9 colors were imported; vertical lockups in
  Umber/Clay/Granite/Aluminium/Haze were not pulled to save space — copy
  from `uploads/` if you need them.
- The Phosphor brandbook icon set names are educated guesses based on the
  meanings in the Figma; verify against `https://phosphoricons.com` before
  finalizing.
