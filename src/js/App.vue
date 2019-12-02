<template>
    <section class="container">
        <div>

            <external-logos :links="socialmedia"></external-logos>

            <logo></logo>

            <!--            <shows :events="events"></shows>-->

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

    import { data } from '../content.md';

    export default {
        name: "App",
        components: {
            Album, FooterLinks, Logo, Mountain, Shows, SocialLinks, ExternalLogos, SpotifyLinks,
        },

        data() {
            return {
                events: [],
                albums: JSON.parse(JSON.stringify(data.albums)),
                socialmedia: JSON.parse(JSON.stringify(data.socialmedia)),
                music: JSON.parse(JSON.stringify(data.music)),
                footer: JSON.parse(JSON.stringify(data.footer)),
            }
        },

        created() {
            // axios.get('https://rest.bandsintown.com/artists/Pablo Nouvelle/events?app_id=pablonouvelle')
            // .then(events => {
            //     console.log(events)
            // });

            // console.log(data);
            // console.log()
        },

    }
</script>
