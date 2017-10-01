<template>
    <section class="container">
        <div>

            <logo></logo>

            <spotify-link :link="spotifyLink"></spotify-link>

            <shows :events="events"></shows>

            <social-links :links="socialLinks"></social-links>
            <footer-links :links="footerLinks"></footer-links>

        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    import {createClient} from 'contentful'

    import Logo from '~/components/Logo.vue'
    import Shows from '~/components/Shows.vue'
    import FooterLinks from '~/components/FooterLinks.vue'
    import SpotifyLink from '~/components/SpotifyLink.vue'
    import SocialLinks from '~/components/SocialLinks.vue'

    export default {

        data() {
            return {}
        },

        components: {
            Logo,
            Shows,
            FooterLinks,
            SpotifyLink,
            SocialLinks
        },

        methods: {
        },

        async asyncData(context) {

            const client = createClient({
                space: process.env.CONTENTFUL_SPACE,
                accessToken: process.env.CONTENTFUL_TOKEN
            })

            let events = await axios.get('https://rest.bandsintown.com/artists/Pablo Nouvelle/events?app_id=' + process.env.APP_ID);
            let footerLinks = await client.getEntries({'content_type': 'footerLink'})
            let socialLinks = await client.getEntries({'content_type': 'socialLinks'})
            let spotifyLink = await client.getEntries({'content_type': 'spotifyLink', 'limit': 1})

            return {
                events: events.data,
                socialLinks: socialLinks.items,
                footerLinks: footerLinks.items,
                spotifyLink: spotifyLink.items[0].fields,
            };
        }
    }
</script>

