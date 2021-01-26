import { Server } from 'miragejs';
import { USER } from '../../plugins/fetch/routes/mass-api';

import type { User } from '../../types/mass-api';

export const useSessionRoutes = (server: Server): void => {
    server.get(USER, (schema): User => {
        return schema.db.users.find(1) as User;
    });
};