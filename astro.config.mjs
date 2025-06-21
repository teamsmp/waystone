// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.teamsmp.uk",
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon(), sitemap()],

  adapter: node({
    mode: "standalone",
  }),
});
