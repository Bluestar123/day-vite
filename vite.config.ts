import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vuejsx from '@vitejs/plugin-vue-jsx'
import { join } from 'path'
import styleImport from 'vite-plugin-style-import'
import { viteMockServe } from 'vite-plugin-mock'
import myExample from './src/vite-plugins/example/index'
import myExample2 from './src/vite-plugins/example/index2'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    myExample2(),
    myExample({
      test: '我是test'
    }),
    vue(),
    viteMockServe({
      supportTs: true
    }),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ],
  base: './',
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: join(__dirname, 'src')
      },
      {
        find: 'styles',
        replacement: join(__dirname, 'styles')
      }
    ]
  },
  build: {
    outDir: 'vite-ts-admin'
  }
})
