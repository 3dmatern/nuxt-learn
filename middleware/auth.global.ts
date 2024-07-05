export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path.includes("/dashboard")) {
        return navigateTo("/login");
    }
});