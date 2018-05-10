<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 class="mt-5">
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field prepend-icon="email" name="login" label="Login" type="text"></v-text-field>
                        <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="login" color="primary">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
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
