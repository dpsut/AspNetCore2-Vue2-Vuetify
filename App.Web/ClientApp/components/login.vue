<template>
    <div>
        <h1>Login</h1>
        <button @click="login">Login</button>
        <button @click="logout">Logout</button>
        {{authKey}}
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

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
        methods: {
            ...mapActions(['setAuthKey']),
            login: function () {
                this.setAuthKey({ authKey: "jsiaojasdo" });
            },
            logout: function () {
                this.setAuthKey({ authKey: null });
            }
        }
    }
</script>

<style scoped>
</style>
