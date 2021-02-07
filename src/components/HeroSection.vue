<template>
    <section
        class="wrapper"
        :style="`--background-image: url(${src}); --gradient-cutoff: ${variant === 'compact' ? 40 : 100}%`"
    >
        <div class="inner pt-24">
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
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1) var(--gradient-cutoff));
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

defineProps({
    src: {
        type: String,
        required: true
    },
    variant: {
        default: 'default',
        type: String as PropType<'default' | 'compact'>,
    }
});
</script>