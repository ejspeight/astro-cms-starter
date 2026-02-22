// ============================================================================
// ASTRO CONTENT COLLECTIONS — Schema definitions for all CMS-managed content
// ============================================================================
//
// This file defines the shape of every content collection. Astro validates
// frontmatter against these schemas at build time, giving you type-safe
// content queries throughout the codebase.
//
// Each collection here corresponds to a Decap CMS collection defined in
// public/admin/config.yml. Keep them in sync when adding new fields.
// ============================================================================

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ---------------------------------------------------------------------------
// PAGES — Static page content (home, about, services, contact)
// ---------------------------------------------------------------------------
// Each markdown file in src/content/pages/ represents a page.
// The body of the markdown is the main content; frontmatter holds metadata
// and structured fields tailored to each page type.
// ---------------------------------------------------------------------------
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    seo_description: z.string().optional(),
    og_image: z.string().optional(),
    // Home page fields
    hero_heading: z.string().optional(),
    hero_subheading: z.string().optional(),
    hero_cta_text: z.string().optional(),
    hero_cta_link: z.string().optional(),
    hero_image: z.string().optional(),
    about_snippet: z.string().optional(),
    // About page fields
    heading: z.string().optional(),
    intro: z.string().optional(),
    featured_image: z.string().optional(),
  }),
});

// ---------------------------------------------------------------------------
// TEAM — Team member profiles
// ---------------------------------------------------------------------------
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    sort_order: z.number().default(0),
  }),
});

// ---------------------------------------------------------------------------
// BLOG — News, articles, and updates
// ---------------------------------------------------------------------------
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    cover_image: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

// ---------------------------------------------------------------------------
// EXPORT — Register all collections with Astro
// ---------------------------------------------------------------------------
export const collections = {
  pages,
  team,
  blog,
};
