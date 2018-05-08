<template>
    <v-toolbar-items>
        <v-btn flat :to="route.path" v-for="route in routes">
            <span :class="route.style"></span> {{ route.display }}
        </v-btn>
    </v-toolbar-items>
</template>

<script>
import { routes } from '../routes'

export default {
    data() {
        return {
            routes
        }
    }
}
</script>

