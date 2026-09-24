# Lynra — Website UI Kit

A React/JSX recreation of Lynra's marketing site, derived from the brandbook's
"Visual identity" chapter and the Website / Bento layout / Visual toolbox pages.

## Components

| File | Purpose |
|---|---|
| `MetaStrip.jsx` | 52px brand meta strip (Brand ID · Lynra · 2026 · Public · section · chapter). The signature deck header, lifted into the site as a quiet wayfinding marker. |
| `SiteHeader.jsx` | Logo + nav + CTA pill. Sticky, transparent on the Ash background. |
| `Hero.jsx` | Full-bleed two-up: display title left, atmosphere photo right with caption overlay. |
| `ValueProps.jsx` | Four numbered cards from "Value proposition" — `01` Red Ember, body grayscale. |
| `BentoOverview.jsx` | The signature Bento layout (large Ember tile + stats + Granite quote + photo). |
| `VillageCard.jsx` | Reusable card for villages — letter mark, status pill, location + rooms. |
| `QuoteBlock.jsx` | Full-bleed brand-promise statement on Obsidian. |
| `SiteFooter.jsx` | Aluminium footer with wordmark + 3-col link grid. |
| `app.jsx` | Composed page, nav state. |

## Index of patterns this kit covers

- **Bento layout** — see `BentoOverview` (the brandbook's preferred multi-panel composition).
- **Number-led value props** — see `ValueProps` (uses Red Ember for the numerals).
- **Photo overlay caption** — see `Hero` and the photo tile inside `BentoOverview`.
- **Tone-on-tone giant letterform** — see `VillageCard` (the village initial fills the card).
- **Branded promise statement** — see `QuoteBlock`.
- **Meta strip wayfinding** — see `MetaStrip`.

## Caveats

- The brandbook Website page (Figma p.40) was a wireframe of a Webflow draft
  (`village-test.webflow.io`) — no live site to reference. Components here are
  designed by composing brand patterns from the rest of the system.
- Photography is supplied atmosphere — replace with hero photography when
  approved imagery exists.
- Copy is largely from the brandbook (Vision, Brand's promise, Value proposition).
