<template>
    <router-link
        class=" shadow-xl"
        :to="`/detail/movie/${movie.id}`"
    >
        <img
            :alt="movie.name"
            class="rounded-xl"
            :src="movie.poster"
        >
    </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { Movie } from '../types/radarr';

const { movie } = defineProps({
    movie: {
        type: Object as PropType<Movie>,
        required: true
    }
});
</script>