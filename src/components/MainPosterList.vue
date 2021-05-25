<template>
    <HeroSection
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
        variant="compact"
    >
        <div class="grid grid-flow-col gap-10 overflow-auto px-16">
            <div v-if="loading">
                Loading...
            </div>
            <router-link
                v-for="item of items"
                v-else
                :key="item.id"
                :to="itemLink(item)"
            >
                <Poster :src="item.poster" />
            </router-link>
        </div>
    </HeroSection>
</template>

<style lang="postcss" scoped>
.grid {
    grid-auto-columns: calc(100vw - 8rem);
}
</style>

<script setup lang="ts">
import { defineProps } from '@vue/runtime-core';
import type { PropType } from '@vue/runtime-core';
import type { Movie } from '../types/radarr';
import type { Show } from '../types/sonarr';

import HeroSection from './HeroSection.vue';
import Poster from './Poster.vue';

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

const { itemLink } = useItem();
</script>