import { reactive, toRefs } from 'vue';
import { dataToInit, post } from '../plugins/fetch';
import { TORRENT_GET_DATA, TRANSMISSION_MAIN } from '../plugins/fetch/routes/transmission';

import type { Torrent } from '../types/transmission';

const store = reactive({
    torrents: [] as Torrent[],
    loading: false,
});

const fetchTorrents = async (): Promise<void> => {
    store.loading = true;
    store.torrents = await post<Torrent[]>(TRANSMISSION_MAIN, dataToInit(TORRENT_GET_DATA));
    store.loading = false;
};

const use_torrents = {
    ...toRefs(store),
    fetchTorrents,
};

export const useTorrents = (): typeof use_torrents => {
    return use_torrents;
};