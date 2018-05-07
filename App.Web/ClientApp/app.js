import Vue from 'vue'
import axios from 'axios'
import router from './router'
import App from 'components/app-root'
import './stylus/main.styl';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
Vue.prototype.$http = axios;

const app = new Vue({
    router,
    ...App
})

export {
    app,
    router
}
