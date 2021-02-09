<template>
    <main class="bg-white dark:bg-black">
        <router-view />
    </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useSession } from './compositions/session';
import { useMovies } from './compositions/movies';

const { fetchMovies } = useMovies();
const { fetchSessionData } = useSession();

void fetchSessionData();

onMounted(() => {
    void fetchMovies();
});
</script>