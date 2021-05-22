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
        <div
            v-if="error !== ''"
            class="px-2 py-1 leading-normal text-red-700 bg-red-100 rounded-md mb-2"
            role="alert"
        >
            <p>
                <strong>Error logging you in: </strong>
                {{ error }}
            </p>
        </div>
        <CTAButton
            :disabled="email === '' || password === ''"
            :is-loading="busy === true"
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
import { computed, ref, watch } from 'vue';
import { HOME, TOKEN } from '../plugins/fetch/routes/mass-api';
import router from '../plugins/router';

import { useFetch } from '../plugins/fetch/index';
import { useAuth } from '../compositions/auth';

import CTAButton from '../components/CTAButton.vue';
import Section from '../components/Section.vue';
import FixedFooter from '../components/FixedFooter.vue';

import type { TokenResponse } from '../types/mass-api';

const email = ref('');
const password = ref('');
const error = ref('');
const busy = ref(false);

const login = (): void => {
    const {
        data,
    } = useFetch<TokenResponse>(TOKEN, {immediate: true}).post({
        email: email.value,
        password: password.value,
    });

    watch(() => data.value, (new_value) => {
        console.log(new_value);

        if (new_value?.token) {
            const { token } = useAuth();
            token.value = new_value?.token;
        }
    });
};

// const login = (): void => {



//     console.log(isFinished.value);

//     watch(() => isFinished.value, () => {
//         if (!isFinished.value) {
//             return;
//         }
//         console.log(isFinished.value);

//         if (statusCode.value !== 200) {
//             console.log(data.value);
//             console.log(data.value?.message);

//             if (data.value !== null) {

//                 error.value = String(data.value.message);
//             }

//             busy.value = false;
//             return;
//         }

//         token.value = data.value?.token;

//         void router.push(HOME);
//         busy.value = false;
//     });
// };

</script>