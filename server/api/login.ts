export default defineEventHandler(async (e) => {
    const body = await readBody(e);
    const { username, password } = body;
    console.log(username, password);
    
    if (username === "matern" && password === "password") {
        return { status: "success", message: "Авторизация успешна"}
    } else {
        throw createError({
            statusCode: 401,
            statusMessage: "Неправильное имя пользователя или пароль"
        });
    }
});