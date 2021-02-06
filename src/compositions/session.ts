import { reactive, toRefs } from 'vue';
import { get } from '../plugins/fetch';
import { USER } from '../plugins/fetch/routes/mass-api';

import type { User } from '../types/mass-api';

const store = reactive({
    user: undefined as undefined|User,
    token: undefined as undefined|string,
});

const fetchSessionData = async (): Promise<void> => {
    store.user = await get<User>(USER);
};

const use_session = {
    ...toRefs(store),
    fetchSessionData
};

export const useSession = (): typeof use_session => {
    return use_session;
};