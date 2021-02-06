<template>
    <div class="wrapper">
        <div class="grid grid-flow-col gap-10 overflow-auto px-16 pt-24 pb-12">
            <div v-if="loading">
                Loading...
            </div>
            <movie-poster-link
                v-for="movie of movies"
                v-else
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.wrapper {
    background-position: center -50vh;
    background-repeat: no-repeat;
    /* TODO: Use dynamic image */
    background-image: url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg);
}

.wrapper > :first-child {
    backdrop-filter: blur(80px);
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(255,255,255,1) 40%);
    grid-auto-columns: calc(100vw - 8rem);
}
</style>

<script setup lang="ts">
import { useMovies } from '../compositions/movies';

import MoviePosterLink from './MoviePosterLink.vue';

const { movies, loading } = useMovies();
</script>