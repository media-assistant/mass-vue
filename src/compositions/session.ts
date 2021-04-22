import { useFetch } from '../plugins/fetch';
import { USER } from '../plugins/fetch/routes/mass-api';
import type { User } from '../types/mass-api';

const {
    data: user,
    execute: fetchSessionData,
} = useFetch<User>(USER, { immediate: false });

const use_session = {
    user,
    fetchSessionData,
};

export const useSession = (): typeof use_session => {
    return use_session;
};