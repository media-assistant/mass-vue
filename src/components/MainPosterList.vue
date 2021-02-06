<template>
    <div class="p-6 pt-24">
        <div class="grid gap-6 grid-cols-6">
            <slot />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.grid > *,
.grid img {
    @apply rounded-lg;
}
</style>