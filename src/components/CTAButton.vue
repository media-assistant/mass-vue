<template>
    <button
        :class="['bg-blue-500', 'text-white', 'font-semibold', 'w-full', 'py-3', 'rounded-lg', 'inline-flex', 'justify-center', 'align-center',
                 'disabled:bg-gray-100', 'disabled:text-gray-400', 'disabled:cursor-not-allowed', 'relative', { 'is-loading': isLoading },
                 'overflow-hidden', 'outline-none']"
    >
        <slot />
    </button>
</template>

<style scoped lang="postcss">
/* TODO: Figure out why on earth adding this animation wont work when loading through tailwind.config.js */
button.is-loading:not(:disabled):after {
    @apply bg-blue-200 block h-1 absolute left-0 right-0 bottom-0 p-0;
    animation: loading 1s infinite;
    content: '';
}

@keyframes loading {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
      left: 0;
      right: 0;
  }
  100% {
      left: 100%;
      right: 0;
  }
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    isLoading: Boolean
});
</script>