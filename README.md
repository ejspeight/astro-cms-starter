# Astro CMS Starter

Small business website starter built with Astro, Tailwind CSS v4, and Decap CMS. Deploys to Netlify. Designed to be cloned and rebranded quickly.

## What's in here

- Astro v5 with TypeScript
- Tailwind CSS v4 - theme tokens (colours, fonts, radii) defined in a single `@theme` block in CSS
- Decap CMS at `/admin` - content is managed via git (no database)
- Netlify deployment config with Identity + Git Gateway for CMS auth
- SEO baked into `BaseLayout.astro` - page titles, meta descriptions, canonical URLs, Open Graph tags, Twitter Cards, robots control, and a dynamic theme-color meta tag
- Content collections validated at build time via Astro's schema system

## Project structure

```
src/
  config/
    brand.ts              # logo path, alt text, dimensions
    site.ts               # business name, contact, socials, nav, SEO defaults
  content/
    blog/                 # blog posts (folder collection)
    pages/                # home, about, services, contact (file collection)
    settings/             # navigation links (JSON, CMS-managed)
    team/                 # team member profiles (folder collection)
  content.config.ts       # Astro collection schemas - keep in sync with config.yml
  layouts/
    BaseLayout.astro      # root HTML shell, all SEO meta tags live here
  pages/
    index.astro           # home page
    admin.astro           # serves the Decap CMS panel
  styles/
    global.css            # Tailwind v4 @theme block + base styles
public/
  admin/
    config.yml            # Decap CMS collections and field definitions
netlify.toml              # build settings, redirects, security headers, caching
```

## Getting started

```sh
npm install
npm run dev
```

Site: `http://localhost:4321`
CMS: `http://localhost:4321/admin/`

## Rebranding

Three files:

1. `src/styles/global.css` - colours, fonts, radii (the `@theme` block)
2. `src/config/brand.ts` - logo
3. `src/config/site.ts` - business name, contact details, social links, nav items, SEO title template

That's it. Everything else reads from these.

## CMS collections

| Collection | Type | What it manages |
|:-----------|:-----|:----------------|
| Site Settings | File | Site URL, name, colours, fonts, contact info, social links |
| Navigation | File | Header nav links |
| Pages | Files | Home, About, Services, Contact - each with its own fields + SEO metadata |
| Team Members | Folder | One markdown file per person |
| Blog | Folder | Date-slug posts with author, cover image, SEO description |

## SEO

Handled in `BaseLayout.astro`. Every page gets:

- `<title>` via a configurable template (`%s | Site Name`)
- Meta description (per-page or fallback to site default)
- Canonical URL (auto-derived or manually overridden)
- Open Graph tags (type, title, description, URL, image, site name)
- Twitter Card tags (large image summary)
- Robots meta tag (opt-in noindex per page)
- Theme colour meta tag (reads from CSS `--color-primary` at runtime)

Page-level SEO fields (`seo_description`, `og_image`) are editable in the CMS for each page and blog post.

## Netlify deployment

1. Push to GitHub
2. Connect the repo in Netlify
3. Enable Identity (Site settings > Identity)
4. Enable Git Gateway (Identity > Services > Git Gateway)
5. Invite yourself as a CMS user from the Identity tab

The `netlify.toml` handles build config, Identity redirects, security headers, and asset caching.

## Commands

| Command | Action |
|:--------|:-------|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the build locally |

## License

[MIT](LICENSE)