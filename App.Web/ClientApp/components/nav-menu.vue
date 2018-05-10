<template>
    <v-toolbar-items>
        <v-btn flat :to="route.path" v-for="route in routes">
            <span :class="route.style"></span> {{ route.display }}
        </v-btn>
        {{authKey}}
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
    }
</script>

