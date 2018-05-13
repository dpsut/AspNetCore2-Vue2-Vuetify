<template>
    <v-stepper v-model="e1">
        <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">User Agreement</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">Company</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">Goals</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4">Training</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="5">Next Steps</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1">
                <v-card color="blue-grey lighten-5" class="mx-5 px-5 pt-3">
                    <user-agreement></user-agreement>
                </v-card>
                <p class="text-xs-right mr-5 mt-3">
                    <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                </p>
            </v-stepper-content>
            <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-5"></v-card>
                <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-5"></v-card>
                <v-btn color="primary" @click.native="e1 = 4">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-5"></v-card>
                <v-btn color="primary" @click.native="e1 = 5">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>

<script>
    import userAgreement from "./survey/user-agreement";

    export default {
        components: {
            userAgreement
        },
        data() {
            return {
                e1: 0
            }
        },
    }
</script>

<style>
</style>
