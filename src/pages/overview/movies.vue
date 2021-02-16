<template>
    <MainPosterList />
    <Section>
        <h2 class="font-bold text-xl">
            Recently added
        </h2>
        <SmallPosterList />
    </Section>
</template>

<script setup lang="ts">
import MainPosterList from '../../components/MainPosterList.vue';
import SmallPosterList from '../../components/SmallPosterList.vue';
import Section from '../../components/Section.vue';
</script>
