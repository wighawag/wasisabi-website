# branding

Regenerate everything with `pnpm branding` from the repo root.

| File | Kind | Made by |
|---|---|---|
| `build.mjs` | authored | |
| `card.html` | authored | |
| `card.mjs` | authored | |
| `enso.svg`, `icon.svg` | generated | `build.mjs` |
| `web/static/enso.svg`, `web/static/icon.png` | generated | `build.mjs` |
| `web/static/pwa/*` | generated, gitignored | `pwag`, from `icon.png` |
| `web/static/preview.jpg` | generated | `card.mjs`, from `card.html` |

Drift check: `node branding/build.mjs && git diff --exit-code branding web/static/enso.svg web/static/icon.png`. The build is deterministic (seeded PRNG, PNG written without timestamps), and a one-degree change to the sweep has been checked to change every output.

## Decisions that are easy to undo by mistake

- **The mark is an ensō** because the default wallpaper is one: the Zen brush circle, drawn in one breath and left imperfect, which is the wabi-sabi idea the name puns on.
- **The stroke is several parallel strands**, touching for most of the circle and parting in the last quarter: a dry brush. At 16px they merge into one band, so the favicon needs no separate simplified geometry. Do not add detail that only survives at 256.
- **The icon has no seal.** A vermilion hanko was tried in the circle's gap: it sat on the stroke at 256 and became a smudge at 32. The vermilion (`seal` in `app.css`) is kept for the site's call to action only, one meaning.
- **The card is a JPEG.** The wallpaper's grain defeats PNG compression (1.26 MB, and palette reduction saved nothing), and the service worker precaches every static file. `Head.svelte` points `og:image` at `preview.jpg` for that reason.

## Known gaps

- The mark is provisional: one direction, not the three-direction exploration a full identity would get.
- The wordmark is live text in the card (the Fraunces font from `@fontsource`), not outlines.
