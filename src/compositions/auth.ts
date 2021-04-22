import { useStorage } from '@vueuse/core';
import { TOKEN_KEY } from '../plugins/local-storage/keys';

const token = useStorage(TOKEN_KEY, undefined as undefined|string);

const use_auth = {
    token,
};

export const useAuth = (): typeof use_auth => {
    return use_auth;
};