<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 class="mt-5">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-text-field v-model="credentials.email" @keyup.enter="login" prepend-icon="email" name="login" label="Login" type="text" autocomplete="off"></v-text-field>
                    <v-text-field v-model="credentials.password" @keyup.enter="login" id="password" prepend-icon="lock" name="password" label="Password" type="password" autocomplete="off"></v-text-field>
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
                credentials: {
                    email: "",
                    password: ""
                }
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
                this.$http.post('/Account/Login', this.credentials)
                    .then((result) => {
                        this.setAuthKey({ authKey: result.data });
                        this.$router.push('/')
                    })
                    .catch((error) => {
                        //TODO:
                        alert('login failed');
                    });
              
            }
        }
    }
</script>

<style scoped>
</style>
