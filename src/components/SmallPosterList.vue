<template>
    <div class="grid grid-flow-col gap-6 overflow-auto py-2">
        <div v-if="loading">
            Loading...
        </div>
        <router-link
            v-for="movie of movies"
            v-else
            :key="movie.id"
            :to="`/detail/movie/${movie.id}`"
        >
            <MoviePoster
                size="small"
                :src="movie.poster"
            />
        </router-link>
    </div>
</template>

<style lang="postcss" scoped>
.grid {
    grid-auto-columns: calc((100vw - 6rem) / 3);
}
</style>

<script setup lang="ts">
import { useMovies } from '../compositions/movies';

import MoviePoster from './MoviePoster.vue';

const { movies, loading } = useMovies();
</script>