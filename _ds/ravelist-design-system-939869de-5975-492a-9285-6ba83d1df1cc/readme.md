# Ravelist — Design System

**Ravelist** (ravelist.app) is a social, experience-rating mobile app. You rate **what you experienced** — a dish, a film, a concert, a hotel stay, a product — **not the venue or brand that delivered it**. The core loop is a TikTok-style infinite-scroll feed of single experiences, each carried by a big photo, a mood, and the person who rated it. The personality is **bold social energy: warm, approachable, punchy** — never clinical, never a star-rating spreadsheet.

> **Sources.** This system is built from Ravelist's written brand spec plus a validated set of hi-fi screens (light + dark) for the three core surfaces. There is no external codebase or Figma — Ravelist is an original brand defined here. The reference screens live in `Ravelist Screens.dc.html` at the project root; the chosen feed direction is **Layout A · Immersive**.

---

## Content fundamentals

**Voice** — enthusiastic, first-person, conversational. Copy reads like a friend telling you about the best thing they ate/saw/heard this week. Warm and specific, never corporate.

**The experience comes first, the venue second.** Titles name the *thing*: "Uni toast, extra caviar" — and the place is demoted to a subtitle ("Kotobuki · Lisbon"). Never lead with the restaurant/cinema/hotel name.

**Casing**
- **Mood words are always lowercase** and **never numeric**: `terrible · disappointing · meh · good · great · mind-blowing · life-changing`. No stars, no "9/10".
- Experience titles are **sentence case** ("Sunrise over Hallstatt").
- Micro-labels / eyebrows are **UPPERCASE, tracked out** ("HOW 38 OTHERS FELT", "YOUR TAKE").
- Handles are **lowercase, dotted**: `@marco.eats`, `@nadia.k`, `@sofia.wander`.

**Person** — speaks *to* and *about* people: "rated this", "Rate this too", "How others felt". The take itself is written in first person by the rater.

**Numbers** — fine for *people / engagement* counts (412 likes, "38 others"), never for the rating itself. The rating is always a mood word.

**Emoji** — **none.** Energy comes from color, scale, and photography, not emoji.

**Vibe examples** — "the room completely lost it", "worth the whole trip on its own", "still thinking about it days later". Punchy, sensory, earned superlatives.

---

## Visual foundations

**Type** — **Inter, weights 400 and 500 only**, minimum **11px**. Impact comes from *size*, not heavy weights — hero titles run 25–30px at weight 500 with tight tracking (−0.02 to −0.025em). No italics, no other families.

**Color** — Ravelist Purple (`#534AB7`) is the single brand accent: primary buttons, the active tab, the Log FAB, the `life-changing` mood. Light purple (`#EEEDFE`) and dark purple (`#3C3489`) are its fills/text. Seven **category colors** (Food, Film, Travel, Music, Books, Products, Other) each carry a **50 (light) and 900 (dark) stop** for chips — light fill + dark text in light mode, dark fill + light text in dark mode.

**Dark mode is warm, not cold.** Background is `#1A1918` (warm near-black), secondary surface `#2C2C2A` — never pure `#000`. Light mode background is `#FFFFFF`, secondary surface `#F1EFE8` (warm sand). Every screen is designed in both.

**Mood pills** — the signature element. Seven levels as pills, lowercase, never numeric. **`life-changing` is the only inverted pill** (purple `#534AB7` fill, light `#EEEDFE` text); all six others use a light purple fill with dark purple text in both modes. On the Log composer the selected mood gets a 2px purple ring + soft halo.

**Imagery — photo-forward and full-bleed.** The feed (Layout A) is edge-to-edge photo/video with content overlaid; the detail view leads with a 300px hero. Gradients appear **only** as photo stand-ins and as **protection scrims** (top + bottom) for legibility over imagery — never as decorative backgrounds. Stand-in placeholders are a diagonal two-tone gradient in the experience's category color with a faint diagonal texture; replace with real media.

**Chrome over photos** — circular **glass** action buttons (`rgba(255,255,255,.16)` + blur) on a right-hand rail; the Feed/Discover toggle floats in a translucent dark capsule. Solid chrome (status bar, tab bar) grounds the top and bottom.

**Cards** — `12px` radius, `16px` padding, very subtle shadow (`0 1px 3px rgba(0,0,0,.06)`). Chips, buttons, mood pills, toggles are all **pill-shaped, `20px` radius**. Avatars and circular action buttons are fully round.

**Buttons** — three kinds, all pill (20px): **primary** = purple fill / white text; **secondary** = transparent + 0.5px border; **ghost** = no border, purple text.

**Spacing** — 4px base unit. Screen margins 16px, card padding 16px, card-to-card gap 14px.

**Tab bar** — 56px tall: **Feed · Map · (Log) · Profile**, with **Log raised dead-centre** as a circular purple FAB. Active tab is purple. **Discover is a toggle inside the Feed header, not its own tab.** All feed-card actions (heart, bookmark, share, category tag) are **always visible — no hidden menus**.

**Motion** — snap-scroll one experience at a time in the feed; heart/bookmark tap feedback; restrained. No bouncy or showy easing.

**Press / hover** — buttons darken toward `--rl-primary-press` (`#3C3489`); glass buttons brighten slightly; pills can scale subtly on press. Keep it quick and tactile.

---

## Iconography

Ravelist uses a **single-weight line icon set** — ~1.8px stroke, rounded caps and joins, 22–24px on a 24px grid — with **filled variants for active/engaged states** (a liked heart fills `#FF4D6D`; a saved bookmark fills solid). No emoji, no multicolor icons.

> **Substitution flagged:** Ravelist has no proprietary icon library yet. This system standardizes on **[Lucide](https://lucide.dev)** (CDN) as the line set — its stroke weight, rounded joins, and geometry match the reference screens (heart, bookmark, share, map-pin, user, layout-grid, plus, search, camera, x, chevron-left). Components reference Lucide names. **If you have a bespoke icon set, share it and we'll vendor it into `assets/icons/` and rewire the components.**

Note: `--rl-like` (`#FF4D6D`, the heart color) is a UI accent **not** in the original brand spec — introduced for the liked state. Confirm or replace.

---

## Index / manifest

- **`styles.css`** — global entry; `@import`s everything below.
- **`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`.
- **`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- **`components/`** — reusable React primitives: `MoodPill`, `CategoryChip`, `Button`, `Avatar`, `SegmentedToggle`, `TabBar`, `ActionRail`, `FeedCard`.
- **`ui_kits/app/`** — the Ravelist mobile app: interactive `index.html` + `FeedScreen`, `DetailScreen`, `LogScreen`.
- **`Ravelist Screens.dc.html`** (root) — the original light+dark reference exploration (3 feed directions, detail, log).
- **`SKILL.md`** — portable skill entry for use in Claude Code.
