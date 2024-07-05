<template>
    <span class="app-alert">
        <slot />
    </span>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        color?: string;
    }>(),
    {
        color: "black"
    }
);
</script>

<style>
.app-alert {
    color: v-bind(color);
}
</style>