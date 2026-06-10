# Wing Gal™ — Design System

> Sisterhood. On demand.
> A real, trained woman — vetted, background-checked, certified — who shows up beside you within minutes. Not a dating app. Not a chatbot. Not an emergency button.

This repository is the canonical design system for **Wing Gal™**: brand voice, color, type, the hand-cut collage icon library, and high-fidelity UI kit recreations of the product surfaces.

---

## 1. Company & product context

**Wing Gal™** is an on-demand mobile platform connecting women with trained, vetted **Wing Women** — real, in-person companions who show up beside you for nights out, solo travel, new-city moments, and any time you'd rather not walk in alone. Founded by **Janet Speight**. Launching in **Oakland, CA**.

It is explicitly **not** a dating app, **not** a therapy service, **not** an emergency-alert button. The positioning is *formalized sisterhood* — vetted, certified, on demand.

### Products represented
| Surface | What it is | UI kit |
|---|---|---|
| **iOS mobile app** | The core product. Two modes: **Client** (book a Wing Woman) and **Wing Woman** (accept jobs, run sessions). Flows: onboarding → home/discovery → wing profile → booking → live session w/ map + check-ins → chat → debrief. | `ui_kits/app/` |
| **Marketing website** | Editorial brand site — hero, the problem-has-a-name manifesto, how-it-works, Wing Woman tiers, founder story, safety, waitlist CTA. | `ui_kits/website/` |

### Sources I was given (store for reference — reader may not have access)
- `uploads/WingGal_Brand_Brief.md` — founder story, 5 voice pillars, language rules, canonical palette, type pairing, icon index.
- `uploads/WingGalApp_1.jsx` — 2,160-line React MVP prototype. **Source of truth for the app UI kit** (all screens, tokens, collage icons, mock data). Built with `lucide-react` for utility icons.
- `uploads/WingGal_Icons.html` — the 16 collage icons rendered + raw SVG source. Mirrored to `assets/WingGal_Icons_reference.html`.
- `uploads/Screenshot 2026-06-02 at 8.53.36 PM.png` — brand palette swatch card.

No Figma file or live codebase/GitHub repo was provided — the JSX prototype and brand brief are the authoritative inputs.

---

## 2. Content fundamentals (voice & copy)

Wing Gal speaks like **the most confident woman in your friend group** — warm but direct, empowering but never preachy, real not polished. Every line should pass **the screenshot test**: *would a woman screenshot this and send it to her group chat?* If not, rewrite it.

### Five voice pillars
1. **Sisterhood, not service.** First-person plural ("we"). Talk like a friend who's done this a thousand times — never "our platform provides."
2. **Specificity over generality.** Name the bar, the city, the feeling. *"You just moved to NYC, you don't know anyone, it's Saturday"* beats *"empowering women to live their best lives."*
3. **The problem has a name.** Give language to experiences women haven't had words for. *"Dating apps will match you. They will not show up."*
4. **Safety without alarm.** Safety is an upgrade, not a warning. Access, not anxiety. *"Your safety shouldn't depend on whether your friends are free."*
5. **Proof before promise.** Back claims with stats, real outcomes, competitive gaps.

### Mechanics
- **Person:** "we" (the brand/sisterhood) talking to "you" (the woman). Direct address.
- **Casing:** **Sentence case in headlines.** Never Title Case Every Word. Eyebrow labels are the only ALL-CAPS (Inter 700, 2px tracking, Spritz).
- **Punctuation:** Em dashes — they read like a real person pausing. Short sentences. Periods for emphasis. Oxford comma, always. Contractions always ("we're," "you've").
- **Tone moments:** italic serif for the emotional wink ("*Who's with you tonight?*"). Warm, never clinical, even around safety.

### Always / Never
- **Always:** Wing Gal™ (™ on first mention), Wing Woman / Wing Women (capitalized).
- **Never:** "users," "girls," "providers," "matches." Never open a sentence with "Empowering" or "Revolutionizing." No vague wellness-influencer language.

### Verbatim examples (from the brief)
- *"I got tired of canceling my own life."* — the founder's screenshot-able line.
- *"Sisterhood has always been the most powerful force in a woman's life. We just formalized it, vetted it, and put it on demand."*
- App headlines: *"Sisterhood. On demand."* / *"Not a match. Not an alert. Not an escort."* / *"What brings you here tonight?"*

### Emoji
Sparingly, and only warm/femme: 🌹 ✓ 📍 appear in app microcopy (a Wing Woman signing off a message with 🌹). Emoji is **not** a structural part of the brand — the collage icons do that work. Never decorate headlines with emoji.

---

## 3. Visual foundations

**Overall vibe:** editorial-feminine, warm, tactile, scrapbook. Think a risograph zine crossed with a fashion editorial — never corporate, never flat-geometric-tech.

### Color
- **Peaches & Cream `#F5CBAF` is the background everywhere.** This single warm peach is the canvas the whole brand sits on.
- **Dirty Martini `#5D5821`** (deep olive) does the heavy lifting: primary CTA fills, immersive dark sections, anchor text. The unexpected olive-against-peach pairing *is* the brand.
- **Spritz `#F09457`** (warm orange) is the wink: eyebrow labels, italic accents, stars, active progress.
- **Sand `#D6CBB6`** = surfaces, borders, dividers. **Velvet `#B9A7AC`** = secondary/soft sections. **Bubble Gum `#F8AFB8`** = soft pops & tints.
- **Negroni `#FE4213` is sacred** — only ever appears for urgency / SOS. Never decorative.
- Cards in the app are frequently pure **white** on the peach background (clean contrast); raised surfaces use **bone `#FAEAD8`**.
- **Imagery vibe:** warm, analog, slightly sun-faded. Collage textures over photography. No cool tones, no harsh b&w. Pull from the **content library** (`assets/content-library/`, viewable at `preview/brand-imagery.html`) before sourcing new photography.

### Type
- **Display:** Cormorant Garamond 500, italic allowed. Tight tracking (−1 to −1.5px), generous line-height (~1.05). Big emotional headlines.
- **Eyebrow:** Inter 11px / 700 / 2px tracking / UPPERCASE / Spritz.
- **Body:** Inter 14–15px / 400–500 / line-height 1.5.
- **Numbers & stats:** **Inter 600**, large (24–40px), tabular figures — prices, ratings, and timers render in clean sans for legibility (overrides the earlier serif-numerals convention).
- The serif/sans tension (literary serif + clean Inter) is core to the editorial feel.

### Backgrounds & texture
Flat warm color fields — **no gradients as a brand device** (the only gradients are functional: avatar fills and the stylized session map). Hand-cut collage icons provide the texture and personality. No repeating patterns or photographic hero washes in the app; the website may use full-bleed collage compositions.

### Shape, radius, borders
- Rounded but not bubbly. Cards: **20px**. Inputs/info cards: **14px**. Chips & buttons: **fully pill (999px)**. Phone screen: **44px**.
- Borders are **1–1.5px solid Sand** — soft, low-contrast, hairline. Collage icons use a **1.2–1.8px Ink stroke** (the hand-cut outline is a signature).
- Shadows are minimal and warm-tinted. App cards are near-flat (border does the work). The only big shadow is the phone bezel. No hard drop shadows, no neumorphism.

### Motion
- Gentle and editorial: `fadeUp` entrances (translateY + opacity), staggered list reveals (~0.06s per item), `slideIn` for chat bubbles. Live/urgent states use a soft `pulseRing`.
- Easing: ease-out. Durations 0.3–0.4s. No bounces, no spring overshoot, no infinite decorative loops on content.

### States
- **Hover:** slight brightness lift on filled buttons (`brightness(1.08)`); cards lift subtly.
- **Press:** `scale(0.98)`.
- **Selected:** invert to **Ink background + cream text** (quiz options, filter chips, date/time pickers all share this "fill dark to select" pattern).
- **Online/live:** small green dot `#2f9c6e` / `#3ddc84` + pulse.

### Layout
- App is a fixed **380×780 iPhone frame**: dynamic island, status bar (9:04 · 5G), bottom tab nav, fixed top status bar over a scroll area.
- Generous edge padding (20–28px). Content breathes. Single-column, list-driven.
- Transparency & blur reserved for overlays on the immersive olive session screen (`backdrop-filter: blur` glass cards) and map labels.

---

## 4. Iconography

Wing Gal has a **bespoke hand-cut collage icon system** — this is the brand's defining visual asset, not a generic icon font. **16 composite SVG illustrations**, each built from layered objects + a signature 4-pointed "twinkle" sticker star (`Star4`), drawn with a 1.2–1.8px Ink outline in the canonical palette. They feel scrapbook / risograph / tactile — Chani-inspired.

- **File:** `assets/CollageIcons.jsx` — self-contained React component. `<CollageIcon name="wing" size={84} rotate={-6} />`. Palette baked in; no deps.
- **Reference:** `assets/WingGal_Icons_reference.html` — all 16 rendered at 96px + raw SVG source to copy/paste.
- **The 16 & their meaning:** `wing` (brand mark) · `bow` (gifts/referrals) · `martini` (nightlife) · `rose` (sisterhood) · `disco` (big nights) · `heel` (getting ready / the Wing Woman side) · `lipstick` (glamour) · `heartKey` (post-breakup, opening up) · `phone` (booking) · `suitcase` (solo travel) · `skyline` (new city) · `chatBubbles` (company/conversation) · `hands` (connection, alt) · `eye` (being seen) · `sparkles` (magic / empty states / loading) · `shieldRose` (safety / vetting).
- Each icon ships with a built-in default rotation so they sit slightly askew — part of the hand-cut feel. Don't straighten them.

**Utility icons** (chevrons, send, bell, map pin, etc.) use **`lucide-react`** in the app prototype — thin 1.5px stroke, which pairs cleanly with the heavier collage outlines. In static HTML, use **Lucide via CDN** (`https://unpkg.com/lucide@latest`) for the same set. The collage icons carry brand moments; Lucide handles plumbing.

No PNG icons, no other icon fonts. Unicode is used only incidentally (●, ✓) inside microcopy.

### Logo / brand mark
No standalone wordmark file was provided. The **`wing` collage icon is the primary brand mark** (used in hero, footer, onboarding). The wordmark is set in Cormorant Garamond. Flag: if a finalized logo lockup exists, drop it into `assets/` and update this section.

---

## 5. Index — what's in this system

| Path | What |
|---|---|
| `README.md` | This file. |
| `SKILL.md` | Agent Skill manifest (for Claude Code / download). |
| `colors_and_type.css` | CSS variables for all colors, type families, semantic roles, radii, shadows, spacing + ready-made type/primitive classes. |
| `assets/CollageIcons.jsx` | The 16-icon collage system + Star4, self-contained. |
| `assets/WingGal_Icons_reference.html` | Rendered icon grid + raw SVG source. |
| `assets/content-library/` | Approved brand visuals — 25 assets: lifestyle photography, moody portraits, soft botanicals, spray-paint textures, and Wing Gal wordmark lockups. Surfaced as `preview/brand-imagery.html`. |
| `preview/` | Design-system spec cards (colors, type, spacing, components) shown in the Design System tab. |
| `ui_kits/app/` | iOS app UI kit — JSX components + interactive `index.html`. |
| `ui_kits/website/` | Marketing website UI kit — JSX components + interactive `index.html`. |
| `uploads/` | Original source materials (brief, prototype, icons, screenshot). |

---

## 6. Caveats & substitutions
- **Fonts:** **Cormorant Garamond** and **Inter** are both **self-hosted** from brand-uploaded variable-font files in `fonts/` (wired via `@font-face` in `colors_and_type.css`, plus inline `@font-face` in the UI-kit and icon-reference pages). Cormorant: weight axis 300–700 with a dedicated italic file. Inter: variable `opsz` + `wght` (100–900) with a dedicated italic file. No CDN font delivery remains; no substitution made.
- **No logo lockup** was provided; the `wing` collage icon stands in as the brand mark.
- **No Figma / live codebase** — the JSX prototype is the source of truth. UI kits are faithful cosmetic recreations of it, not production code.
