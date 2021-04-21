<template>
    <div class="grid grid-flow-col gap-6 overflow-auto py-2">
        <div v-if="loading">
            Loading...
        </div>
        <router-link
            v-for="item of items"
            v-else
            :key="item.id"
            :to="`/detail/${isMovie(item) ? 'movie' : 'serie'}/${item.id}`"
        >
            <MoviePoster
                size="small"
                :src="item.poster"
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
import { defineProps } from '@vue/runtime-core';
import type { PropType } from '@vue/runtime-core';
import type { Movie } from '../types/radarr';
import type { Show } from '../types/sonarr';

defineProps({
    items: {
        type: Array as PropType<Movie[]|Show[]>,
        required: true,
    },
    loading: {
        type: Boolean,
        default: false,
    },
});

import { useItem } from '../compositions/items';

const { isMovie } = useItem();
</script>