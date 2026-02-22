// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Ensure trailing slashes so /admin/ resolves to /admin/index.html
  // in both the dev server and production builds.
  trailingSlash: "always",

  vite: {
    plugins: [tailwindcss()],
  },
});
