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
import { computed, watch } from 'vue';
import router from './plugins/router';
import { LOGIN } from './plugins/fetch/routes/mass-api';
import { useSession } from './compositions/session';

import GlobalNav from './components/GlobalNav.vue';

const { token, fetchSessionData } = useSession();

if (token.value === undefined) {
    void router.replace(LOGIN);
}

watch(() => token.value, (): void => {
    if (token.value !== undefined) {
        void fetchSessionData();
    }
}, { immediate: true });

const show_menu = computed(() => {
    const name = router.currentRoute.value.name;

    return name && name !== 'login';
});
</script>