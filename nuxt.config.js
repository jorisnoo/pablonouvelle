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

    generate: {
        dir: 'public/',
    },

    plugins: [
        // '~/plugins/vue-jsonp'
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
            'axios'
        ]

    }
}
