import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "./store/index";
import { routes } from './routes'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes
})

let isAdmin = true;

router.beforeEach((to, from, next) => {
    if ((to.matched.some(record => record.meta.authGroup == 'anonymousUser') && store.state.authKey)) {
        next({
            path: '/',
            query: { redirect: to.fullPath }
        })

        return;
    }

    if ((to.matched.some(record => record.meta.authGroup == 'adminUser') && !isAdmin) ||
        (to.matched.some(record => record.meta.authGroup == 'authenticatedUser') && !store.state.authKey)) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
})

export default router
