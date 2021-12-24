import {App} from "vue";
import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw,
    RouterOptions,
} from "vue-router";
import {routerMode} from '@/config'
const routes:Array<RouteRecordRaw> = [
    {
        path: "/login", name: "login", meta: { title: '登录'},
        component: () => import('@/views/login/index.vue')

    }
]

const router = createRouter({
    history: routerMode === 'history' ? createWebHistory() : createWebHashHistory(),
    routes
} as RouterOptions)

router.afterEach((to,from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

const setupRouter = (app:App) => {
    // setAddRoute(app,router)
    app.use(router)
}
export default router
export {
    setupRouter
}
