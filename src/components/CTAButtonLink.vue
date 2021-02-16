<template>
    <a
        :class="['inline-flex', 'px-2', 'py-2', 'rounded-full', 'text-white', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-40', 'dark:bg-white', 'dark:bg-opacity-40']"
    ><slot /></a>
</template>

<style scoped lang="postcss">
/* FIXME: Workaround for https://github.com/tailwindlabs/tailwindcss/pull/2975 */
.dark .dark\:bg-opacity-40 {
    --tw-bg-opacity: 0.4;
}
</style>