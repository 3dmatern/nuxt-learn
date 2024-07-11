<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch(`/api/movies/${route.params.slug}`);
console.log(data);


if (!data.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    });
}
</script>

<template>
    <h1>{{ data.name }}</h1>
    <p>{{ data.description }}</p>
</template>