<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12 sm8 md6>
                    <v-select :items="states"
                              v-model="selectedStates"
                              label="Select"
                              multiple
                              max-height="400"
                              hint="Pick your favorite states"
                              item-value="id"
                              item-text="label"
                              persistent-hint></v-select>
                </v-flex> 
            </v-layout>
            <v-layout row>
                <v-flex xs10 offset-xs1>
                    <v-icon large color="blue darken-2">mdi-mouse</v-icon>
                    <v-text-field id="testing" name="input-1" label="Label Text" hint="For example, flowers or used cars. Or a long text which might go on for quite a time and might need to wrap in an ideal world." persistent-hint></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs4>
                    <v-subheader>Focus</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-text-field name="input-2" label="Label Text" value="Input text" class="input-group--focused"></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs4>
                    <v-subheader>Normal with input text + label</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-text-field name="input-3" label="Label Text" value="Input text"></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs4>
                    <v-subheader>Disabled</v-subheader>
                </v-flex>
                <v-flex xs8>
                    <v-text-field name="input-3" label="Label Text" value="Input text" disabled></v-text-field>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        data() {
            return {
                autoCount: 0,
                states: [
                    { id: 1, label: 'S1' },
                    { id: 2, label: 'S2' },
                    { id: 3, label: 'S3' },
                    { id: 4, label: 'S4' },
                    { id: 5, label: 'S5' }
                ],
                selectedStates: []
            }
        },

        computed: {
            ...mapState({
                currentCount: state => state.counter
            })
        },

        methods: {
            ...mapActions(['setCounter']),

            incrementCounter: function () {
                var counter = this.currentCount + 1;
                this.setCounter({ counter: counter });
            },
            resetCounter: function () {
                this.setCounter({ counter: 0 });
                this.autoCount = 0;
            }
        },

        created() {
            setInterval(() => {
                this.autoCount += 1
            }, 1000)
        }
    }
</script>
<style>

</style>
