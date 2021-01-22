<template>
    <h1> {{ msg }} </h1>

    <p>
        <a
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
        >Vite Documentation</a> |
        <a
            href="https://v3.vuejs.org/"
            target="_blank"
        >Vue 3 Documentation</a>
    </p>
    <p>
        Edit a file to see the Hot Module Replacement in action :D
    </p>
    <p>
        Clicks {{ count }}
    </p>
    <p>
        <button @click="increment">
            Increment
        </button>
    </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
    msg: {
        type: String,
        required: true,
    }
});

const count = ref(0);

const increment = (): number => count.value++;
</script>
