export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        // обрабатываем ошибку, например. сообщить в службу
        console.log("error-handler vueApp, error:", error);
        console.log("error-handler vueApp, instance:", instance);
        console.log("error-handler vueApp, info:", info);
    };

    // Также возможно
    nuxtApp.hook("vue:error", (error, instance, info) => {
        // обрабатываем ошибку, например. сообщить в службу
        console.log("error-handler hook, error:", error);
        console.log("error-handler hook, instance:", instance);
        console.log("error-handler hook, info:", info);
    });
});