module.exports = {
    content: [
        'src/index.html',
        'src/js/**/*.vue',
    ],
    css: ['src/scss/main.scss'],
    whitelist: ['lazyloaded','lazyloading'],
    whitelistPatterns: [
        /-enter-active$/,
        /-leave-active$/,
        /-enter$/,
        /-leave-to$/,
        /^externalLogos-entry-/
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
};
