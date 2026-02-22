// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // "ignore" lets most pages work without trailing slashes while allowing
  // /admin/ to resolve naturally to public/admin/index.html (Decap CMS needs this).
  trailingSlash: "ignore",

  vite: {
    plugins: [tailwindcss()],
  },
});
