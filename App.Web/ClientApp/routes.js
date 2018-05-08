import CounterExample from 'components/counter-example'
import Login from 'components/login'
import HomePage from 'components/home-page'

export const routes = [
    {
        path: '/',
        component: HomePage,
        display: 'Home',
        meta: { authGroup: 'authenticatedUser' }
    },
    {
        path: '/counter',
        component: CounterExample,
        display: 'Counter',
        meta: { authGroup: 'adminUser' }
    },
    {
        path: '/login',
        component: Login,
        display: 'Login',
        meta: { authGroup: 'anonymousUser' }
    }
]
