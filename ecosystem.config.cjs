module.exports = {
    apps: [
        {
            name: "Nuxt-Learn",
            port: 3000,
            exec_mode: "cluster",
            instance: "max",
            script: "./.output/server/index.mjs"
        }
    ]
};