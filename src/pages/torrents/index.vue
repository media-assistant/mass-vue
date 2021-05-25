<template>
    {{ torrents }}
</template>

<script lang="ts" setup>
import { useTorrents } from '../../compositions/torrents';

const { torrents, fetchTorrents } = useTorrents();

if (! torrents.value.length) {
    void fetchTorrents();
}
</script>