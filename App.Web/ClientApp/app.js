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
import VeeValidate from 'vee-validate';

loadProgressBar();
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(VeeValidate);
sync(store, router);

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 403 || error.response.status === 401) {
        store.state.authKey = null;
        router.push("/login");
    } else {
        return Promise.reject(error);
    }
});

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
