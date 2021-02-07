<template>
    <HeroSection
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
        variant="compact"
    >
        <div class="grid grid-flow-col gap-10 overflow-auto px-16">
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
    </HeroSection>
</template>

<style lang="postcss" scoped>
.grid {
    grid-auto-columns: calc(100vw - 8rem);
}
</style>

<script setup lang="ts">
import HeroSection from './HeroSection.vue';
import MoviePosterLink from './MoviePosterLink.vue';

import { useMovies } from '../compositions/movies';


const { movies, loading } = useMovies();
</script>