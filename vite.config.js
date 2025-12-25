import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  mode: "production",
  build: {
    emptyOutDir: false,
    minify: "terser",
    cssCodeSplit: false,
    sourcemap: false,
    target: "es2017",
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
    lib: {
      emptyOutDir: false,
      entry: ["./src/app.js"],
      name: "app",
      formats: ["es"],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    outDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
        inlineDynamicImports: true,
        compact: true,
        assetFileNames: "[name][extname]",
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
  },
});
