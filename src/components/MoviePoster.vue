<template>
    <img
        :class="[{ 'rounded-xl': size !== 'small' }, { 'rounded-lg': size=== 'small' }, 'shadow-xl']"
        :src="src"
    >
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

defineProps({
    size: {
        default: 'medium',
        type: String as PropType<'small' | 'large'>,
    },
    src: {
        type: String,
        required: true
    }
});
</script>