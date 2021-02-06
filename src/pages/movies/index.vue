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
            <router-link :to="`/movies/${movie.id}/details`">
                <img
                    :src="movie.poster"
                >
            </router-link>
        </div>
    </MainPosterList>
</template>

<script setup lang="ts">
import MainPosterList from '../../components/MainPosterList.vue';

import { useMovies } from '../../compositions/movies';

const { movies, loading } = useMovies();
</script>
