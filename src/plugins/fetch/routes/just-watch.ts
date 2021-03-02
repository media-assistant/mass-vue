// TODO change to mass-api version
import type { JustWatchType } from '../../../types/just-watch';

export const JUST_WATCH_BASE = `${window.location.protocol}//apis.justwatch.com/content/titles/en_NL/popular`;

export const justWatchUrl = (search: string, type: JustWatchType): string =>
    `${JUST_WATCH_BASE}?language=en&body={"page_size":1,"page":1,"query":"${search}","content_types":["${type}"]}`;