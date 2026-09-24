# Lynra Portal — App UI Kit

A resident-facing companion app for life inside a Lynra village.
The canonical screen is the brandbook's **"Your check-in is complete. The
village is ready for you."** confirmation — the rest of the kit extends
that vocabulary into a small daily-use surface.

## Screens (interactive)

The prototype starts on Check-in. Tapping "Open dashboard" reveals the bottom
tab bar — Portal, Village, Services, Account.

| File | Purpose |
|---|---|
| `CheckInScreen.jsx` | Brandbook canonical screen: marker-dot field over Ash, Umber display + Red Ember check, primary action pill. |
| `DashboardScreen.jsx` | Greeting, stay-summary card (Red Ember), quick actions, open tickets, this-week activities. |
| `ServiceScreen.jsx` | Service grid (cleaning, maintenance, laundry, security, support, lounge, shuttle) + canonical maintenance confirmation message. |
| `VillageScreen.jsx` | "Gym" tone-on-tone tile, amenity grid, wayfinding list (→ Polaris: Market). |
| `StatusBar.jsx` | iOS-style status bar (9:41 etc). |
| `TabBar.jsx` | Obsidian pill tab bar floating above content. |
| `DotField.jsx` | Pink marker-dot decoration used on hero/check-in surfaces. |
| `app.jsx` | Composed prototype + simple navigation state. |

## Patterns this kit covers

- **Brandbook copy verbatim** — "Your check-in is complete. The village is
  ready for you." / "Your request is logged and scheduled. We will update
  you when the issue is resolved."
- **Marker-dot field** as a decorative background on hero surfaces.
- **Tone-on-tone display word** (e.g. "Gym" on Red Ember).
- **Wayfinding list** with `→` arrows and place-name colon syntax
  ("Polaris: Market").
- **Phosphor Light** icons throughout, at 22–24px.
- **Two-line stat tiles** — display number + small caption.

## Caveats

- The only canonical app screen in the brandbook is the check-in
  confirmation (Figma p.41). Dashboard, Services, Village and Account
  screens here are designed by composing brand patterns — they are
  faithful in vocabulary but not lifted from a real product.
- iOS-style chrome is approximate (no real-device frame).
