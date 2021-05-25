import { json } from '..';
import type { Torrent } from '../../../types/transmission';

export const TRANSMISSION_MAIN = '/transmission/rpc';

export const TORRENT_GET = 'torrent-get';
export const TORRENT_GET_DATA = json({
    'method': TORRENT_GET,
    'arguments': {
        'fields': [
            'id',
            'error',
            'errorString',
            'eta',
            'isFinished',
            'isStalled',
            'leftUntilDone',
            'percentDone',
            'queuePosition',
            'rateDownload',
            'rateUpload',
            'sizeWhenDone',
            'status',
        ],
        'ids': 'recently-active'
    }
});

export const getTorrentDeleteData = (torrent: Torrent): RequestInit => {
    return json({
        'method': 'torrent-remove',
        'arguments': {
            'ids': [torrent.id],
            'delete-local-data': true,
        },
    });
};

