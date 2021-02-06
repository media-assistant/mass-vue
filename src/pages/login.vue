<template>
    <div class="flex flex-col items-center">
        <div>
            <label
                class="mr-4"
                for="email"
            >Email</label>
            <input
                v-model="email"
                class="border"
                type="text"
                name="email"
            >
        </div>
        <div>
            <label
                class="mr-4"
                for="password"
            >Password</label>
            <input
                v-model="password"
                class="border"
                type="password"
                name="password"
            >
        </div>
        <div>
            <button
                @click="login"
            >
                Login
            </button>
        </div>
        <div>
            <span>{{ error }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useSession } from '../compositions/session';
import { dataToInit, post } from '../plugins/fetch';
import { HOME, TOKEN } from '../plugins/fetch/routes/mass-api';
import router from '../plugins/router';
import type { TokenResponse } from '../types/mass-api';

const email = ref('');
const password = ref('');
const error = ref('');

const login = async (): Promise<void> => {
    const { token } = useSession();

    try {
        const response = await post<TokenResponse>(TOKEN, dataToInit({
            email: email.value,
            password: password.value,
        }));

        error.value = '';
        token.value = response.token;

        void router.push(HOME);
    } catch (e) {
        error.value = (e as Error).message;
    }
};
</script>