<script setup lang="ts">
type Link = { name: string, link: string };
// Генерируем некоторые данные на сервере с помощью useState
// и передаем их на клиент, а если использовать ref, то
// любая функция переданная в ref будет вызываться на сервере
// и клиенте.
// const list = ref<Link[]>(generateRandomLinks());
const list = useState<Link[]>("random-links", () => generateRandomLinks());

function generateRandomLinks() {
    const links: Link[] = [];

    for (let i = 0; i < 10; i++) {
        const link = generateRandomLink();
        links.push({
            name: "data" + i,
            link: link
        });
    }
    return links;
};

function generateRandomLink() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
    const length = 10;
    let link = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        link += characters[randomIndex];
    }

    return `/name/${link}`;
};
</script>

<template>
    <h1>Личный кабинет</h1>

    <ul>
        <li v-for="item of list" :key="item.name">
            <NuxtLink :to="item.link">{{ item.link }}</NuxtLink>
        </li>
    </ul>
</template>