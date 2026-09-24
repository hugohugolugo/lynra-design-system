---
name: lynra-design
description: Use this skill to generate well-branded interfaces and assets for Lynra, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Lynra builds villages for the workforce of tomorrow — a Strawberry Living company. Visual language is Scandinavian / peg-board / quietly futuristic.
user-invocable: true
---

# Lynra Design Skill

Read `docs/RULES.md` first (binding rules), then `docs/brand-guidelines.md`
— brand purpose, content fundamentals, visual foundations, iconography.
`README.md` indexes every other file.

After that, explore:

- `colors_and_type.css` — design tokens (colors, type, spacing, radii, motion).
  Import this from any HTML artifact.
- `fonts/` — Funnel Display + Inter Tight TTFs with `fonts.css` `@font-face`
  declarations.
- `assets/logos/` — every logo lockup × color variant.
- `assets/imagery/` — atmosphere photography.
- `preview/` — design-system cards. Browse if you need to see how a token
  looks rendered.
- `ui_kits/website/` — marketing site components.
- `ui_kits/app/` — resident "Portal" app components (canonical check-in
  screen + dashboard + services + village + account).
- `slides/` — 21 slide templates: brandbook pages, keynote and sendout formats.

## When the user invokes this skill

If they give you a clear task, do it.

If not, ask:
1. What are you building? (slide, app screen, marketing page, asset,
   production code)
2. Which surface? (deck / website / app)
3. Audience? (resident, operator, investor)
4. Any photography or content to include?

Then act as a senior Lynra designer.

## Hard rules

- **Color**: grayscale + one accent (Red Ember). Max 2 colors per surface
  for the majority of content. Never invent colors.
- **Type**: Funnel Display for display (Medium 500 default; SemiBold 600 /
  Bold 700 for emphasis). Inter Tight for everything else (Medium 500 for
  body, SemiBold 600 for intro / UI titles).
- **Headlines have no punctuation.** Sentence case everywhere — no ALL CAPS
  and no letter-spaced small labels, not even in a meta strip.
- **No emoji.** Use Phosphor icons (`light` weight on web, `thin` weight in
  decks).
- **Always rounded** — never sharp. Default card radius 10px.
- **No verbal lockups.** Write "Polaris Village" or "Lynra" — never
  "Lynra Polaris" or "Polaris Village by Lynra".
- **Place names** use the colon namespace: "Polaris: Market",
  "Polaris: Reception".
- **No emoji, no dropshadow on the logo, no rainbow gradients, no glow.**

## Tone of voice

Clear, intentional, grounded, human-not-emotional, subtly futuristic.
Words like "calibrated", "aligned", "steady", "configured" are on-brand.
"Cozy", "vibes", "awesome", "amazing" are not.

## Default starting points

- **A slide** → brandbook style: `slides/SlideContent.html`, `SlideColumns`,
  `SlideCards` or `SlideSectionOpener`; a spoken keynote: `slides/KeynoteTitle.html`
  and `KeynoteStatement` (photography, one statement a slide, no meta strip);
  a deck to be read alone: `slides/SendoutCover.html`, `SendoutText`,
  `SendoutColumns` (Aluminium, 21px text, meta strip). All are the 1920×1080
  canvas on the 12-column grid, shown at 1280×720.
- **A marketing page** → start from `ui_kits/website/index.html`.
- **An app screen** → start from `ui_kits/app/CheckInScreen.jsx` or
  `DashboardScreen.jsx`. 390×844 phone canvas.
- **A throwaway asset** → import `colors_and_type.css` and write the
  artifact against the tokens.

## When producing visual artifacts

Copy assets into the destination (don't link cross-project).
Write static HTML or HTML+JSX that uses the tokens.
Never hand-roll SVG for icons — use Phosphor via CDN.
