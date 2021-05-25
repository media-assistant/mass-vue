<template>
    <MainPosterList
        :items="movies"
        :loading="loading"
    />
    <Section>
        <h2 class="font-bold text-xl">
            Recently added
        </h2>
        <SmallPosterList
            :items="movies"
            :loading="loading"
        />
    </Section>
</template>

<script setup lang="ts">
import MainPosterList from '../../components/MainPosterList.vue';
import SmallPosterList from '../../components/SmallPosterList.vue';
import Section from '../../components/Section.vue';

import { useMovies } from '../../compositions/movies';

const { movies, loading, fetchMovies } = useMovies();

if (! movies.value.length) {
    void fetchMovies();
}
</script>
