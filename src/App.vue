<template>
    <global-nav v-if="show_menu">
        <router-link
            to="/"
        >
            Overview
        </router-link>
        <router-link
            to="/movies"
        >
            Movies
        </router-link>
        <router-link
            to="/shows"
        >
            Shows
        </router-link>
        <router-link
            to="/settings"
        >
            Settings
        </router-link>
    </global-nav>
    <router-view />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import router from './plugins/router';

import GlobalNav from './components/GlobalNav.vue';

const show_menu = computed(() => {
    if (router.currentRoute.value.name === 'login') {
        return false;
    }

    return true;
});
</script>