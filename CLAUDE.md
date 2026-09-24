# Instructions for AI agents

This repository is the Lynra Design System. Before producing any design or code:

1. Read `docs/RULES.md` — every rule there is binding.
2. Read `docs/brand-guidelines.md` for voice, examples and rationale.
3. Use tokens from `colors_and_type.css` via CSS variables. Never hardcode hex values or invent new ones.
4. Start from existing material: `slides/` for decks, `ui_kits/website/` for web, `ui_kits/app/` for the Portal app, `preview/` for rendered specimens.
5. Copy logos from `assets/logos/` — never redraw them. Icons come from Phosphor (light on web, thin in decks). No emoji.

## Working in this repo

- `colors_and_type.css` is the token source of truth. After changing it, regenerate `tokens/tokens.json` (`npm run tokens`).
- Components live as `<Name>.jsx` + `<Name>.d.ts` pairs. Keep the `.d.ts` in sync with props.
- `_ds_bundle.js` is a build artefact exposing components on `window.LynraDesignSystem_019e30`, built from the 15 `ui_kits/` sources only. Don't hand-edit it.
- Sentence case everywhere: never uppercase a label or track it out, never set text below 21px on a slide, never use a typeface beyond the three in the brandbook.
- Decks start from `slides/`: `Slide*` for brandbook-style pages, `Keynote*` for a spoken presentation (photography, one statement a slide), `Sendout*` for a document to be read alone (Aluminium, 21px text). All sit on the 12-column grid in RULES.md §4.2.
- The 15 components (`Hero`, `MetaStrip`, `SiteHeader`, `ValueProps`, `BentoOverview`, `VillageCard`, `QuoteBlock`, `SiteFooter`, `StatusBar`, `TabBar`, `DotField`, `CheckInScreen`, `DashboardScreen`, `ServiceScreen`, `VillageScreen`) are intentional and named after the original Lynra brand kit. Do not rename them.
- Keep supplied copy verbatim.
