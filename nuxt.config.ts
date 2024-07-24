// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@vueuse/motion/nuxt', '@zadigetvoltaire/nuxt-gtm'],
    devtools: { enabled: true },
    gtm: {
        id: 'GTM-MJHXGQ5L',
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
