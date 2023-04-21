<template>
    <router-link :to="{ name: href }">
        <div class="bg-black rounded-full py-2 text-white px-5 flex items-center justify-center font-thin hover:shadow-xl cursor-pointer">{{ text }}</div>
    </router-link>
</template>

<script setup lang="ts">
const props = defineProps(["text", "href"]);
</script>

<style scoped></style>
