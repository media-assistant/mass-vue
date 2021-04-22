<template>
    <TempTable
        title="Shows"
        :items="shows"
        :headers="[
            {
                text: 'Name',
                value: 'name',
            },
            {
                text: 'Overview',
                value: 'overview',
            },
        ]"
        :loading="loading"
        @delete="deleteShow"
    />
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import TempTable from '../../components/TempTable.vue';
import { useShows } from '../../compositions/shows';

const { shows, loading, fetchShows, deleteShow } = useShows();

onMounted(() =>
    void fetchShows()
);
</script>
