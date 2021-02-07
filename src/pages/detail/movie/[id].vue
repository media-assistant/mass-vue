<template>
    <Nav>
        <NavButton to="/overview/movies">
            <Icon :path="mdiChevronLeft" />
        </NavButton>
    </Nav>
    <HeroSection
        v-if="movie !== undefined"
        :src="movie.poster"
    >
        <div class="text-center">
            <img
                class="rounded-lg w-2/5 inline-block shadow-xl mb-6"
                :src="movie.poster"
            >
            <h1 class="text-5xl font-bold mb-6">
                {{ movie.name }}
            </h1>
            <CTABUttonLink
                v-if="movie.youTubeTrailerId !== undefined"
                :href="`https://www.youtube.com/watch?v=${movie.youTubeTrailerId}`"
                target="_blank"
            >
                <Icon :path="mdiPlay" />
                <span class="mx-1">
                    Watch trailer
                </span>
            </CTABUttonLink>
        </div>
    </HeroSection>
    <Section
        v-if="movie !== undefined"
    >
        <h3 class="text-xl font-bold">
            Overview
        </h3>
        <p>{{ movie.overview }}</p>
    </Section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { mdiChevronLeft, mdiPlay } from '@mdi/js';

import CTABUttonLink from '../../../components/CTAButtonLink.vue';
import HeroSection from '../../../components/HeroSection.vue';
import Icon from '../../../components/Icon.vue';
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
