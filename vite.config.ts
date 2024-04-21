import { defineConfig } from "vite";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

export default defineConfig({
  plugins: [polyfillNode()],
});
