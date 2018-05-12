import Vue from "vue"
import axios from "axios"
import VueAxios from 'vue-axios';
import { loadProgressBar } from 'axios-progress-bar';
import router from "./router"
import store from "./store"
import { sync } from "vuex-router-sync"
import App from "components/app-root"
import "./stylus/main.styl";
import Vuetify from "vuetify";

loadProgressBar();
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
sync(store, router);

const app = new Vue({
    store,
    router,
    ...App
});

export {
    app,
    router,
    store
}
