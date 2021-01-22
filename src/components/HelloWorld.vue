<template>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img
                class="h-12 w-12"
                src="/assets/images/logo.png"
                alt="Vue Logo"
            >
        </div>
        <div>
            <div class="text-xl font-medium text-black">
                {{ msg }}
            </div>
            <p class="text-gray-500">
                Edit a file to see the Hot Module Replacement in action :D
            </p>
        </div>
    </div>
</template>

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
