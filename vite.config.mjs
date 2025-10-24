import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // <-- здесь важно, './' делает пути относительными
  build: {
    outDir: "docs", // каталог для сборки
  },
});
