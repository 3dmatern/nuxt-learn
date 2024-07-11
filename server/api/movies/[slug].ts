export default defineEventHandler((e) => {
    const slug = getRouterParam(e, "slug");
    
    if (slug !== "test") {
        throw createError({
            statusCode: 404,
            statusMessage: "Страница не найдена"
        });
    }

    return { name: "test", description: "description test" };
});