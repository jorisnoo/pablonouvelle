import { fetchEvents } from './bandsintown.mjs';

export interface ShowEvent {
    url: string;
    datetime: string;
    venue: { name: string; city: string };
}

let cached: Promise<ShowEvent[]> | undefined;

/**
 * Upcoming shows, fetched once per build. A failing request fails the build
 * on purpose, so the currently deployed release (with its shows) stays live.
 */
export function getEvents(): Promise<ShowEvent[]> {
    cached ??= load();
    return cached;
}

async function load(): Promise<ShowEvent[]> {
    const appId = import.meta.env.BANDSINTOWN_APP_ID ?? process.env.BANDSINTOWN_APP_ID;

    if (!appId) {
        console.warn('[events] BANDSINTOWN_APP_ID is not set, rendering without shows.');
        return [];
    }

    return fetchEvents(appId);
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-11-07T20:00:00" → "Sat 7 Nov" (venue-local, independent of the build server's timezone). */
export function formatShowDate(datetime: string): string {
    const [year, month, day] = datetime.slice(0, 10).split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return `${WEEKDAYS[date.getUTCDay()]} ${day} ${MONTHS[month - 1]}`;
}
