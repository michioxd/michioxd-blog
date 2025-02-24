import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://blog.michioxd.ch",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus"
    }
  },
  vite: {
    build: {
      minify: "terser",
      terserOptions: {
        parse: {
          html5_comments: false,
        },
        format: {
          comments: false
        }
      }
    }
  }
});
