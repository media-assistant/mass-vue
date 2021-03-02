// TODO change to mass-api version

export type JustWatchType = 'show'|'movie';

export type JustWatchOffer = {
    monetization_type: string;
    provider_id: number;
};

export type JustWatchItem = {
    offers: JustWatchOffer;
};

export type JustWatchResult = {
    items: JustWatchItem[],
};