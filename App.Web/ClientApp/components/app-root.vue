<template>
    <v-app>
        <v-toolbar v-if="authKey!=null">
            <v-toolbar app>
                <v-toolbar-title>App</v-toolbar-title>
                <v-spacer></v-spacer>
                <nav-menu params="route: route"></nav-menu>
            </v-toolbar>
        </v-toolbar>

        <v-content class="pt-0">
            <v-container> <!-- 'fluid' here breaks IE11-->
                <router-view style="padding:0px;"></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Vue from 'vue'
    import { mapActions, mapState } from 'vuex';
    import CounterExample from './counter-example'
    import Login from './login'
    import HomePage from './home-page'
    import NavMenu from './nav-menu'

    Vue.component('counter-example', CounterExample);
    Vue.component('login', Login);
    Vue.component('home-page', HomePage);
    Vue.component('nav-menu', NavMenu);

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapState({
                authKey: state => state.authKey
            })
        },
    }
</script>

<style scoped>
</style>
