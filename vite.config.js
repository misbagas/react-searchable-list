import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // 🔥 Fix: Update path to include the 'src' folder
      entry: resolve(__dirname, "src/SearchableList.jsx"), 
      name: "ReactSearchableList",
      formats: ["es", "umd"],
      fileName: (format) => `react-searchable-list.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});