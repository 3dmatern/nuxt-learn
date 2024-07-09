<script setup lang="ts">
const callCount = ref(0);

const username = ref("matern");
const password = ref("");
const formState = computed(() => ({
    username: username.value,
    password: password.value
}));

const didItWork = ref(false);

// Способ прекращения слежения за реактивным состоянием формы, например
// при повторной отправки формы при каждом изменении в ней чего-либо.
// const { data, error, execute } = await useAsyncData("login", () => $fetch("/api/login", {
//     method: "post",
//     body: formState.value
// }), {
//     // если нужно следить.
//     // watch: [formState]
// });

// Способ прекращения слежения за реактивным состоянием формы, например
// при повторной отправки формы при каждом изменении в ней чего-либо.
// const { data, error, execute } = await useFetch("/api/login", {
//     method: "post",
//     body: formState.value,
//     immediate: false, // убрать, если нужно следить
//     watch: false, // убрать, если нужно следить
//     onResponse() {
//         callCount.value++
//     }
// });

const onSubmit = async () => {
    // await execute();
    // if (!error.value) {
    //     didItWork.value = true;
    // }
    try {
        const data = await $fetch("/api/login", {
            method: "post",
            body: formState.value,
            onResponse() {
                callCount.value++
            }
        });
        didItWork.value = true;
    } catch (e) {
        didItWork.value = false;
        if (e.response) {
            alert(e.response._data.message);
            // Сервер вернул ответ с ошибкой
            console.error('Error status:', e.response.status);
            console.error('Error message:', e.response._data.message);
        } else {
            // Ошибка сети или другая ошибка
            console.error('Error:', e.message);
            alert(e.message);
        }
    }
};
</script>

<template>
    <div>
        <h1>Авторизация</h1>

        <form @submit.prevent="onSubmit">
            <div>
                <label>Имя пользователя:</label>
                <!-- data-1p-ignore - для игнора менеджера паролей -->
                <input data-1p-ignore type="text" v-model="username" />
            </div>
            <div>
                <label>Пароль:</label>
                <input data-1p-ignore type="password" v-model="password" />
            </div>
            <button>Войти</button>
        </form>

        <p>Количество вызовов: {{ callCount }}</p>
        <p>Сработало? {{ didItWork }}</p>
    </div>
</template>