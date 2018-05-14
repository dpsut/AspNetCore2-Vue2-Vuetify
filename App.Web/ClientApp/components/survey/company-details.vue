<template>
    <v-container grid-list-xl fluid>
        <v-layout wrap>
            <v-flex xs12>
                <h1>Company Details</h1>
                <v-text-field label="Company Name" hint="Some text explaing what a company name is" persistent-hint></v-text-field>
            </v-flex>
            <v-flex xs12>
                <v-text-field v-model="description" label="Some Descriptive Thing"
                              hint="Some text explaing what a descriptive thing is"
                              multi-line :rows="2" persistent-hint auto-grow></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                agreed: false,
                description: ""
            }
        },
    }
</script>

<style scoped>

</style>
