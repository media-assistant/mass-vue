<template>
    <div class="text-center text-sm text-gray-400">
        <span>{{ runtime }} min</span>
        <HorizontalTagsList
            :tags="genres.slice(0, 2)"
        />
    </div>
</template>

<style scoped lang="postcss">
span {
    @apply mr-6;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

import HorizontalTagsList from './HorizontalTagsList.vue';

defineProps({
    genres: {
        type: Array as PropType<string[]>,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    }
});
</script>