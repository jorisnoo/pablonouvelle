const path = require('path');
const baseDir = path.resolve(__dirname);

module.exports = {
    /*
    ** Headers of the page
    */

    css: [
        '@/assets/scss/main.scss'
    ],

    srcDir: 'resources/',

    env: {
        APP_URL: process.env.APP_URL || 'http://localhost:3000',
        CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE || null,
        CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN || null,
        APP_ID: process.env.APP_ID || 'pablonouvelle',
        PIWIK_SITE_ID: process.env.PIWIK_SITE_ID,
    },

    generate: {
        dir: 'public/',
    },

    // plugins: [
    // { src: '~/plugins/prism', ssr: false }
    // ],

    modules: [
        ['nuxt-piwik', {
            piwikUrl: '//prism.y7k.com/',
            siteId: 17,
            trackerUrl: '//prism.y7k.com/' + 'js/',
            scriptUrl: '//prism.y7k.com/' + 'js/'
        }],
        ['@nuxtjs/dotenv'],
    ],

    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},

    /*
    ** Build configuration
    */
    build: {

        extend(config, {dev, isClient}) {
            config.module.rules.push({
                test: /\.scss/,
                loader: 'import-glob',
                exclude: /node_modules/,
                enforce: 'pre'
            })
        },

        vendor: [
            'axios',
            'moment',
            'contentful'
        ]

    }
}
