<template>
    <div class="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img
                class="h-12 w-12"
                src="/assets/images/logo.png"
                alt="Vue Logo"
            >
        </div>
        <div>
            <div class="text-xl font-medium text-black">
                Hallo {{ user?.name }}
            </div>
            <p class="text-gray-500">
                Edit a file to see the Hot Module Replacement in action :D
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSession } from '../compositions/session';

const { user } = useSession();
</script>
