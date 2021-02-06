<template>
    <div v-if="movie !== undefined">
        <h1>{{ movie.name }}</h1>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import { useMovie } from '../../../compositions/movies';

const { id } = defineProps({
    id: {
        type: String,
        required: true
    }
});

const movie = useMovie(parseInt(id));
</script>
