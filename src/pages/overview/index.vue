<template>
    <h1 class="mt-12">
        Overview
    </h1>
    <p v-if="loading">
        Loading...
    </p>
    <p>
        <Table
            :items="torrents"
            :headers="['name', 'eta', 'down', 'up', 'size']"
        >
            <template #tr="{ item }">
                <td>{{ item.name }}</td>
                <td>{{ item.eta > 0 ? formatDuration(item.eta) : '?' }}</td>
                <td>{{ bytesPerSecond(item.rateDownload) }}</td>
                <td>{{ bytesPerSecond(item.rateUpload) }}</td>
                <td>{{ byte(item.sizeWhenDone) }}</td>
            </template>
        </Table>
    </p>
</template>

<script lang="ts" setup>
import { useTorrents } from '../../compositions/torrents';
import { byte, bytesPerSecond } from '../../plugins/filters/bytes';
import dateFnsFormatDuration from 'date-fns/formatDuration';

import Table from './../../components/Table.vue';

const { torrents, loading, fetchTorrents } = useTorrents();

const formatDuration = (duration: number): string => dateFnsFormatDuration(
    { seconds: duration },
    { format: [ 'days', 'hours', 'minutes', 'seconds' ]}
);

// TODO interval loading
void fetchTorrents();
</script>