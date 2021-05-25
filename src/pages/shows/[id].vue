<template>
    {{ shows }}
</template>

<script lang="ts" setup>
import { useShows } from '../../compositions/shows';

const { shows } = useShows();
</script>