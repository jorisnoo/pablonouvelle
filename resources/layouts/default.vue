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
                    {name: 'theme-color', content: '#ffffff'},
                ],
                link: [
                    {rel: 'apple-touch-icon', sizes: '180x180', href: '/images/meta/apple-touch-icon.png'},
                    {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/meta/favicon-32x32.png'},
                    {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/meta/favicon-16x16.png'},
                    {rel: 'manifest', href: '/images/meta/manifest.json'},
                    {rel: 'mask-icon', href: '/images/meta/safari-pinned-tab.svg', color: '#000000'},
                ]
            }
        }
    }
</script>
