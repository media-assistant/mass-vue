<template>
    <Section
        class="flex flex-col h-screen justify-center"
    >
        <div class="-mt-24">
            <h1
                class="text-black dark:text-white text-3xl font-bold text-center mb-10"
            >
                Media Assistant
            </h1>
            <div class="flex mb-6">
                <label
                    class="p-4 inline-block bg-gray-100 rounded-l-lg text-black font-semibold w-28"
                    for="email"
                >Email</label>
                <input
                    id="email"
                    v-model="email"
                    class="flex-auto bg-gray-100 rounded-r-lg focus:outline-none"
                    type="text"
                    name="email"
                    placeholder="hi@example.com"
                >
            </div>
            <div class="flex">
                <label
                    class="p-4 inline-block bg-gray-100 rounded-l-lg text-black font-semibold w-28"
                    for="password"
                >Password</label>
                <input
                    id="password"
                    v-model="password"
                    class="flex-auto bg-gray-100 rounded-r-lg focus:outline-none"
                    type="password"
                    name="password"
                    placeholder="super-secure-password"
                >
            </div>
        </div>
    </Section>
    <FixedFooter>
        <CTAButton
            :disabled="email !== '' && password !== ''"
            @click="login"
        >
            Login
        </CTAButton>
        <!-- <div class="text-center">
            Forgot password?
        </div> -->
    </FixedFooter>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CTAButton from '../components/CTAButton.vue';
import Section from '../components/Section.vue';
import FixedFooter from '../components/FixedFooter.vue';
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