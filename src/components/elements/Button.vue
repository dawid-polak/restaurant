<template>
     <div class="bg-black rounded-full py-2 text-white px-5 flex items-center justify-center font-thin hover:shadow-xl cursor-pointer">{{ text }}</div>
</template>

<script setup lang="ts">
const props = defineProps(["text"]);
</script>

<style scoped></style>
