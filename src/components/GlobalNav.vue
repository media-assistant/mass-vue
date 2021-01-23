<template>
    <nav class="fixed w-screen flex items-center justify-center p-3 mx-auto my-0">
        <div class="flex items-center justify-evenly flex-wrap flex-auto max-w-xl">
            <slot />
        </div>
    </nav>
</template>

<!-- FIXME: @apply rules are being identified as horribly incorrect CSS. Probably want to adjust the rules. -->
<!-- TODO: Determine whether it's a best practice to style child elements, or to style the element being passed in itself -->
<style>
a {
    @apply px-3 py-2 rounded-full text-gray-400 items-center justify-center hover:bg-black hover:bg-opacity-80 hover:text-white;
}

a.router-link-active {
    @apply text-white bg-black bg-opacity-60;
}
</style>