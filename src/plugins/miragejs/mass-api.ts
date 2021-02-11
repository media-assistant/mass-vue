import { Server } from 'miragejs';
import { TOKEN, USER } from '../../plugins/fetch/routes/mass-api';

import type { TokenResponse, User } from '../../types/mass-api';

export const useSessionRoutes = (server: Server): void => {
    server.get(USER, (schema): User => {
        return schema.db.users.find(1) as User;
    });
    server.post(TOKEN, (schema): TokenResponse => {
        return schema.db.tokens.findBy({token: 'TOKEN'}) as TokenResponse;
    });
};