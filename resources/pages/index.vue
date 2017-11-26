

<script>
    import axios from 'axios'
    import {createClient} from 'contentful'

    import Logo from '~/components/Logo.vue'
    import Mountain from '~/components/Mountain.vue'
    import Shows from '~/components/Shows.vue'
    import FooterLinks from '~/components/FooterLinks.vue'
    import SpotifyLinks from '~/components/SpotifyLinks.vue'
    import SocialLinks from '~/components/SocialLinks.vue'

    export default {

        data() {
            return {}
        },

        components: {
            Logo,
            Mountain,
            Shows,
            FooterLinks,
            SpotifyLinks,
            SocialLinks
        },

        methods: {
        },

        head() {

            const title = 'Pablo Nouvelle – ' + this.firstSpotifyLink.title + ' (' + this.firstSpotifyLink.subtitle + ')';

            return {
                meta: [
                    {name: 'description', content: title},
                    {name: 'og:description', content: title},
                    {name: 'twitter:description', content: title},
                ],
            }
        },

        async asyncData(context) {

            const client = createClient({
                space: process.env.CONTENTFUL_SPACE,
                accessToken: process.env.CONTENTFUL_TOKEN
            })

            let events = await axios.get('https://rest.bandsintown.com/artists/Pablo Nouvelle/events?app_id=' + process.env.APP_ID);
            let footerLinks = await client.getEntries({'content_type': 'footerLink', 'order': 'sys.updatedAt'})
            let socialLinks = await client.getEntries({'content_type': 'socialLinks', 'order': 'sys.updatedAt'})
            let spotifyLinks = await client.getEntries({'content_type': 'spotifyLink'})

            return {
                events: events.data,
                socialLinks: socialLinks.items,
                footerLinks: footerLinks.items,
                spotifyLinks: spotifyLinks.items,
                firstSpotifyLink: spotifyLinks.items[0].fields,
            };
        }
    }
</script>

<template>
    <section class="container">
        <div>

            <logo></logo>

            <spotify-links :links="spotifyLinks"></spotify-links>

            <shows :events="events"></shows>

            <social-links :links="socialLinks"></social-links>

            <footer-links :links="footerLinks"></footer-links>

            <mountain></mountain>

        </div>
    </section>
</template>

