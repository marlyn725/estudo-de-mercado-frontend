# Let's Design System

> **Brand:** Let's — *"Frota sob medida para sua empresa"* (Fleet tailored to your company)
> **Parent company:** VIXPAR
> **Domain:** lets.com.br
> **Tagline:** *"Transparência que move o futuro."* (Transparency that moves the future.)
> **Language:** Portuguese (pt-BR)

Let's is a Brazilian fleet-management / fleet-rental company that builds custom vehicle operations for businesses, with a particular specialty in **operações reguladas** (regulated operations) — sectors where compliance failures cause real, expensive consequences (audits, fines, downtime). The brand is owned by VIXPAR and centered on the values of **transparency, precision, and reliability**.

The visual identity is bold, warm, and confident: a single saturated orange (`#F15A22`) carries almost the entire brand, anchored by deep black logo lockups and a recurring grayscale "Lets" wordmark used as a graphic pattern (*Grafismo Lets*).

## Sources

- **Figma file** — *"Operações reguladas.fig"* — mounted as a virtual filesystem (`/Page-1` with 4 frames). Two long-form e-mail layouts and three reusable components (Topo, E-mail, Rodapé). Fonts referenced: Neo Sans Pro Bold/Regular/Black.
- **Brand uploads** — `uploads/Assinatura.png`, `Grafismo.png`, `Let's.png`, `Let's2.png`, `Let's topo.png`, `Topicos.png`, `instagram.png`, `linkedin.png`, `site Let's.png`. These are the official social/email signatures, the smile-face brand mark, and the ghosted *Grafismo Lets* pattern.

## Index — what's in this folder

```
README.md                 ← this file
SKILL.md                  ← Claude Code-compatible skill manifest
colors_and_type.css       ← color + type CSS variables (single source of truth)
assets/                   ← logos, icons, illustrations, brand pattern
preview/                  ← design-system cards (registered for the Design System tab)
ui_kits/
  email/                  ← email/marketing layout kit (matches the Figma source)
  marketing/              ← marketing landing-page kit (lets.com.br style)
slides/                   ← (empty — no deck templates were provided)
```

UI kits available:
- `ui_kits/email/index.html` — full e-mail recreation with TOPO, hero, body sections, quote card, and orange footer with social row.
- `ui_kits/marketing/index.html` — landing-page style hero + sections built from the same component vocabulary.

## Caveats / substitutions

- **Font:** Neo Sans Pro is proprietary (Linotype). Substituted with **Exo 2** (Google Fonts) for visual similarity (geometric, humanist, available in italic + 400/500/700/900). When licensed Neo Sans Pro web kit is available, drop the `.woff2` files into `fonts/` and update `--font-display` / `--font-body` in `colors_and_type.css`.
- **VIXPAR wordmark:** in the Figma file the lockup is composed of 24 separate vector paths and could not be reliably re-extracted as one SVG. We render "VIXPAR" as styled type in navy (`#232B59`) — replace with the official VIXPAR SVG when supplied.
- **Photography:** the Figma's hero photograph (driver with bottle) is editorial stock — not bundled. Use real Let's photography or the `topo-grafismo-overlay.png` ghost pattern alone as a placeholder hero background.

---

# CONTENT FUNDAMENTALS

> All copy is in **Brazilian Portuguese**. Tone is **confident, direct, expert** — never gimmicky.

### Voice
- **Authority + warmth.** Let's positions itself as the expert in regulated, high-stakes fleet operations, but the smile-face brand mark and the closing line *"E lembre-se: sempre que precisar, conte com a Let's"* ("And remember: whenever you need, count on Let's") soften the seriousness with a personal sign-off.
- **Problem → Stakes → Solution → CTA.** The Figma e-mails follow a strict editorial frame, with section labels visible in the source: `#Introdução` → `#Desenvolvimento / Agitação` → `#Autoridade / Solução` → `#Chamada para Ação`. Use this structure for any longer-form Let's piece.
- **First-person plural ("nós"), addressing the reader as "você"** ("Sua frota está pronta para esse nível de exigência?"). Never overly formal ("o senhor"); never slangy.

### Casing & punctuation
- **Sentence case** for body and headings. The only ALL-CAPS in the system are wordmark elements (lets.com.br, VIXPAR) and the editorial section labels (#Introdução, #Autoridade).
- **Bold key phrases inline** to create scannable rhythm in body copy: *"a **tolerância a erros é zero**…"*, *"**não perdoam improvisos, não permitem atrasos** e **não toleram falhas processuais**."*
- **Em dashes and colons** create cadence; long sentences are broken with line breaks for poster-like delivery.
- Periods at the end of headlines (*"Transparência que move o futuro."*) — closes the thought.

### Specific examples (lifted verbatim from the source)
- **H1 hero (italic, orange-on-black):** *"Descubra as práticas que garantem a estabilidade da sua operação."*
- **Subhead (white-on-black, regular):** *"Não permita improvisos, atrasos ou falhas."*
- **Stake-setting:** *"Em algumas áreas, a tolerância a erros é zero."*
- **Authority card (orange outline, asymmetric corners):** *"Operações reguladas exigem precisão, e a pergunta é: Sua frota está pronta para esse nível de exigência?"*
- **Closer:** *"Transparência que move o futuro."*
- **Sign-off:** *"E lembre-se: sempre que precisar, conte com a Let's."*

### Emoji
**No emoji.** The brand has its own glyph — a small **smile-face** (two dots and a curve) used at the end of the closing line. This is the only "emoji-like" element and it's rendered as a brand asset, never a Unicode character.

### Vibe
Calm professionalism with bursts of orange. Black-and-white reportage photography pairs with confident editorial typography. The brand never shouts; it makes a clear claim and asks a sharp question.

---

# VISUAL FOUNDATIONS

### Colors
- **Primary:** `#F15A22` Let's Orange — top bar, footer, italic hero headlines, accent strokes, all CTAs. Used at full saturation, never tinted.
- **Secondary:** `#232B59` VIXPAR Navy — only in the parent-brand lockup ("uma empresa VIXPAR"). Do not use as UI color.
- **Neutral:** `#FFFFFF` body / `#000000` text / `#EAEAEA` panel for soft section backgrounds.
- **Accent (rare):** `#D4D50D` acid yellow appears in some Let's collateral — currently unused in this file but available for highlights.
- The palette is intentionally tight: orange + black + white + one panel gray. Resist adding more.

### Type
- **Family:** Neo Sans Pro (Bold, Regular, Black) — substituted with Exo 2.
- **Hero pattern:** italic display-size title in **orange**, immediately followed by the same italic title in **black** below it (Figma's "TEXTO" symbol does this twice). Creates a stamped, layered effect.
- **Body:** regular 30 px on email layouts (these render at print/email distances) — paragraph line-height 1.4. Body weight is plain, with **bold runs inline** to mark stakes.
- No font-size below 15 px even in the footer.

### Spacing / layout
- Layouts are built on a **1240 px page width** with a **67 px gutter** (≈ 5%).
- Vertical rhythm uses **44 px** as the section gap and **52 px** padding for soft-gray inset sections.
- Footer / top bar height ≈ **115 px** (orange) and **275 px** (footer with logos).

### Backgrounds
- **Solid orange** for top bar and footer.
- **Pure white** for body sections.
- **Soft gray panel** (`#EAEAEA`) for editorial callouts (the "Desenvolvimento / Agitação" section).
- **Photographic hero** with a **black bottom-up gradient** (`linear-gradient(rgba(0,0,0,0) 42%, rgb(0,0,0) 100%)`) to ensure white type stays legible — this is the protection gradient pattern.
- **Ghost watermark:** the *Grafismo Lets* (logo letters as soft shapes) sits at ~5–8 % opacity behind text in long sections.

### Imagery
- **Reportage / editorial photography** — humans, vehicles, cityscapes, often slightly desaturated with warm shadows.
- Photo + bottom-up black gradient is the canonical hero pattern.
- Hero images use an **asymmetric bottom-left corner radius of 122 px** — a signature shape.

### Animation / interactivity
- The Figma is static, but the system implies: **plain fades** (160 ms ease) for hover; **opacity 0.75** on link hover; **opacity 0.6** on press. No bounces, no springs, no elaborate motion.

### Hover / press states
- Buttons (orange fill): hover → orange-dark `#E75613`; press → orange-deep `#E8590D` and slight inset shadow.
- Links: opacity-only.
- Cards (orange outline): hover → fill 6% orange tint, no scale change.

### Borders / shadows
- **Hairline `2px solid #000`** between the orange footer and the body (visible on every email layout).
- **3 px orange outline** on quote / CTA cards.
- Shadows are minimal: `0 8px 24px rgba(17,15,12,0.12)` for elevated cards is plenty. The brand prefers flat color over depth.
- **Protection gradient** (black-to-transparent, 42% start) is used over photos, never a colored capsule.

### Corner radii
- **0 px** on the orange top/bottom bars (full-bleed).
- **0 0 0 122 px** on hero photo block (signature asymmetric).
- **0 70 0 70 px** on the authority-quote card (diagonal asymmetric).
- **999 px (pill)** for buttons.
- **6 / 12 / 24 px** for general UI cards in marketing/web.

### Cards
- Quote / authority card: **3 px orange border**, **diagonal radii (top-right + bottom-left only)**, **44 px inner padding**, no shadow.
- Soft panel: **flat gray `#EAEAEA`**, 0 radius, 52 px padding, no border.

### Transparency / blur
- The *Grafismo Lets* pattern is the **only persistent use of transparency** — placed at 5–10 % opacity behind text.
- No glassmorphism, no backdrop-filter blur.
- Photographs use the protection gradient overlay; that's it.

### Layout rules
- Top bar (orange) and footer (orange + black hairline) are **fixed structural anchors** of every long layout.
- Hero block always sits flush to the top bar with **no margin between them**.
- Section labels (`#Introdução`, `#Autoridade`) are author-facing markers that should NOT be rendered visibly.

---

# ICONOGRAPHY

The brand uses **a small, hand-curated icon set** rather than a full system. Icons in the Figma source:

- **Checkmark** — orange `✓` at the start of every list item (`Documentação, laudos e licenças sempre em dia;`). Filled custom shape, not a stroke icon. Available at `assets/icon-check.svg` (we drew a faithful match) and as the underlying iconify reference (`material-symbols` style).
- **Error / alert** — orange filled circle with white `!` center, used to mark warnings (`Mas é na rotina que nascem as maiores falhas:`). Available at `assets/icon-error.svg` (extracted from the Figma).
- **Smile-face glyph** — two dots and a curve in orange, used as the brand's friendly sign-off. Available at `assets/icon-smile.svg` (extracted; this is the closing companion to the *"Transparência que move o futuro."* line).
- **Social icons** — Instagram, Facebook, LinkedIn, all white-on-orange in the footer, drawn as filled outlines. We've extracted Instagram (`assets/icon-instagram.svg`) and use it as the template for the others; for the broader set we use **Material Design Icons** (`mdi`) since the Figma explicitly references `MdiInstagram`.
- **Topicos arrow** (`assets/topicos-arrow.png`) — orange right-pointing solid triangle used as a bullet/lead in some collateral.

### Approach
- **Icons are filled solid orange** when the icon is the focal element (checks, errors, social on dark).
- **White-on-orange filled** when sitting in the orange footer.
- Stroke-based icons are **not** part of the system.
- **No icon font** is referenced in the source — icons ship as individual SVGs.
- **Emoji are NOT used.** The smile glyph is a brand asset, not a Unicode character.
- **Unicode characters as icons:** none.

### Substitution policy
For UI elements not present in the brand source (menus, settings, etc), use **Material Design Icons** (`mdi`) in the same filled, geometric style — this matches the explicit `MdiInstagram` reference in the Figma. CDN: `https://cdn.jsdelivr.net/npm/@mdi/svg@7/svg/{name}.svg`. **Flag this substitution** to the brand team when shipping production work.

---

## How to use this design system

1. Link `colors_and_type.css` from any HTML file. It exposes both atomic CSS variables (`--lets-orange`, `--size-h1`, …) and ready-to-use semantic classes (`.h1`, `.eyebrow`, `.bg-panel`, `.body-lg`).
2. Pull assets from `assets/` directly. Don't redraw the smile, the *grafismo*, or the Let's logos — reuse the PNGs/SVGs.
3. When in doubt, follow the email templates: orange top bar, photographic hero with bottom protection gradient and asymmetric 0/0/0/122 radius, italic orange-then-black headline, paragraph body, gray panel for stakes, orange-outlined diagonal quote, orange footer.
4. For new icons, prefer **Material Design Icons (filled)** to match the existing `mdi` references.
