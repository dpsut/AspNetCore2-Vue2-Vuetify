import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './routes'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes
})

let isAdmin = true;
let isAuthenticated = true;

router.beforeEach((to, from, next) => {
    if ((to.matched.some(record => record.meta.authGroup == 'adminUser') && !isAdmin) ||
        (to.matched.some(record => record.meta.authGroup == 'authenticatedUser') && !isAuthenticated)) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
})

export default router
