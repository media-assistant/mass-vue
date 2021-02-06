<template>
    <Nav>
        <NavButton to="/overview/movies">
            <!-- TODO: Extract icon to its own component  -->
            <svg
                style="width:24px;height:24px"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
                />
            </svg>
        </NavButton>
    </Nav>
    <div class="wrapper">
        <Section
            v-if="movie !== undefined"
            class="pt-24 text-center"
        >
            <img
                class="rounded-lg w-2/5 inline-block shadow-xl mb-6"
                :src="movie.poster"
            >
            <h1 class="text-5xl font-bold">
                {{ movie.name }}
            </h1>
            <CTABUtton>Watch trailer</CTABUtton>
        </Section>
    </div>
    <Section>
        <h3>Overview</h3>
        <!-- TODO: Don't hardcode this text -->
        <p>The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.</p>
    </Section>
</template>

<style scoped lang="postcss">
.wrapper {
    background-position: center -50vh;
    background-repeat: no-repeat;
    /* TODO: Use dynamic image */
    background-image: url(https://i.kym-cdn.com/photos/images/newsfeed/001/555/890/09e.jpg);
}

.wrapper > :first-child {
    backdrop-filter: blur(35px);
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,1));
    grid-auto-columns: calc(100vw - 8rem);
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';

import CTABUtton from '../../../components/CTAButton.vue';
import Nav from '../../../components/Nav.vue';
import NavButton from '../../../components/NavButton.vue';
import Section from '../../../components/Section.vue';

import { useMovie } from '../../../compositions/movies';

const { id } = defineProps({
    id: {
        type: String,
        required: true
    }
});

const movie = useMovie(parseInt(id));
</script>
