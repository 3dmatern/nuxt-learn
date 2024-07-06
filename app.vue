<template>
    <NuxtLoadingIndicator color="#FA6610" />
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    ogImage: "https://localhost:3000/favicon.ico",
    twitterCard: "summary_large_image"
});

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Изучение Nuxt` : "Изучение Nuxt";
    },
    bodyAttrs: {
        class: "class-for-body"
    },
    script: [
        { innerHTML: "console.log('Привет из useHead')" },
        {
            src: "https://third-party-script.com",
            // расположение подключаемого стороннего скрипта: 'head' | 'bodyClose' | 'bodyOpen'
            tagPosition: "bodyClose"
        }
    ]
});
</script>

<style>
/* Анимация переходов для /pages */
/* blur */
/* .page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
} */

/* rotate */
/* .rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
} */

/* Анимация переходов для /layouts */
/* .layout-enter-active,
.layout-leave-active {
    transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
    filter: grayscale(1);
} */
</style>