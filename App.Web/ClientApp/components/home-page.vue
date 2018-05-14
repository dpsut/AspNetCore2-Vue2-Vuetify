<template>
    <v-container fluid>
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
                    <v-flex xs12 offset-xs0 sm10 offset-sm1 md8 offset-md2 lg6 offset-lg3>
                        <user-agreement></user-agreement>
                        <p class="text-xs-right">
                            <v-btn color="primary" @click.native="e1 = 2">
                                Next<v-icon right>arrow_forward</v-icon>
                            </v-btn>
                        </p>
                    </v-flex>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <company-details></company-details>
                    <p class="text-xs-right">
                        <v-btn color="default" @click.native="e1 = 1">
                            <v-icon left>arrow_back</v-icon>Back
                        </v-btn>
                        <v-btn color="primary" @click.native="e1 = 3">
                            Next<v-icon right>arrow_forward</v-icon>
                        </v-btn>
                    </p>
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
    </v-container>
</template>

<script>
    import userAgreement from "./survey/user-agreement";
    import companyDetails from "./survey/company-details";

    export default {
        components: {
            userAgreement, companyDetails
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
