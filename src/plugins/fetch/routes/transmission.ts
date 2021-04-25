export const TRANSMISSION_MAIN = '/transmission/rpc';

export const TORRENT_GET = 'torrent-get';
export const TORRENT_GET_DATA = {
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
};

