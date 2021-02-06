<template>
    <MainPosterList>
        <div v-if="loading">
            Loading...
        </div>
        <div
            v-for="movie of movies"
            v-else
            :key="movie.id"
        >
            <img
                :src="movie.poster"
            >
        </div>
    </MainPosterList>
</template>

<script setup lang="ts">
import MainPosterList from '../components/MainPosterList.vue';

import { useMovies } from '../compositions/movies';

const { movies, loading } = useMovies();
</script>
