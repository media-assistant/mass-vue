<template>
    <TempTable
        title="Movies"
        :items="movies"
        :headers="[
            {
                text: 'Name',
                value: 'name',
            },
            {
                text: 'Overview',
                value: 'overview',
            },
        ]"
        :loading="loading"
        @delete="deleteMovie"
    />
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import TempTable from '../../components/TempTable.vue';
import { useMovies } from '../../compositions/movies';

const { movies, loading, fetchMovies, deleteMovie } = useMovies();

onMounted(() =>
    void fetchMovies()
);
</script>
