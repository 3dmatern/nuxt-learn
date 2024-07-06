// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: ""
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                }
            ]
        },
        // анимация переходов для страниц
        // pageTransition: { name: "page", mode: "out-in" }
        // анимация переходов для layouts
        // layoutTransition: { name: "layout", mode: "out-in" }
    },
    css: ["/assets/styles/index.css"],
    experimental: {
     // анимация переходов по роутам
        viewTransition: true
    },
    routeRules: {
        "/**": { ssr: true }
    },

    compatibilityDate: '2024-04-03',
    devtools: { enabled: true }
})