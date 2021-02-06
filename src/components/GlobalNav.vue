<template>
    <nav class="absolute top-0 w-screen flex items-center justify-center p-3 mx-auto my-0">
        <div class="flex items-center justify-evenly flex-wrap flex-auto max-w-xl">
            <slot />
        </div>
    </nav>
</template>

<style lang="postcss" scoped>
a {
    @apply px-3 py-2 rounded-full text-gray-400 items-center justify-center hover:bg-black hover:bg-opacity-80 hover:text-white;
}

a.router-link-active {
    @apply text-white bg-black bg-opacity-60;
}
</style>