# Contributing

## Principles

Change the system, not the instance. If a design needs a value the system lacks, propose a token, don't hardcode it. Every addition must earn its place — the system is deliberately small.

## Workflow

1. Branch from `main`: `feat/<thing>`, `fix/<thing>`, `docs/<thing>`.
2. Make the change (see below).
3. Open the relevant `preview/*.html` card or `ui_kits/*/index.html` demo and check it renders.
4. Add an entry to `CHANGELOG.md` under *Unreleased*.
5. Open a pull request. Brand-level changes (colour, type, logo) need sign-off from brand management.

## Changing tokens

1. Edit `colors_and_type.css` (`:root` block). Follow existing naming: `--lynra-*` palette, semantic `--bg-*`/`--fg-*`, `--fs-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--ease-*`, `--dur-*`.
2. Run `npm run tokens` to regenerate `tokens/tokens.json`.
3. Update the matching `preview/` card and the tables in `README.md` / `docs/brand-guidelines.md`.

## Adding a component

1. Place `<Name>.jsx` and `<Name>.d.ts` (PascalCase) in the right kit folder.
2. Style with tokens only; reference logos via relative paths into `assets/logos/`.
3. Export the component and add it to the kit `index.html` demo and the kit `README.md`.
4. Rebuild `_ds_bundle.js` so the component appears on `window.LynraDesignSystem_019e30`.

## Adding a logo or image

- Logos: SVG only, from the official source files. Name `lynra-<lockup>-<colour>.svg`.
- Imagery: follow RULES.md §8. Compress to ≤ 500 KB; JPEG for photos.

## Commit messages

Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `tokens:`.

## Versioning

Semantic versioning. Token removals or renames are **major**; new tokens/components **minor**; fixes **patch**.
