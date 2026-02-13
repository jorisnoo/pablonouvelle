import '../css/main.css';
import 'lazysizes';
import { parseISO, format } from 'date-fns';
import albums from '../content/albums.json';
import events from '../content/events.json';
import socialmedia from '../content/socialmedia.json';

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
        img.setAttribute('data-src', `${album.cover}?nf_resize=fit&w=640`);
        img.setAttribute('data-srcset',
            `${album.cover}?nf_resize=fit&w=960 960w, ` +
            `${album.cover}?nf_resize=fit&w=640 640w, ` +
            `${album.cover}?nf_resize=fit&w=480 480w, ` +
            `${album.cover}?nf_resize=fit&w=320 320w`
        );
        img.className = 'lazyload';
        img.alt = album.name;

        a.appendChild(img);
        div.appendChild(a);
        container.appendChild(div);
    });
}

renderExternalLogos();
renderShows();
renderAlbums();
