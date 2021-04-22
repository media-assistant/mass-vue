<template>
    <TempTable
        title="Downloads"
        :items="torrents"
        :headers="[
            {
                text: 'Name',
                value: 'name',
            },
            {
                text: 'ETA',
                value: 'eta',
            },
            {
                text: 'Down',
                value: 'down',
            },
            {
                text: 'Up',
                value: 'up',
            },
            {
                text: 'Size',
                value: 'size',
            },
        ]"
        :loading="loading"
        @delete="deleteTorrent"
    />
</template>

<script lang="ts" setup>
import TempTable from './../../components/TempTable.vue';
import { useTorrents } from '../../compositions/torrents';
import { onMounted } from '@vue/runtime-core';

const { torrents, loading, fetchTorrents, deleteTorrent } = useTorrents();

onMounted(() =>
    void fetchTorrents()
);
</script>