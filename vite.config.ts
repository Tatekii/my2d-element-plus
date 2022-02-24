import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ViteRequireContext from '@originjs/vite-plugin-require-context'
import vueJsx from "@vitejs/plugin-vue-jsx"
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    AutoImport({
      resolvers: [ElementPlusResolver({
        // 排除我们自己全局注册的图标组件
        exclude: /^ElIcon/g
      })],
    }),
    Components({
      resolvers: [ElementPlusResolver(
        {
          // 排除我们自己全局注册的图标组件
          exclude: /^ElIcon/g
        }
      )],
    }),
    // 支持require context
    ViteRequireContext(
    )
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  }
})
