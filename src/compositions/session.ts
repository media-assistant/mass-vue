import { reactive, toRefs } from 'vue';
import { get } from '../plugins/fetch';
import { USER } from '../plugins/fetch/routes/mass-api';
import type { User } from '../types/mass-api';

const state = reactive({
    user: null as null|User,
});

const fetchSessionData = async (): Promise<void> => {
    state.user = await get<User>(USER);
};

const use_session = {
    ...toRefs,
    fetchSessionData,
};

export const useSession = (): typeof use_session => {
    return use_session;
};