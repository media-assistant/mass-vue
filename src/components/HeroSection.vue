<template>
    <section
        class="wrapper"
        :style="`--background-image: ${src ? `url(${src})` : 'none'}; --gradient-cutoff: ${variant === 'compact' ? 40 : 100}%`"
    >
        <div
            class="inner pt-24 bg-gradient-to-t from-white dark:from-black to-current text-white text-opacity-25 dark:text-black dark:text-opacity-25"
        >
            <slot />
        </div>
    </section>
</template>

<style scoped lang="postcss">
.wrapper {
    background-position: center -50vh;
    background-repeat: no-repeat;
    background-image: var(--background-image);
}

.wrapper > :first-child {
    backdrop-filter: blur(35px);
}

/* FIXME: Workaround for https://github.com/tailwindlabs/tailwindcss/pull/2975 */
.dark .dark\:text-opacity-25 {
    --tw-text-opacity: 0.25;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

defineProps({
    src: String,
    variant: {
        default: 'default',
        type: String as PropType<'default' | 'compact'>,
    }
});
</script>