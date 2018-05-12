<template>
    <v-toolbar-items>
        <v-btn v-if="authKey!=null" flat exact to="/">
            <span></span> {{ 'Home' }}
        </v-btn>
        <v-btn v-if="authKey.roles.includes('admin')" flat to="/counter">
            <span></span> {{ 'Counter' }}
        </v-btn>
        <v-btn v-if="authKey!=null" flat @click="logout">
            Logout
        </v-btn>
    </v-toolbar-items>
</template>

<script>
    import { routes } from '../routes'
    import { mapActions, mapState } from 'vuex';

    export default {
        data() {
            return {
                routes
            }
        },
        computed: {
            ...mapState({
                authKey: state => state.authKey
            })
        },
        methods: {
            ...mapActions(['setAuthKey']),
            logout: function () {
                this.$http.post('/Account/Logout')
                    .then((result) => {
                        this.setAuthKey({ authKey: null });
                        this.$router.push('/login');
                    })
            }
        }
    }
</script>

