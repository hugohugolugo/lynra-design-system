# Changelog

All notable changes to this project are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: [SemVer](https://semver.org/).

## [Unreleased]

### Added
- Slide templates rebuilt from the brandbook Figma frames on the 1920×1080 canvas (`slides/Slide*.html`: title, index, section opener, content, columns, cards, stat, Bento, quote, wayfinding, colours, two tiles).
- Keynote and sendout presentation formats derived from the Figma speaking and sendout decks (`slides/Keynote*.html`, `slides/Sendout*.html`), with their rules in RULES.md §13.
- Imagery: `village-dusk.jpg`, `room-render.jpg`, `freight-train.jpg`, `pine-forest.jpg`, `site-works.jpg`, `jacket-view.jpg` from the Figma files (re-encoded JPEG).

### Changed
- Sentence case everywhere: uppercase, letter-spaced labels removed from every component, kit stylesheet and specimen card; the meta strip is the deck's Pres header (15px Inter Tight Medium); the section label is the site's white pill (RULES 3.7–3.8).
- `BentoOverview` rebuilt after the brandbook's Bento layout: one statement tile with peg dots, a quote card and a photo tile; no stats tile, no gradient dots.
- Three typefaces only: `--font-mono` removed from `colors_and_type.css` and `tokens/tokens.json`; the specimen cards' annotations set in Inter Tight.
- `_ds_bundle.js` rebuilt from the 15 `ui_kits/` sources only — the previous build also carried code from unrelated projects.
- Minimum type size on slides is 21px (RULES 3.11); the deck grid is stated as 12 columns (RULES 4.2).

### Fixed
- Every logo SVG had lost its fill (empty `<defs>`), so all colour variants rendered black; each variant's palette colour is now a root `fill`.

## [1.0.0] — 2026-09-24

### Added
- Tokens: 9 brand colours, semantic colours, type scale, spacing, radius, shadow, motion (`colors_and_type.css`, `tokens/tokens.json`).
- Fonts: Funnel Display (Light–Bold), Inter Tight (Regular–Bold).
- Logos: symbol, wordmark, horizontal and vertical lockups, Strawberry byline in brand colour variants.
- Website UI kit: MetaStrip, SiteHeader, Hero, ValueProps, BentoOverview, VillageCard, QuoteBlock, SiteFooter.
- App UI kit: StatusBar, TabBar, DotField, CheckInScreen, DashboardScreen, ServiceScreen, VillageScreen.
- Slide templates: Title, Section opener, Content, Bento, Big quote, Stat, Wayfinding.
- Specimen cards in `preview/`.
- Documentation: RULES.md, brand guidelines, agent instructions, SKILL.md.
