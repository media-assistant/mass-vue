<template>
    <main class="bg-white dark:bg-black min-h-screen">
        <router-view />
    </main>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import router from './plugins/router';
import { LOGIN } from './plugins/fetch/routes/mass-api';
import { useSession } from './compositions/session';
import { useMovies } from './compositions/movies';

const { fetchMovies } = useMovies();
const { token, fetchSessionData } = useSession();

if (token.value === undefined) {
    void router.replace(LOGIN);
}

watch(() => token.value, (): void => {
    if (token.value !== undefined) {
        void fetchSessionData();
    }
}, { immediate: true });

onMounted(() => {
    void fetchMovies();
});
</script>