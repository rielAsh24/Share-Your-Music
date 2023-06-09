// vite.config.ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// see all documentation here https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "build"
  },
  plugins: [reactRefresh()]
});
