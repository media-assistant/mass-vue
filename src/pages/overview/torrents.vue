<template>
    <h1 class="mt-12">
        Overview
    </h1>
    <p v-if="loading">
        Loading...
    </p>
    <p>
        <Table :headers="['name', 'eta', 'down', 'up', 'size']">
            <template #tbody>
                <tr
                    v-for="torrent in torrents"
                    :key="torrent.id"
                >
                    <td>{{ torrent.name }}</td>
                    <td>{{ torrent.eta > 0 ? formatDuration(torrent.eta) : '?' }}</td>
                    <td>{{ bytesPerSecond(torrent.rateDownload) }}</td>
                    <td>{{ bytesPerSecond(torrent.rateUpload) }}</td>
                    <td>{{ byte(torrent.sizeWhenDone) }}</td>
                </tr>
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

void fetchTorrents();
</script>