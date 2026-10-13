// Shared between the Astro build and scripts/check-events.mjs, so both
// produce the exact same JSON and can be compared byte for byte.

const ARTIST = 'pablo nouvelle';

export async function fetchEvents(appId) {
    const url = `https://rest.bandsintown.com/artists/${encodeURIComponent(ARTIST)}/events?app_id=${encodeURIComponent(appId)}`;
    const response = await fetch(url, { headers: { Accept: 'application/json' } });

    if (!response.ok) {
        throw new Error(`Bandsintown responded with ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Errors (e.g. an invalid app_id) come back as an object, not a list.
    if (!Array.isArray(data)) {
        throw new Error(`Unexpected Bandsintown response: ${JSON.stringify(data)}`);
    }

    const today = new Date().toISOString().slice(0, 10);

    return data
        .map(event => ({
            url: event.url,
            datetime: event.datetime,
            venue: {
                name: event.venue?.name ?? '',
                city: event.venue?.city ?? '',
            },
        }))
        // Bandsintown datetimes are venue-local without a timezone; comparing
        // the date part keeps a show listed until the end of its day.
        .filter(event => event.datetime.slice(0, 10) >= today)
        .sort((a, b) => a.datetime.localeCompare(b.datetime));
}

export function serializeEvents(events) {
    return JSON.stringify(events, null, 2) + '\n';
}
