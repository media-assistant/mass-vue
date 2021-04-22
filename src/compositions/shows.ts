import { computed } from '@vue/runtime-core';
import { useFetch } from '../plugins/fetch';
import { getShowIdUrl, SONARR_SERIES } from '../plugins/fetch/routes/sonarr';

import type { Show } from '../types/sonarr';

const {
    data,
    isFetching: loading,
    execute: fetchShows,
} = useFetch<Show[]>(SONARR_SERIES, { immediate: false });

const shows = computed({
    get(): Show[] {
        return data.value ? data.value : [];
    },
    set(value: Show[]) {
        data.value = value;
    },
});

const deleteShow = (show: Show): void => {
    useFetch(getShowIdUrl(show)).delete();

    shows.value = shows.value.filter(item => item.id === show.id);
};





const use_shows = {
    shows,
    loading,
    fetchShows,
    deleteShow,
};

export const useShows = (): typeof use_shows => {
    return use_shows;
};

export const useShow = (idToFind: number): Show | undefined => shows.value.find(({ id }) => {
    // FIXME: MirageJS returns strings as integers while the actual API returns a number. We're most likely better off moving away from MirageJS...
    if (typeof id === 'string') {
        return parseInt(id) === idToFind;
    }
    return id === idToFind;
});