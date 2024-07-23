// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@vueuse/motion/nuxt', 'nuxt-gtag'],
    devtools: { enabled: true },
    gtag: {
        id: 'G-BT46E9BQJE',
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
