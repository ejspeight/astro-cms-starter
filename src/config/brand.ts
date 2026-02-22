// ============================================================================
// BRAND CONFIGURATION — Logo and non-CSS brand assets
// ============================================================================
//
// TO REBRAND FOR A NEW CLIENT:
//
//   1. COLOURS, FONTS, SPACING → edit src/styles/global.css (the @theme block)
//      That is the SINGLE source of truth for all visual design tokens.
//      Tailwind reads from there, and every utility class updates automatically.
//
//   2. LOGO & ASSETS → edit this file (below)
//      Logo path, alt text, and dimensions live here because they aren't
//      CSS concerns — they're used in <img> tags and structured data.
//
//   3. SITE METADATA → edit src/config/site.ts
//      Business name, contact info, social links, navigation, SEO defaults.
//
// That's it. Those three files are everything you need to white-label the site.
// ============================================================================

export const brand = {
  // ---------------------------------------------------------------------------
  // LOGO
  // ---------------------------------------------------------------------------
  // Path relative to /public. Update when swapping brand assets.
  // If using an SVG, the colours inside the SVG file may need updating too.
  // ---------------------------------------------------------------------------
  logo: {
    src: "/static/images/logo.svg",
    alt: "Site Logo",
    width: 160,
    height: 48,
  },
} as const;

// Type export so components can import and get autocomplete
export type Brand = typeof brand;
