# Lynra Design System — Rules

Normative rules for anyone (people or AI agents) producing Lynra material. **MUST** and **MUST NOT** are hard rules. **SHOULD** is the default unless there is a stated reason to deviate. Rationale and examples live in [`brand-guidelines.md`](brand-guidelines.md).

---

## 1. Tokens

1.1 All colour, type, spacing, radius, shadow and motion values **MUST** come from `colors_and_type.css`. Reference the CSS variable, not the hex.
1.2 Components **SHOULD** use semantic tokens (`--bg`, `--fg`, `--border`, `--bg-accent`) and reach for raw palette tokens (`--lynra-red-ember`) only for brand moments.
1.3 New values **MUST NOT** be invented inline. If a value is missing, add it to `colors_and_type.css` first (see CONTRIBUTING.md), then regenerate `tokens/tokens.json`.
1.4 `colors_and_type.css` is the source of truth. `tokens/tokens.json` is generated and **MUST NOT** be edited by hand.

## 2. Colour

2.1 The palette is grayscale plus one accent: **Red Ember** `#FF4D4F`. No other colours **MAY** be used.
2.2 A surface **SHOULD** use at most two colours for the majority of its content; additional colours only as small accents.
2.3 Default page background is **Ash** `#F6F4F4`. Pure **White** is for elevated surfaces (cards, sheets, app foreground).
2.4 Default text is **Obsidian** `#242428`. Secondary text is **Haze** `#999999` — only on Ash/White and never for body copy below 14 px.
2.5 Text on Red Ember **MUST** be **Umber** `#4D0B00`, not white.
2.6 Sanctioned pairings: Umber fill + Red Ember text (visionary content); Clay + photography; Ash + Obsidian/Aluminium/Haze/White (everyday).
2.7 Red Ember **SHOULD** appear once per view as the single call to action or focal point.
2.8 Dark mode is not part of the system. Inverted surfaces use Obsidian with Ash text.
2.9 Text contrast **MUST** meet WCAG AA (4.5:1 body, 3:1 display ≥ 24 px).

## 3. Typography

3.1 Display and headlines **MUST** use **Funnel Display** — Medium 500 by default; SemiBold 600 / Bold 700 for emphasis only.
3.2 Everything else **MUST** use **Inter Tight** — Medium 500 for body, SemiBold 600 for intros, subheadings and UI titles.
3.3 Editorial quotes use **Times Now SemiLight Italic** (licensed); fallback **Frank Ruhl Libre** Light Italic.
3.4 No other typefaces **MAY** be used — no system sans-serif and no monospace, in interfaces, specimens or code samples alike.
3.5 Display tracking is `-0.04em`; mid-size display `-0.015em`; Inter SemiBold subheadings `-0.01em`.
3.6 Sizes **MUST** come from the scale (base 16, ratio ≈ 1.618): 12 / 14 / 16 / 18 / 21 / 26 / 42 / 68 / 90 / 110 / 177 px.
3.7 **Sentence case** everywhere — headlines, buttons, navigation, subheadings, labels, the meta strip.
3.8 ALL CAPS **MUST NOT** be used anywhere, and small labels **MUST NOT** be letter-spaced. The meta strip is the deck's Pres header: 15 px Inter Tight Medium, −1 % tracking, sentence case.
3.9 Display headlines **MUST NOT** end with punctuation.
3.10 Body line-height 1.35; display 0.98–1.1. Use `text-wrap: balance` on headings and `pretty` on paragraphs.
3.11 Minimum sizes: 16 px body on web; 21 px on 1920×1080 slides (26 px for anything a room must read from a distance); 12 pt in print.

## 4. Spacing & layout

4.1 Spacing **MUST** follow the 8 px rule: 8 / 16 / 24 / 32 / 40 / 64 / 80 / 120.
4.2 Deck canvas is 1920×1080 with 80 px margins and a 52 px header, on a 12-column grid — 110 px columns, 40 px gutters, column *k* starting at 80 + 150(*k* − 1) — so the right column is column 7 (x = 980), a text measure five columns (710 px) and a card 271 px with 24 px gaps. The templates in `slides/` are laid out on this canvas and shown at 1280×720.
4.3 Web containers max out at 1280–1440 px.
4.4 **Peg-board principle:** every element sits in a defined slot on the column grid. Nothing free-floats.
4.5 Use `flex`/`grid` with `gap` for sibling groups, not per-element margins.
4.6 The **Bento** layout (asymmetric tiles, 10–16 px radii, 16 px gaps) is for branded overviews only — not for dense content screens.

## 5. Shape, elevation, surfaces

5.1 Corners are **always rounded**. Default card radius 10 px; panels 16–40 px; pills fully rounded. Sharp corners **MUST NOT** be used.
5.2 Borders and dividers are 1 px **Aluminium**.
5.3 Shadows: `--shadow-1` raised UI, `--shadow-2` floating menus, `--shadow-3` modals only. Nothing else gets a shadow.
5.4 Gradients **MUST NOT** be used as decoration. No glow, no neon, no rainbow.
5.5 Blur/translucency only on sticky headers over imagery and bento photo captions.

## 6. Logo

6.1 Use the supplied SVGs in `assets/logos/`. **MUST NOT** redraw, retype or trace the logo.
6.2 **MUST NOT**: add a drop shadow, squash or change proportions, mix logo colours, use non-brand colours, fill with an image, use at low resolution, or crowd it — keep clear space at least the height of the symbol.
6.3 Pick the colour variant for contrast: Obsidian on light surfaces, Ash/White on dark, Umber on Red Ember.
6.4 **No verbal lockups.** Write "Polaris Village" or "Lynra" — never "Lynra Polaris" or "Polaris Village by Lynra".
6.5 On site, the village logo is primary; the Lynra symbol sits underneath as a quiet marker.
6.6 The Strawberry byline lockup is for executive and employer-brand contexts only.

## 7. Iconography

7.1 Icons **MUST** come from **Phosphor Icons** (`@phosphor-icons/web@2.1.1`). No hand-drawn SVG icons, no other libraries.
7.2 Weight: **light** on web and app; **thin** in presentations.
7.3 Sizes: 24 px inline, 28 px buttons, 56 px presentations and feature cards.
7.4 Icons take the text colour of their context, or Red Ember as a single accent.
7.5 **No emoji.** The arrow `→` is permitted as a directional marker.

## 8. Imagery

8.1 Documentary, warm-desaturated, slightly cool daylight; raw materials, cardboard, concrete, plywood.
8.2 **MUST NOT** use glossy stock, posed models looking at camera, or AI-generated people.
8.3 Photos sit on Clay or Obsidian when they need to pop; always with a rounded container.

## 9. Motion

9.1 Ease `cubic-bezier(0.2, 0, 0, 1)`; durations 120 / 200 / 400 ms.
9.2 **MUST NOT** use spring/bounce, parallax, or animations longer than 600 ms.
9.3 One signature motif: the animated dotted progress path, used sparingly.
9.4 Respect `prefers-reduced-motion`.

## 10. Interaction states

10.1 Hover on neutrals: one tone darker (Ash → Aluminium → Clay). Never opacity-only.
10.2 Hover on accent: Red Ember → Umber, or invert.
10.3 Press: scale 0.96, 100 ms.
10.4 Focus: 2 px Obsidian ring, 2 px offset, on every interactive element.
10.5 Disabled: 40 % opacity, no pointer events.
10.6 Touch targets ≥ 44×44 px.

## 11. Voice & copy

11.1 Clear, intentional, grounded, human-not-emotional, subtly futuristic.
11.2 Simple words, direct sentences. No metaphors, hype, motivational tone or hospitality clichés.
11.3 On-brand vocabulary: calibrated, aligned, steady, configured. Off-brand: cozy, vibes, awesome, amazing.
11.4 **You** addresses the resident; **we** speaks for Lynra. Never **I**.
11.5 No exclamation marks except rare functional warnings.
11.6 Place names use the colon namespace: `Polaris: Market`, `Polaris: Reception`.
11.7 Supplied copy **MUST** be used verbatim; format it, don't rewrite it.

## 12. Code & accessibility

12.1 Link `styles.css`; don't copy token values into component files.
12.2 Set `lang` on `<html>` (`en`, `sv`, `nb`) so hyphenation and screen readers work.
12.3 Every image has `alt` text; decorative images use `alt=""`.
12.4 Layouts **MUST** reflow down to 320 px width with no horizontal scroll (except fixed-format outputs: decks, print, signage).
12.5 Print documents (A3/A4/A5 signage, house rules, schedules) use fixed page boxes and 12 pt minimum text.

## 13. Presentations

13.1 Three formats, one grid (4.2): the **brandbook** deck (Ash canvas, meta strip, title-left / content-right pages — `slides/Slide*.html`), the **keynote** (spoken over in a room — `slides/Keynote*.html`) and the **sendout** (read alone on a screen — `slides/Sendout*.html`).
13.2 Keynote: one thought per slide on full-bleed photography with a quiet Obsidian scrim; white type only — a 26 px label over one 90 px line, the block on column 4 or column 1, ending 160 px above the foot; no meta strip, no page numbers; diagrams as white cards on the dot grid with Red Ember for the one result and Granite for commitments.
13.3 Sendout: Aluminium canvas with the meta strip on every page (page name at the margin, then partner, Lynra, date, Confidential); titles at 110 px in Obsidian at y = 160; running text at 21 px / 1.35 in five-column measures from y = 320, about 1,400 characters a column — more text is another page, never smaller type; one photograph at most, at 80 % over Aluminium on the cover; nothing white on Aluminium.
13.4 Statements are Funnel Display Medium 90 px; document titles 110 px; labels and card heads 26 px Inter Tight; figures in data visualisation Inter Tight Regular 84 px; quotes in the quote face, never Funnel Display.
