<template>
    <div>
        <nuxt/>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Pablo Nouvelle',
                meta: [
                    {charset: 'utf-8'},
                    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                    {name: 'twitter:card', content: 'summary'},
                    {name: 'twitter:site', content: '@pablo_nouvelle'},
                    {name: 'twitter:creator', content: '@pablo_nouvelle'},
                    {name: 'twitter:title', content: 'Pablo Nouvelle'},
                    {name: 'og:title', content: 'Pablo Nouvelle'},
                    {name: 'og:site_name', content: 'Pablo Nouvelle'},
                    {name: 'og:url', content: process.env.APP_URL},
                    {name: 'og:type', content: 'website'},
                    {name: 'fb:admins', content: 254402907974879},
                    {name: 'og:image', content: process.env.APP_URL + '/images/clouds.png'},
                    {name: 'twitter:image', content: process.env.APP_URL + '/images/clouds.png'},
                ],
                link: [
                    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
                ]
            }
        }
    }
</script>
