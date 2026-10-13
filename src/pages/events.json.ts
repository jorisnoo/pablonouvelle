import type { APIRoute } from 'astro';
import { serializeEvents } from '../lib/bandsintown.mjs';
import { getEvents } from '../lib/events';

// Snapshot of the shows baked into this build. scripts/check-events.mjs
// compares it with Bandsintown to decide whether a redeploy is needed.
export const GET: APIRoute = async () => new Response(serializeEvents(await getEvents()), {
    headers: { 'Content-Type': 'application/json' },
});
