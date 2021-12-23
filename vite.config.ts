import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import styleImport from 'vite-plugin-style-import'

const path = require('path')
// https://vitejs.dev/config/

export default ({mode}: { mode:any}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd())}

  let build: any = {
    minify: false,
    outDir: process.env.VITE_MODE,//打包文件名称
    assDir: "assets",//打包静态文件的存储地址
  }
  if(mode === 'production'){
    build.roolupOtions = {
      input: {
        example: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          "vxe-table": ['vxe-table'],
          "echarts": ["echarts"],
          "xe-utils": ["xe-utils"],
          "lodash": ["loadsh"],
        }
      }
    }
  }
  return defineConfig({
    base: './',
    plugins: [vue(), vueJsx(), styleImport({
      libs: [
        {
          libraryName: 'vxe-table',
          esModule: true,
          resolveComponent: (name) => `vxe-table/es/${name}`,
          resolveStyle: (name) => `vxe-table/es/${name}`
        }
      ]
    }),
        viteCompression(),//开启压缩
    ],
    resolve:{
      alias: {
        "@": path.resolve(__dirname, 'src'),
        "__ROOT__": path.resolve(__dirname, ""),
        "comps": path.resolve(__dirname,"src/components")
      }
    },
    // server: {
    //   host: '0.0.0.0',
    //   port: 8290,
    //   https: false,
    //   proxy: {
    //     '^/api': {
    //       target: 'http://127.0.0.1:7001',
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, '')
    //     }
    //   }
    // },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // ...theme
          },
          javascriptEnabled: true
        }
      }
    },
    build
  })
}
