<template>
    <router-link
        :class="['px-2', 'py-2', 'rounded-full', 'text-white', 'items-center', 'justify-center', { 'bg-black': variant === 'default' }, { 'bg-opacity-40': variant === 'default' }, {'hover:bg-black': variant === 'transparent'}, {'hover:bg-opacity-40': variant === 'transparent'}, {'hover:text-white': variant === 'transparent'}]"
    >
        <slot />
    </router-link>
</template>

<style lang="postcss" scoped>
.router-link-exact-active {
    @apply text-white bg-black bg-opacity-40;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const { variant } = defineProps({
    variant: {
        default: 'default',
        type: String as PropType<'transparent' | 'default'>
    }
});

console.log(variant);
</script>