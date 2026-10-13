// Run by the Forge scheduler from the current release directory:
//   cd /home/forge/pablonouvelle.com/current && npm run events:check
//
// Compares Bandsintown's upcoming shows with dist/events.json of the live
// build and triggers a Forge deployment only when they differ.

import { readFile } from 'node:fs/promises';
import { fetchEvents, serializeEvents } from '../src/lib/bandsintown.mjs';

try {
    process.loadEnvFile();
} catch {
    // No .env file; rely on the environment.
}

const { BANDSINTOWN_APP_ID, FORGE_DEPLOY_URL } = process.env;

if (!BANDSINTOWN_APP_ID || !FORGE_DEPLOY_URL) {
    console.error('BANDSINTOWN_APP_ID and FORGE_DEPLOY_URL must be set.');
    process.exit(1);
}

const latest = serializeEvents(await fetchEvents(BANDSINTOWN_APP_ID));
const deployed = await readFile(new URL('../dist/events.json', import.meta.url), 'utf8').catch(() => null);

if (latest === deployed) {
    console.log('Shows unchanged, nothing to do.');
    process.exit(0);
}

const response = await fetch(FORGE_DEPLOY_URL, { method: 'POST' });

if (!response.ok) {
    console.error(`Triggering the deployment failed: ${response.status} ${response.statusText}`);
    process.exit(1);
}

console.log('Shows changed, deployment triggered.');
