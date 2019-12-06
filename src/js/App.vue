<template>
    <section class="container">
        <div>

            <external-logos :links="socialmedia"></external-logos>

            <logo></logo>

            <shows :events="events"></shows>

            <album
                v-for="album in albums"
                :name="album.name"
                :link="album.link"
                :cover="album.cover"
                :key="album.name"
            ></album>

<!--            <spotify-links :links="music"></spotify-links>-->

<!--            <social-links :links="socialmedia"></social-links>-->

            <footer-links :links="footer"></footer-links>

            <mountain></mountain>

        </div>
    </section>
</template>

<script>
    import axios from 'axios';
    import Album from "./components/Album";
    import FooterLinks from "./components/FooterLinks";
    import Logo from "./components/Logo";
    import Mountain from "./components/Mountain";
    import Shows from "./components/Shows";
    import SocialLinks from "./components/SocialLinks";
    import ExternalLogos from "./components/ExternalLogos";
    import SpotifyLinks from "./components/SpotifyLinks";

    import { data as albums } from '../content/albums.md';
    import { data as socialmedia } from '../content/socialmedia.md';
    // import { data as music } from '../content/music.md';
    import { data as footer } from '../content/footer.md';

    export default {
        name: "App",
        components: {
            Album, FooterLinks, Logo, Mountain, Shows, SocialLinks, ExternalLogos, SpotifyLinks,
        },

        data() {
            return {
                events: [],
                albums: JSON.parse(JSON.stringify(albums.albums)),
                socialmedia: JSON.parse(JSON.stringify(socialmedia.socialmedia)),
                // music: JSON.parse(JSON.stringify(data.music)),
                footer: JSON.parse(JSON.stringify(footer.footer)),
            }
        },

        created() {
            axios.get('https://rest.bandsintown.com/artists/Pablo Nouvelle/events?app_id=' + process.env.BANDSINTOWN_APP_ID)
            .then(result => result.data)
            .then(events => {
                this.events = events;
            });
        },

    }
</script>
