<template>
    <div class="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="grid grid-flow-row">
            <h1 class="text-3xl mb-4">
                Movies
            </h1>
            <div v-if="loading">
                Loading...
            </div>
            <template v-else>
                <div
                    v-for="movie of movies"
                    :key="movie.id"
                    class="flex"
                >
                    {{ movie.name }} ({{ movie.year }})
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMovies } from '../compositions/movies';

const {
    movies,
    loading,
    fetchMovies
} = useMovies();

onMounted(() => {
    void fetchMovies();
});
</script>