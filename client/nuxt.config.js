const title = 'Aktualitātes tūrismā & Iedvesmojoši galamērķi | Galamērķis';
const description = 'Informatīvs tūrisma blogs, kas palīdzēs ieplānot Tavas brīvdienas. Aktuālais tūrismā Latvijā un pasaulē, iedvesmojoši galamērķi un spilgtāko ceļojumu atmiņas.';
const axios = require('axios');

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: description},
            {name: 'format-detection', content: 'telephone=no'},
            // Social sharing tags
            {hid: 'og:title', property: 'og:title', content: title},
            {hid: 'og:type', property: 'og:type', content: 'website'},
            {hid: 'og:site_name', property: 'og:site_name', content: 'Galamerkis'},
            {hid: 'og:url', property: 'og:url', content: 'https://www.galamerkis.lv'},
            {hid: 'og:description', property: 'og:description', content: description},
            {hid: 'og:image', name: 'og:image', content: 'https://www.galamerkis.lv/galamerkis-og.png'},
            {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
            {hid: 'twitter:description', name: 'twitter:description', content: description},
            {hid: 'twitter:image', name: 'twitter:image', content: 'https://www.galamerkis.lv/galamerkis-og.png'},
        ],
        bodyAttrs: {
            class: 'bg-gray-100 font-sans leading-normal tracking-normal'
        },
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'canonical', href: 'https://www.galamerkis.lv/'},
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/robots',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/sitemap',
    ],

    robots: {
        Sitemap: 'https://www.galamerkis.lv/sitemap.xml',
    },

    sitemap: {
        hostname: 'https://www.galamerkis.lv',
        routes: async () => {
            const https = await import('https');
            const httpsAgent = new https.Agent({
                rejectUnauthorized: false
            });

            const categories = await axios.get(`${process.env.NGINX_URL}/content/categories`, {httpsAgent});
            const posts = await axios.get(`${process.env.NGINX_URL}/content/posts`, {httpsAgent});

            return [
                ...posts.data.map(post => `/${post.category.name}/${post.slug}`),
                ...categories.data.map(category => `/${category.name}`)
            ];
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseUrl: process.env.NGINX_URL,
        browserBaseURL: process.env.FRONTEND_URL,
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
