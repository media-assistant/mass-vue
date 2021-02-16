<template>
    <svg
        viewBox="0 0 24 24"
        :fill="fill"
        :height="size"
        :width="size"
    >
        <path :d="path" />
    </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    size: {
        type: [String, Number],
        default: 24
    },
    fill: {
        type: String,
        default: 'currentColor',
    },
    rotate: {
        type: Number,
        default: 0
    },
    path: {
        type: String,
        required: true
    }
});
</script>