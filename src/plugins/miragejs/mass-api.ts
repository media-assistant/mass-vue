import { Server } from 'miragejs';
import { User } from '@/types/mass-api';
import { USER } from '@/plugins/fetch/routes/mass-api';

export const useSessionRoutes = (server: Server): void => {
    server.get(USER, (schema): User => {
        return schema.db.users.find(1) as User;
    });
};