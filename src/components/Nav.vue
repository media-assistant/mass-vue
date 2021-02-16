<template>
    <nav :class="['absolute', 'top-0', 'w-screen', 'flex', 'items-center', 'justify-center', 'p-3', 'mx-auto', 'my-0', 'z-50']">
        <div :class="['flex', 'items-center', {'justify-evenly': variant === 'center'}, 'flex-wrap', 'flex-auto', 'max-w-xl']">
            <slot />
        </div>
    </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const { variant } = defineProps({
    variant: {
        default: 'default',
        type: String as PropType<'center' | 'default'>,
    }
});
</script>