import type { Show } from '../../../types/sonarr';

export const SONARR_SERIES = '/sonarr/series';

export const getShowIdUrl = (show: Show): string => `${SONARR_SERIES}/${show.id}`;