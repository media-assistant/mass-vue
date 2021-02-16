<template>
    <section class="px-6 text-black dark:text-white">
        <slot />
    </section>
</template>

<style scoped lang="postcss">
section + section {
@apply mt-6;
}
</style>