import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import image from '@astrojs/image';
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  server: {
    port: 6006
  },
  outDir: 'dist',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    react(),
    sitemap(),
    mdx({}),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    astroImageTools,
  ],
  markdown: {
    remarkPlugins: [
      remarkToc, [
        remarkCollapse, {
          test: "Table of contents"
        }
      ]
    ],
    // shikiConfig: {
    //   theme: "one-dark-pro",
    //   wrap: true
    // },
    extendDefaultPlugins: true,
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'entry.[hash].js',
          chunkFileNames: 'chunks/chunk.[hash].js',
          assetFileNames: 'assets/asset.[hash][extname]'
        }
      }
    }
  }
});
