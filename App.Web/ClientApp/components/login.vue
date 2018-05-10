<template>
    <div>
        <h1>Login</h1>
        <v-btn @click="login">Login</v-btn>
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
                this.setAuthKey({ authKey: "admin" });
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
</style>
