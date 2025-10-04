import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import ViteSitemapPlugin from "vite-plugin-sitemap";

export default defineConfig(() => ({
  plugins: [
    react(),
    ViteSitemapPlugin({
      hostname: "https://travelbuddiessafaris.netlify.app",
      dynamicRoutes: [
        "/",          // home
        "/about",
        "/contact",
        "/reviews",
        "/tours",
        "/hotels",
        "/blog",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
