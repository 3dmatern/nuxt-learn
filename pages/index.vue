<template>
    <div>
        <h1>Заменил NuxtWelcom</h1>
        <AppAlert color="green">
            Это автоимпортированный компонент.
        </AppAlert>
        <p>Page visits: {{ count }}</p>
    </div>
</template>

<script setup lang="ts">
import { getCount } from '~/store/count/api-client';

const { data: count, error } = await useAsyncData("count", getCount);

useSeoMeta({
    title: "Главная",
    ogTitle: "Главная - Изучение Nuxt",
    description: "Изучение фреймворка Nuxt 3/4 для расширения стэка технологий",
    ogDescription: "Изучение фреймворка Nuxt 3/4 для расширения стэка технологий"
});
</script>