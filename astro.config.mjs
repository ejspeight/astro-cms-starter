// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Production URL — used by the sitemap integration and canonical URL helpers.
  // Update this in src/config/site.ts when rebranding; the value here must match.
  site: "https://example.com",

  // "ignore" lets most pages work without trailing slashes while allowing
  // /admin/ to resolve naturally to public/admin/index.html (Decap CMS needs this).
  trailingSlash: "ignore",

  integrations: [
    sitemap({
      // Exclude utility/redirect pages from the sitemap
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/contact-success"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
