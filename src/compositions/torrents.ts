import { reactive, toRefs } from 'vue';
import { post } from '../plugins/fetch';
import { getTorrentDeleteData, TORRENT_GET_DATA, TRANSMISSION_MAIN } from '../plugins/fetch/routes/transmission';

import type { Torrent } from '../types/transmission';

const state = reactive({
    torrents: [] as Torrent[],
    loading: false,
});

const fetchTorrents = async (): Promise<void> => {
    state.loading = true;

    state.torrents = await post<Torrent[]>(TRANSMISSION_MAIN, TORRENT_GET_DATA);

    state.loading = false;
};

const deleteTorrent = async (torrent: Torrent): Promise<void> => {
    await post(TRANSMISSION_MAIN, getTorrentDeleteData(torrent));

    state.torrents = state.torrents.filter(item => item.id === torrent.id);
};

const use_torrents = {
    ...toRefs(state),
    fetchTorrents,
    deleteTorrent,
};

export const useTorrents = (): typeof use_torrents => {
    return use_torrents;
};