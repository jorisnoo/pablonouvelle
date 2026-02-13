import '../css/main.css';
import 'lazysizes';
import { parseISO, format } from 'date-fns';
import albums from '../content/albums.json';
import events from '../content/events.json';
import socialmedia from '../content/socialmedia.json';

const IMAGEBOSS_SOURCE = 'pablonouvelle';
const IMAGEBOSS_BASE = 'https://img.imageboss.me';

function imageBossUrl(path, width) {
    return `${IMAGEBOSS_BASE}/${IMAGEBOSS_SOURCE}/width/${width}x/format:auto${path}`;
}

function renderExternalLogos() {
    const container = document.getElementById('externalLogos');
    if (!container) return;

    socialmedia.forEach(link => {
        const key = link.title.toLowerCase().replace(/ /g, '');
        const li = document.createElement('li');
        li.className = `externalLogos-entry externalLogos-entry--${key}`;

        const a = document.createElement('a');
        a.className = 'externalLogos-link';
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';

        li.appendChild(a);
        container.appendChild(li);
    });
}

function renderShows() {
    const container = document.getElementById('shows');
    if (!container) return;

    events.forEach(event => {
        const li = document.createElement('li');
        li.className = 'shows-entry';

        const a = document.createElement('a');
        a.className = 'shows-link';
        a.href = event.url;
        a.target = '_blank';

        const dateStr = event.datetime ? format(parseISO(event.datetime), 'EEE d MMM') : '';

        const venue = document.createElement('span');
        venue.className = 'shows-venue';
        venue.textContent = event.venue.name;

        a.append(`${dateStr} `, venue, ` ${event.venue.city}`);

        li.appendChild(a);
        container.appendChild(li);
    });
}

function renderAlbums() {
    const container = document.getElementById('albums');
    if (!container) return;

    [...albums].reverse().forEach(album => {
        const div = document.createElement('div');
        div.className = 'album';

        const a = document.createElement('a');
        a.href = album.link;
        a.target = '_blank';
        a.className = 'album-cover';

        const img = document.createElement('img');
        img.setAttribute('data-sizes', 'auto');
        img.setAttribute('data-src', imageBossUrl(album.cover, 640));
        img.setAttribute('data-srcset',
            `${imageBossUrl(album.cover, 960)} 960w, ` +
            `${imageBossUrl(album.cover, 640)} 640w, ` +
            `${imageBossUrl(album.cover, 480)} 480w, ` +
            `${imageBossUrl(album.cover, 320)} 320w`
        );
        img.className = 'lazyload';
        img.alt = album.name;

        a.appendChild(img);
        div.appendChild(a);
        container.appendChild(div);
    });
}

function renderMountain() {
    const img = document.getElementById('mountainImg');
    if (!img) return;

    const path = '/images/mountain.png';
    img.setAttribute('data-src', imageBossUrl(path, 1142));
    img.setAttribute('data-srcset',
        `${imageBossUrl(path, 1142)} 1142w, ` +
        `${imageBossUrl(path, 960)} 960w, ` +
        `${imageBossUrl(path, 640)} 640w, ` +
        `${imageBossUrl(path, 480)} 480w, ` +
        `${imageBossUrl(path, 320)} 320w`
    );
}

renderExternalLogos();
renderShows();
renderAlbums();
renderMountain();
