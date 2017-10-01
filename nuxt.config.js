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
        // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
        CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE || null,
        CONTENTFUL_TOKEN: process.env.CONTENTFUL_TOKEN || null,
        APP_ID: process.env.APP_ID || 'pablonouvelle',
    },

    generate: {
        dir: 'public/',
    },

    plugins: [
        // '~/plugins/axios'
    ],

    modules: [
        '@nuxtjs/dotenv'
    ],

    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},

    /*
    ** Build configuration
    */
    build: {

        extend (config, { dev, isClient }) {
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
