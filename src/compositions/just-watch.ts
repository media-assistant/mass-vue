import { reactive, toRefs } from 'vue';
import { justWatchUrl } from '../plugins/fetch/routes/just-watch';
import type { JustWatchItem, JustWatchResult, JustWatchType } from '../types/just-watch';

// TODO change to mass-api version
const store = reactive({
    item: null as JustWatchItem|null,
    loading: false,
});

const search = async (search: string, type: JustWatchType): Promise<void> => {
    store.loading = true;

    const data = (await (await fetch(justWatchUrl(search, type))).json()) as JustWatchResult;
    store.item = data.items[0];

    store.loading = false;
};

const use_just_watch = {
    ...toRefs(store),
    search,
};

export const useJustWatch = (): typeof use_just_watch => {
    return use_just_watch;
};