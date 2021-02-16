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
            <MoviePoster
                class="w-2/5 inline-block mb-6"
                :src="movie.poster"
            />
            <h1 class="text-5xl font-bold mb-6 text-black dark:text-white">
                {{ movie.name }}
            </h1>
            <CTAButtonLink
                v-if="movie.youTubeTrailerId !== undefined"
                :href="`https://www.youtube.com/watch?v=${movie.youTubeTrailerId}`"
                class="mb-6"
                target="_blank"
            >
                <Icon :path="mdiPlay" />
                <span class="mx-1">
                    Watch trailer
                </span>
            </CTAButtonLink>
            <MovieRuntimeTags
                :runtime="movie.runtime"
                :genres="movie.genres.slice(0, 2)"
            />
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
    <StickyFooter>
        <CTAButton>
            Play movie
        </CTAButton>
    </StickyFooter>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { mdiChevronLeft, mdiPlay } from '@mdi/js';

import CTAButton from '../../../components/CTAButton.vue';
import CTAButtonLink from '../../../components/CTAButtonLink.vue';
import HeroSection from '../../../components/HeroSection.vue';
import Icon from '../../../components/Icon.vue';
import MoviePoster from '../../../components/MoviePoster.vue';
import MovieRuntimeTags from '../../../components/MovieRuntimeTags.vue';
import Nav from '../../../components/Nav.vue';
import NavButton from '../../../components/NavButton.vue';
import Section from '../../../components/Section.vue';
import StickyFooter from '../../../components/StickyFooter.vue';

import { useMovie } from '../../../compositions/movies';

const { id } = defineProps({
    id: {
        type: String,
        required: true
    }
});

const movie = useMovie(parseInt(id));
</script>
