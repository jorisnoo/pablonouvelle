<template>
    <section class="container">
        <div>
            <logo></logo>
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
        }
    }
</script>
