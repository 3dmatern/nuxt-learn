<template>
    <section>
        <p>Это страница отображает /about роут.</p>
        <p>Page visits: {{ count }}</p>
    </section>
</template>

<script setup lang="ts">
import { getCount } from '~/store/count/api-client';

const { data: count, error } = await useAsyncData("count", getCount);

definePageMeta({
    // pageTransition: {
    //     name: "rotate"
    // },
    // layout: "orange",
    // layoutTransition: {
    //     name: 'slide-in'
    // }
});

useSeoMeta({
    title: "О нас",
    ogTitle: "О нас - Изучение Nuxt",
});
</script>