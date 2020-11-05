
<script>
    import Album from './components/Album';
    import FooterLinks from './components/FooterLinks';
    import Logo from './components/Logo';
    import Mountain from './components/Mountain';
    import Shows from './components/Shows';
    // import SocialLinks from "./components/SocialLinks";
    import ExternalLogos from './components/ExternalLogos';
    // import SpotifyLinks from "./components/SpotifyLinks";

    import {data as albums} from '../content/albums.md';
    import {data as socialmedia} from '../content/socialmedia.md';
    import events from '../content/events';

    export default {
        components: {
            Album, FooterLinks, Logo, Mountain, Shows, ExternalLogos,
        },
        data() {
            return {
                events: JSON.parse(JSON.stringify(events)),
                albums: JSON.parse(JSON.stringify(albums.albums)),
                socialmedia: JSON.parse(JSON.stringify(socialmedia.socialmedia)),
            };
        },
    };
</script>

<template>
    <section class="container">
        <div>
            <external-logos :links="socialmedia" />

            <logo />

            <shows :events="events" />

            <album
                v-for="album in albums"
                :key="album.name"
                :name="album.name"
                :link="album.link"
                :cover="album.cover"
            />

            <!--            <spotify-links :links="music"></spotify-links>-->

            <!--            <social-links :links="socialmedia"></social-links>-->

            <footer-links />

            <mountain />
        </div>
    </section>
</template>
