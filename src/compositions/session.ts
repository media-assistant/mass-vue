import { reactive, toRefs } from 'vue';
import { get } from '../plugins/fetch';
import { USER } from '../plugins/fetch/routes/mass-api';
import type { User } from '../types/mass-api';

const store = reactive({
    user: undefined as undefined|User,
});

const fetchSessionData = async (): Promise<void> => {
    store.user = await get<User>(USER);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const useSession = () => {
    return {
        ...toRefs(store),
        fetchSessionData,
    };
};