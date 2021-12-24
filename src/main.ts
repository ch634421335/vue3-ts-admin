import { createApp } from 'vue'
import App from './App.vue'
import mitt from "mitt";
import router from "@/router";
import setupInit from '@/utils/setupInit'
import "@/style/index.less"

const app = createApp(App)
app.provide("$mitt",mitt())
setupInit(app)
router.isReady().then(() => {
    app.mount('#app')
})
window.__app__ = app
