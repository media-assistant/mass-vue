import { reactive, toRefs } from 'vue';
import { get } from '../plugins/fetch';
import { SONARR_SERIES } from '../plugins/fetch/routes/sonarr';

import type { Show } from '../types/sonarr';

const store = reactive({
    shows: [] as Show[],
    loading: false,
});

const fetchShows = async (): Promise<void> => {
    store.loading = true;
    store.shows = await get<Show[]>(SONARR_SERIES);
    store.loading = false;
};

const use_shows = {
    ...toRefs(store),
    fetchShows,
};

export const useShows = (): typeof use_shows => {
    return use_shows;
};

export const useShow = (idToFind: number): Show | undefined => store.shows.find(({ id }) => {
    // FIXME: MirageJS returns strings as integers while the actual API returns a number. We're most likely better off moving away from MirageJS...
    if (typeof id === 'string') {
        return parseInt(id) === idToFind;
    }
    return id === idToFind;
});