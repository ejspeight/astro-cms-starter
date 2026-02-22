// ============================================================================
// SITE CONFIGURATION — Metadata, contact info, and social links
// ============================================================================
//
// This file contains all site-level metadata that isn't visual branding.
// For colours, fonts, and radii — edit src/styles/global.css (@theme block)
// For logo — edit src/config/brand.ts
//
// TO REBRAND FOR A NEW CLIENT:
// Update the values below with the new business's details.
// Every page and component reads from this file for contact info, SEO, etc.
// ============================================================================

export const site = {
  // ---------------------------------------------------------------------------
  // CORE METADATA
  // ---------------------------------------------------------------------------
  name: "My Business",
  tagline: "Your tagline goes here.",
  description:
    "A short description of your business for search engines and social sharing.",
  url: "https://example.com", // Production URL (no trailing slash)
  language: "en",

  // ---------------------------------------------------------------------------
  // CONTACT INFORMATION
  // ---------------------------------------------------------------------------
  contact: {
    email: "hello@example.com",
    phone: "+61 400 000 000",
    address: {
      street: "123 Main Street",
      suburb: "CBD",
      city: "Perth",
      postcode: "6000",
      country: "Australia",
    },
  },

  // ---------------------------------------------------------------------------
  // BUSINESS HOURS
  // ---------------------------------------------------------------------------
  // Used in footer, contact page, and structured data (SEO).
  // Set to null for days the business is closed.
  // ---------------------------------------------------------------------------
  hours: {
    monday: "9:00 AM – 5:00 PM",
    tuesday: "9:00 AM – 5:00 PM",
    wednesday: "9:00 AM – 5:00 PM",
    thursday: "9:00 AM – 5:00 PM",
    friday: "9:00 AM – 5:00 PM",
    saturday: "10:00 AM – 2:00 PM",
    sunday: null, // Closed
  },

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS
  // ---------------------------------------------------------------------------
  // Set any value to null or remove it to hide that social icon.
  // Components should check for null before rendering.
  // ---------------------------------------------------------------------------
  social: {
    instagram: null,
    facebook: null,
    tiktok: null,
    youtube: null,
    twitter: null,
    linkedin: null,
  },

  // ---------------------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------------------
  // Navigation links are managed via CMS in src/content/settings/navigation.json.
  // The Header component reads from that file directly.
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // SEO / OPEN GRAPH DEFAULTS
  // ---------------------------------------------------------------------------
  // Fallback values used when individual pages don't specify their own.
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | My Business", // %s is replaced with page title
    defaultImage: "/static/images/og-default.jpg",
    twitterHandle: null,
  },
} as const;

// Type exports for use in components and layouts
export type Site = typeof site;
export type SocialLinks = typeof site.social;
