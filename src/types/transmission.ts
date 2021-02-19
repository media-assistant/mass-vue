import type { GenericObject } from './object';

export enum TorrentStatus {
    PAUSED = 0,
    DOWNLOADING = 4,
}

export enum TorrentError {
    ERROR = 2,
    NONE = 0,
}

export type PostData = {
    arguments: GenericObject;
    method: string;
}

export type Torrent = {
    error: TorrentError;
    errorString: string;
    eta: number;
    id: number;
    name: string;
    isFinished: boolean;
    isStalled: boolean;
    leftUntilDone: number;
    percentDone: number;
    queuePosition: number;
    rateDownload: number;
    rateUpload: number;
    sizeWhenDone: number;
    status: TorrentStatus;
};