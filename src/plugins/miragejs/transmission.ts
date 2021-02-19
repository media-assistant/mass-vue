import { Server } from 'miragejs';
import DbCollection from 'miragejs/db-collection';
import { PostData } from '../../types/transmission';
import { TORRENT_GET, TRANSMISSION_MAIN } from '../fetch/routes/transmission';

export const useTransmissionRoutes = (server: Server): void => {
    server.post(TRANSMISSION_MAIN, (schema, request): DbCollection => {
        const post_data = JSON.parse(request.requestBody) as PostData;

        switch (post_data.method) {
        case TORRENT_GET:
            return schema.db.torrents;

        default:
            throw new Error(`Post data method (${post_data.method}) not recognized in MirageJS config.`);
        }
    });
};