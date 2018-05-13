<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 class="mt-5">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model.lazy="credentials.email" @keyup.enter="login" data-vv-validate-on="blur"
                                      v-validate="'required|email'" data-vv-as="email address" data-vv-name="credentials.email" required
                                      :error-messages="errors.collect('credentials.email')"
                                      prepend-icon="email" name="email" label="Email" type="text"></v-text-field>
                        <v-text-field v-model.lazy="credentials.password" @keyup.enter="login" data-vv-validate-on="blur"
                                      v-validate="'required|max:30'" data-vv-as="password" data-vv-name="credentials.password" required
                                      :error-messages="errors.collect('credentials.password')"
                                      id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                    </v-form>
                    <v-alert :value="loginFailed" outline color="error" icon="warning">
                        You have entered an invalid email or password
                    </v-alert>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="login" :loading="isLoggingIn" :disabled="isLoggingIn" color="primary">Login</v-btn>
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
                },
                isLoggingIn: false,
                loginFailed: false
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
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.isLoggingIn = true;
                        this.$http.post('/Account/Login', this.credentials)
                            .then((result) => {
                                this.setAuthKey({ authKey: result.data });
                                this.$router.push('/')
                                this.isLoggingIn = false;
                                this.loginFailed = false;
                            })
                            .catch((error) => {
                                this.loginFailed = true;
                                this.isLoggingIn = false;
                            });
                    }
                });
            }
        }
    }
</script>

<style scoped>
</style>
