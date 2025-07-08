import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: ".", // корень проекта (где index.html)
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, "src/components"),
    }),
    viteStaticCopy({
      targets: [
        {
          src: "lib/swiper/*",
          dest: "lib/swiper",
        },
      ],
    }),
  ],
  build: {
    outDir: "dist", // куда собирается проект
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        services: path.resolve(__dirname, "services.html"),
        contacts: path.resolve(__dirname, "contacts.html"),
      },
    },
  },
  server: {
    open: "index.html",
  },
});
