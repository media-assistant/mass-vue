import { computed } from 'vue';
import { useFetch } from '../plugins/fetch';
import { getTorrentDeleteData, TORRENT_GET_DATA, TRANSMISSION_MAIN } from '../plugins/fetch/routes/transmission';

import type { Torrent } from '../types/transmission';

const {
    data,
    isFetching: loading,
    execute: fetchTorrents,
} = useFetch<Torrent[]>(TRANSMISSION_MAIN, { immediate: false }).post(TORRENT_GET_DATA);

const torrents = computed({
    get(): Torrent[] {
        return data.value ? data.value : [];
    },
    set(value: Torrent[]) {
        data.value = value;
    },
});

const deleteTorrent = (torrent: Torrent): void => {
    useFetch(TRANSMISSION_MAIN).post(getTorrentDeleteData(torrent));

    torrents.value = torrents.value.filter(item => item.id === torrent.id);
};




const use_torrents = {
    torrents,
    loading,
    fetchTorrents,
    deleteTorrent,
};

export const useTorrents = (): typeof use_torrents => {
    return use_torrents;
};