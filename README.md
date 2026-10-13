# Pablo Nouvelle

Static [Astro](https://astro.build) site for [pablonouvelle.com](https://www.pablonouvelle.com).

```sh
cp .env.example .env   # add BANDSINTOWN_APP_ID to see shows locally
npm install
npm run dev
```

## Content

- `src/content/albums.json` – releases, newest last. `cover` is a file name in `src/assets/albums/`; covers are resized to WebP at build time.
- `src/content/socialmedia.json` – icons at the top of the page.
- Shows are fetched from Bandsintown at build time (`src/lib/bandsintown.mjs`) and also written to `/events.json`. If Bandsintown fails, the build fails and the current release stays live.

## Deployment (Laravel Forge + Bunny CDN)

**Site:** static site, web directory `/dist`. Environment (`.env`): `BANDSINTOWN_APP_ID` and `FORGE_DEPLOY_URL` (the site's *Deployment Trigger URL*).

**Deploy script:**

```sh
cd $FORGE_RELEASE_DIRECTORY   # or $FORGE_SITE_PATH without zero-downtime deployments
npm ci
npm run build

# optional, when Bunny CDN pulls from this server
curl -fsS -X POST "https://api.bunny.net/pullzone/$BUNNY_PULL_ZONE_ID/purgeCache" -H "AccessKey: $BUNNY_API_KEY"
```

**Scheduler** (every 3 hours, for example):

```sh
cd /home/forge/pablonouvelle.com/current && npm run events:check
```

`events:check` compares Bandsintown with the deployed `dist/events.json` and calls the deployment trigger only when shows were added, changed or have passed.
