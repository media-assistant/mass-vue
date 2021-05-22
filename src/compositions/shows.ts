import { reactive, toRefs } from 'vue';
import { del, get } from '../plugins/fetch';
import { getShowIdUrl, SONARR_SERIES } from '../plugins/fetch/routes/sonarr';

import type { Show } from '../types/sonarr';

const state = reactive({
    shows: [] as Show[],
    loading: false,
});

const fetchShows = async (): Promise<void> => {
    state.loading = true;

    state.shows = await get<Show[]>(SONARR_SERIES);

    state.loading = false;
};

const deleteShow = async (show: Show): Promise<void> => {
    await del(getShowIdUrl(show));

    state.shows = state.shows.filter(item => item.id === show.id);
};

const use_shows = {
    ...toRefs(state),
    fetchShows,
    deleteShow,
};

export const useShows = (): typeof use_shows => {
    return use_shows;
};

export const useShow = (idToFind: number): Show | undefined => state.shows.find(({ id }) => {
    // FIXME: MirageJS returns strings as integers while the actual API returns a number. We're most likely better off moving away from MirageJS...
    if (typeof id === 'string') {
        return parseInt(id) === idToFind;
    }
    return id === idToFind;
});