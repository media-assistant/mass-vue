<template>
    <ul class="inline-block">
        <li
            v-for="tag in tags"
            :key="tag"
            class="inline-block relative"
        >
            {{ tag }}
        </li>
    </ul>
</template>

<style scoped lang="postcss">
li:not(:first-child) {
    margin-left: 1rem;
}

li:not(:first-child):before {
    content: '\2022';
    position: absolute;
    left: -0.65rem;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

defineProps({
    tags: {
        required: true,
        type: Array as PropType<string[]>
    }
});
</script>