<template>
    <MainPosterList
        :items="shows"
        :loading="loading"
    />
    <Section>
        <h2 class="font-bold text-xl">
            Recently added
        </h2>
        <SmallPosterList
            :items="shows"
            :loading="loading"
        />
    </Section>
</template>

<script setup lang="ts">
import MainPosterList from '../../components/MainPosterList.vue';
import SmallPosterList from '../../components/SmallPosterList.vue';
import Section from '../../components/Section.vue';

import { useShows } from '../../compositions/shows';

const { shows, loading } = useShows();
</script>
