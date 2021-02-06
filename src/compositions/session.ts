import { reactive, toRefs, watch } from 'vue';
import { get } from '../plugins/fetch';
import { USER } from '../plugins/fetch/routes/mass-api';
import { getStorage, setStorage } from '../plugins/local-storage';
import { TOKEN_KEY } from '../plugins/local-storage/keys';
import type { User } from '../types/mass-api';

const store = reactive({
    user: undefined as undefined|User,
    token: getStorage<string|undefined>(TOKEN_KEY, undefined),
});

const fetchSessionData = async (): Promise<void> => {
    store.user = await get<User>(USER);
};

watch(() => store.token, (): void => {
    setStorage<string|undefined>(TOKEN_KEY, store.token);
});

const use_session = {
    ...toRefs(store),
    fetchSessionData
};

export const useSession = (): typeof use_session => {
    return use_session;
};