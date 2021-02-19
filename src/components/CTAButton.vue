<template>
    <button
        class="bg-blue-500 text-white font-semibold w-full py-3 rounded-lg flex justify-center align-center
        disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
    >
        <slot />
    </button>
</template>

<style scoped lang="postcss">

</style>

<script setup lang="ts">
// TODO: Add a disabled state to this button
// TODO: Add a progress slider to this button

// We can use the above to show the download progress if the current movie is still downloading and as such cannot be watched.
</script>