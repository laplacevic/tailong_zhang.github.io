# DESIGN.md — tailongzhang.github.io

## Direction

Editorial/Swiss, light. Typography-driven: large serif display headings,
restrained grotesque body, strict grid, generous whitespace. One
decorative motif only: a transmission-spectrum curve (transit depth vs
wavelength), drawn as a fine line, used in the hero and nowhere louder.

Theme scene: a researcher opens the site on a laptop in a bright office
or conference hall, daylight on the screen. Light theme, paper-warm.
A faint fixed noise overlay (multiply, ~5%) gives the paper physical
grain; plot areas in the two figures sit on a light graph-paper grid.

## Color

Strategy: Restrained. Tinted warm neutrals + one accent under 10% of
the surface.

- `--paper`: oklch(97.5% 0.008 85) warm off-white, like uncoated stock
- `--paper-deep`: oklch(94.5% 0.012 85) section alternation, footer
- `--ink`: oklch(22% 0.012 60) warm near-black, all body text
- `--ink-muted`: oklch(45% 0.015 60) secondary text, captions
- `--accent`: oklch(55% 0.16 40) burnt vermilion; links, the spectrum
  curve's absorption-feature markers, active states
- `--rule`: oklch(85% 0.01 85) hairline rules and borders

No #000, no #fff, no gradients as decoration.

## Typography

Voice words: careful, printed, luminous. Physical object: a mid-century
scientific monograph page with a hand-annotated figure.

- Display: Spectral (serif; the name is the register reason for a
  transmission-spectroscopy researcher). Hero name, section headings,
  italic for emphasis.
- Body: Schibsted Grotesk. Paragraphs, navigation, UI.
- Annotation: Spline Sans Mono. Used strictly as figure annotation
  (wavelength ticks, molecule labels, dates, section numbers), echoing
  matplotlib axis conventions, not as tech costume.
- Structural conceit: the whole page reads as one annotated scientific
  figure; sections are numbered like figure panels.
- Scale ratio >= 1.3 between steps. Hero name is oversized
  (clamp to ~8vw). Body capped at 68ch.

## Layout

- 12-col grid, max-width ~1100px, asymmetric placement: text blocks sit
  off-center, headings can hang into the left margin.
- Section numbers in mono gutter (01 About, 02 Research ...) as the
  navigation anchor language.
- Hairline horizontal rules separate sections, Swiss-style; no cards.
- Talks/News is a timeline list with mono dates, not cards.

## Motion

Restrained budget, all ease-out-quart/expo. (Owner decision 2026-07:
reduced-motion gating removed; motion always plays.)

- Page load: hero name rises in staggered lines; spectrum curve draws
  itself once (SVG stroke-dashoffset), absorption features tick in last.
- Hero spectrum is interactive on fine pointers: a dashed crosshair with
  a mono wavelength readout (and nearest-molecule label) follows the
  cursor, matplotlib-style. No motion cost when idle.
- Fig. 2 (Research): transit schematic. A planet crosses the stellar
  disk while the light curve draws in sync; plays once on scroll into
  view, click to replay. Still nothing loops.
- Scroll: sections fade-and-rise once via IntersectionObserver
  (threshold ~0.2), never re-trigger; section hairline rules draw in
  from the left the first time a panel enters view.
- Hover: links get an underline that thickens from the baseline; nav
  numbers slide; no scale transforms on text.
- Nothing loops, nothing parallaxes.

## Components

- Spectrum motif: inline SVG, single path, ~2px stroke in --ink, with
  3-4 absorption dips; small mono labels (e.g. "SO2", "H2S") in
  --accent near the dips.
- Transit motif (Fig. 2): star disk + planet + synchronized light
  curve, same annotated-figure language.
- Formation motif (Fig. 3): protoplanetary disc on a log distance axis
  with H2O/CO ice lines; a planet grows beyond the ice lines and
  migrates inward, synced with a drawing trail. Same play-once /
  click-replay mechanics as Fig. 2.
- Fig. 1 spans 0.6-14 um (JWST NIRISS through MIRI LRS) on a log
  wavelength axis: Rayleigh slope, H2O 1.4/1.9/2.7, CH4 3.3, H2S 3.8,
  CO2 4.3, SO2 7.3, NH3 10.5, HCN toward 14. The three numbered figures
  are the illustration budget; nothing louder.
- Photo: rectangular, no rounded avatar circle; sits on the grid like
  an editorial portrait, small caption in mono.
- Footer: colophon line ("Set in Spectral & Schibsted Grotesk. Built with Astro.")
