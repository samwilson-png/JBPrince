# JB Prince Design System

JB Prince is a specialty retailer of professional chef tools, cookware, cutlery, and kitchen machinery, founded in 1976 by Judith Prince and run today from a Manhattan showroom and warehouse. Customers range from top restaurants, hotels, and culinary schools to serious home cooks. The brand voice is that of a trusted, expert curator — 45+ years sourcing from top manufacturers in the U.S., Europe, and Japan — not a mass-market houseware shop.

The one product surface is the **JB Prince storefront** (jbprince.com), a Shopify commerce site: mega-menu category navigation across ~10 departments (Apparel, Bar Tools, Kitchen Utensils, Professional Cutlery, Cookware, Machines, Molds, Table Service, Pastry Supplies & Tools), a promo-tile homepage, brand/vendor collection pages, and product detail pages for items ranging from $20 utensils to $7,899 machines (e.g. the Pacojet 4).

**Sources used to build this system:** this project has no attached codebase or Figma file — it was built entirely from the live public site at [www.jbprince.com](https://www.jbprince.com), its [About Us](https://www.jbprince.com/pages/about-us) page, and a sample product page ([Pacojet 4](https://www.jbprince.com/products/pacojet-4)), plus brand metadata (colors, fonts, logo) resolved from Brandfetch. No design-system definition, component library, or codebase was provided by the user. If a Figma file or storefront theme codebase exists, attach it and this system should be rebuilt/reconciled against that source of truth.

## Index

- `styles.css` — root stylesheet, imports all tokens below. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (radii, shadows, motion)
- `assets/` — `logo-wordmark.webp` (primary lockup), `icon.webp` (square icon with tagline)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/forms/` — Button, Input, Select, Checkbox
- `components/commerce/` — ProductCard, PriceTag, QuantityStepper, Badge
- `components/navigation/` — NavBar, Breadcrumbs
- `components/feedback/` — Tag, Alert
- `ui_kits/storefront/` — click-through recreation of the homepage → category → product-detail → cart flow
- `SKILL.md` — portable skill file for using this system in Claude Code

### Intentional additions
No component library or Figma inventory was provided, so the component set below is a standard commerce-storefront set sized to what the live site actually uses (nav, product cards, price display, quantity steppers, form controls, tags/badges, alerts) — not an invented "usual" kit. Nothing here has a made-up family beyond what the site's public pages demonstrate.

## Content Fundamentals

**Voice:** confident, expert, warm, measured — never hypey. Copy reads like a knowledgeable specialty retailer, not a marketplace. Example from the About page: "Judy refined the concept of a kitchenware store just like she refined the tools of the trade." Product callouts favor short, declarative phrases: "Worthy of Every Chef," "Molds Made For Perfection," "Redefining Traditional Food Prep," "A unique culinary experiences for your guests."

**Point of view:** mixed but "you"-forward in direct copy ("Whether you're equipping a professional kitchen or enhancing your personal collection…"), first-person-plural ("We carefully curate our collection…") when speaking as the company. Avoid "I."

**Casing:** headlines and category names use Title Case ("Shop Professional Cutlery," "Eco Friendly Disposables"). Eyebrow/kicker lines above headlines are sentence case or Title Case, short (2–5 words): "Brand New," "New at JB Prince!," "Through the Fire and Flame."

**Sentence rhythm:** hero copy is terse — a kicker, a bold product/category name, a one-line subhead. Body/story copy (About Us) runs long, narrative, historical — full paragraphs with specific names, dates, and quotes. Two registers: catalog-terse for commerce surfaces, narrative-warm for brand storytelling.

**Emoji:** never used. **Exclamation points:** used sparingly for genuine news ("Check Out Kasai Grills Today!", "New at JB Prince!") — not on every headline.

**Specificity over hype:** claims are concrete and technical where it matters (dimensions, wattage, dB sound rating, named materials — titanium, copper, Mauviel, Hestan) rather than vague superlatives. When superlatives appear ("world's finest," "top-rated"), they're backed by heritage/curation framing, not adjectives stacked for effect.

## Visual Foundations

**Color:** a two-tone system — near-black ink (`#222222`) on a soft off-white page (`#f7f7f7`), with a single saturated brand red (`#9b1728`) reserved for the logo plate, primary actions, and price/sale emphasis. No gradients anywhere. No secondary brand hue — category color-coding, if ever needed, should stay in the neutral ramp, not introduce new hues.

**Type:** a plain, honest sans (Helvetica Neue/Helvetica — a classic, non-trendy grotesque, matching a heritage specialty retailer) for nearly everything, with Roboto Condensed reserved for dense retail furniture — nav category labels, filter chips, price tags — where a condensed face buys space without shouting. Headlines are large and confident (34–44px) but not oversized/editorial; body copy is compact (13–14px), typical of a dense commerce catalog with a lot of navigation and product data on screen at once.

**Backgrounds:** full-bleed product photography on white or near-white ground for hero/promo tiles — no illustration, no pattern/texture, no hand-drawn elements. Imagery is warm-neutral, studio-lit, high-key (bright, low-contrast shadows), occasionally on a dark/black backdrop for premium machines (Pacojet). No heavy grain or filter treatment — clean commercial product photography throughout.

**Animation:** understated. Short fades and color transitions on hover/focus (120–260ms, standard easing) — no bounce, no spring, no parallax. This is a catalog, not a marketing spectacle.

**Hover states:** primary buttons darken one step (red-500 → red-600); text links shift from ink to brand red; product-card images get a soft shadow lift, not a zoom/scale effect (keep the catalog feel calm).

**Press/active states:** darken one step further (red-600 → red-700); no scale/shrink transforms.

**Borders:** hairline (1px) neutral-200 borders on cards, inputs, and table/list dividers — borders do the separating, not shadow, on dense listing pages.

**Shadows:** flat by default; a soft, small lift (`--shadow-sm`/`--shadow-md`) appears only on hover for cards and on open overlays (search, menus, modals). Never a colored or heavy shadow.

**Corner radii:** boxy and classic — 0–4px on structural elements (cards, images, panels), up to a small 4px on buttons/inputs. Nothing pill-shaped except true tags/badges. This is a deliberate departure from the rounded-everything look of many modern DTC sites — it reads more like a professional trade catalog.

**Layout:** dense mega-menu navigation is a fixed structural element (persistent header); category department names are always visible, sub-items reveal on hover/click. Hero/promo sections use a tile grid (2–4 columns) of image + kicker + headline + subhead, not a single oversized hero. Footer is information-dense: company info, customer care links, newsletter signup, social links, payment icons.

**Transparency & blur:** minimal — used only for lightweight overlays (mobile nav scrim, search overlay backdrop), never as a persistent aesthetic layer (no glassmorphism).

**Imagery color vibe:** warm-neutral studio photography; occasional dark/black backgrounds for premium/machine categories (Pacojet, Kasai Grills) to signal a step up in price tier. No black-and-white or heavily color-graded imagery.

## Iconography

The live site relies on **stock UI glyphs from its Shopify theme** (search, cart, account, hamburger) rather than a custom icon font or bespoke SVG icon set — no custom iconography system was found in the public pages, so none is invented here. Emoji are never used as icons. No unicode-character icons were observed.

For this design system's components (Button icon-slots, alert glyphs, form affordances), use a neutral, widely-available outline icon set at the same weight as the theme's utility icons — **Lucide** (CDN: `https://unpkg.com/lucide-static/font/lucide.css` or inline SVG via `lucide-static`) is the recommended substitute; flagged here as a substitution, not a brand asset. Do not draw new icons by hand.

**Logo:** `assets/logo-wordmark.webp` (white italic "JB Prince" wordmark reversed out of a solid red plate — the primary lockup used in the site header) and `assets/icon.webp` (square version with the "World's Finest Chefs' Tools & Equipment" tagline, used as the social/avatar mark). No standalone symbol/monogram exists — always use the full wordmark. Never redraw or approximate this mark; these two files are copied directly from the brand's own assets.

## Font substitution note

Helvetica Neue/Helvetica are treated as a **system font stack** (`"Helvetica Neue", Helvetica, Arial, sans-serif`) — no files were vendored since these are pre-installed on macOS/iOS and gracefully degrade to Arial elsewhere; no license is needed for a system-stack reference. **Roboto Condensed** is linked live from Google Fonts CDN in `tokens/typography.css` (`@import url(...)`) rather than vendored as static files. If you'd like fully self-hosted font files (for offline builds or stricter CSP), attach the actual brand font files (if JB Prince licenses a proprietary face beyond these) and we'll swap the references.

## Caveats — please help iterate

- **No codebase or Figma was attached.** Everything here is reverse-engineered from the public storefront's rendered HTML/copy plus Brandfetch's brand record — colors and type are a best-effort match, not pixel-exact extraction from source CSS. If you have the Shopify theme code or a Figma file, attach it and I'll reconcile every token and component against it.
- Exact hex values for hover/press states, precise spacing, and the true button/input radius are inferred from typical patterns for this kind of retail catalog — flag anything that looks off and I'll correct it against real values.
- Only one product surface (the storefront) was found — if there's a wholesale/B2B portal, POS, or internal tool with its own UI, let me know and I'll add a UI kit for it.
- Icons are a CDN substitution (Lucide), not the theme's real icon set — happy to swap in the exact theme icons if you can share them.
