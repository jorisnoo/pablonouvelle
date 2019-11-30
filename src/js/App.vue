<template>
    <section class="container">
        <div>
            <logo></logo>

            <album
                v-for="album in albums"
                :name="album.name"
                :link="album.link"
                :cover="album.cover"
                :key="album.name"
            ></album>

        </div>
    </section>
</template>

<script>
    import Album from "./components/Album";
    import FooterLinks from "./components/FooterLinks";
    import Logo from "./components/Logo";
    import Mountain from "./components/Mountain";
    import Shows from "./components/Shows";
    import SocialLinks from "./components/SocialLinks";
    import SocialLogos from "./components/SocialLogos";
    import SpotifyLinks from "./components/SpotifyLinks";

    export default {
        name: "App",
        components: {
            Album, FooterLinks, Logo, Mountain, Shows, SocialLinks, SocialLogos, SpotifyLinks,
        },

        data() {
            return {
                albums: [
                    {
                        'name': 'Atlas Internet Cafe',
                        'cover': '01_atlas_internet_cafe.jpg',
                        'link': 'https://google.com'
                    },
                    {
                        'name': 'Piano Pieces',
                        'cover': '02_piano_pieces.png',
                        'link': 'https://google.com'
                    },
                ]
            }
        },

    }
</script>
