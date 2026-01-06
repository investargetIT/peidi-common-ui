import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  build: {
    outDir: "views-dist", // 输出目录，与组件库打包目录区分
    // 使用应用模式打包，而不是库模式
    rollupOptions: {
      // 入口文件指向src/main.ts
      input: {
        main: "./index.html",
      },
    },
  },
});
