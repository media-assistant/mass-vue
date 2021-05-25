<template>
    <main class="bg-white dark:bg-black min-h-screen">
        <router-view />
    </main>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import router from './plugins/router';
import { LOGIN } from './plugins/fetch/routes/mass-api';
import { useSession } from './compositions/session';
import { useAuth } from './compositions/auth';

const { user, fetchSessionData } = useSession();
const { token } = useAuth();

if (token.value === undefined && router.currentRoute.value.path !== LOGIN) {
    void router.replace(LOGIN);
}

watch(() => token.value, (): void => {
    if (token.value !== undefined && user.value === null) {
        void fetchSessionData().catch(() => {
            token.value = undefined;
            void router.push(LOGIN);
        });
    }
}, { immediate: true });
</script>