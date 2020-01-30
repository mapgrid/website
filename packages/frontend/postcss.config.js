/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.html', './src/**/*.svelte'],

    whitelistPatterns: [/svelte-/, /mapgrid-/],

    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

const prod = !process.env.ROLLUP_WATCH
const plugins = [require('tailwindcss')]

if (prod) {
    plugins.push(purgecss)
}

module.exports = {
    plugins,
}
