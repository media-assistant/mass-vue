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
    <div class="p-6 max-w-sm mx-auto mt-4 bg-white rounded-xl shadow-md flex items-center space-x-4">
        {{ movies }}
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { get } from '../plugins/fetch';

import { RADARR_MOVIES } from '../plugins/fetch/routes/radarr';
import { USER } from '../plugins/fetch/routes/mass-api';

import type { Movie } from '../types/radarr';
import type { User } from '../types/mass-api';

const movies = ref([] as Movie[]);
const user = ref(undefined as User|undefined);

onMounted((): void => {
    void get<Movie[]>(RADARR_MOVIES).then(data => movies.value = data);
    void get<User>(USER).then(data => user.value = data);
});
</script>
