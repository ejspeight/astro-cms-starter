# Astro CMS Starter

Small business website starter built with Astro, Tailwind CSS v4, and Decap CMS. Deploys to Netlify. Clone it, rebrand it, ship it.

## Stack

- Astro v5 with TypeScript
- Tailwind CSS v4 with theme tokens in a single `@theme` block
- Tailwind Typography plugin for styled markdown content
- Decap CMS at `/admin` with git-based content management
- Netlify Forms for contact form submissions (no backend needed)
- SEO meta tags, Open Graph, Twitter Cards baked into the base layout
- Accessible skip-to-content link and keyboard focus styles
- Mobile responsive nav with hamburger menu

## Project structure

```
src/
  components/
    Header.astro            # sticky nav, mobile menu, reads from navigation.json
    Footer.astro            # contact info, hours, social links from site.ts
  config/
    brand.ts                # logo path, alt text, dimensions
    site.ts                 # business name, contact, socials, hours, SEO defaults
  content/
    blog/                   # blog posts (folder collection)
    pages/                  # home, about, services, contact (file collection)
    settings/               # navigation links (JSON, CMS-managed)
    team/                   # team member profiles (folder collection)
  content.config.ts         # Astro collection schemas
  layouts/
    BaseLayout.astro        # root HTML shell, SEO meta, skip-to-content
  pages/
    index.astro             # home page
    about.astro             # about page with team members grid
    services.astro          # services page
    contact.astro           # contact form (Netlify Forms) + contact details
    contact-success.astro   # form submission thank-you page
    blog/
      index.astro           # blog listing
      [slug].astro          # individual blog post
    admin.astro             # Decap CMS panel
  styles/
    global.css              # Tailwind v4 @theme block + base styles
public/
  admin/
    config.yml              # Decap CMS collections and field definitions
netlify.toml                # build settings, redirects, headers, caching
```

## Getting started

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`. CMS at `http://localhost:4321/admin/`.

To run the dev server with the local CMS backend (needed for content editing in dev):

```sh
npm run cms
```

## Rebranding

Three files:

1. `src/styles/global.css` - colours, fonts, radii (the `@theme` block)
2. `src/config/brand.ts` - logo
3. `src/config/site.ts` - business name, contact details, social links, hours

Navigation links are managed through the CMS under Settings > Navigation.

## CMS collections

| Collection | Type | What it manages |
|:-----------|:-----|:----------------|
| Site Settings | File | Site URL, name, colours, fonts, contact info, social links |
| Navigation | File | Header nav links |
| Pages | Files | Home, About, Services, Contact with page-specific fields and SEO |
| Team Members | Folder | One markdown file per person |
| Blog | Folder | Date-slug posts with author, cover image, SEO description |

## Contact form

The contact page uses Netlify Forms. No backend code required. Netlify detects the form at deploy time via the `data-netlify="true"` attribute. Includes honeypot spam protection. On submission, users are redirected to `/contact-success`.

## SEO

Handled in `BaseLayout.astro`. Every page gets a title (via configurable template), meta description, canonical URL, Open Graph tags, Twitter Card tags, robots meta, and theme colour. Page-level SEO fields are editable in the CMS.

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
| `npm run cms` | Dev server + local CMS backend |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the build locally |

## License

[MIT](LICENSE)
