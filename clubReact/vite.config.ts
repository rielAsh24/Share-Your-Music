// vite.config.ts
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  base: "/Share-Your-Music/",
  build: {
    outDir: "build"
  },
  plugins: [reactRefresh()]
});