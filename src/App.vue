<template>
     <Navbar />
     <router-view></router-view>
     <BackHome />
</template>

<script setup lang="ts">
import Navbar from "./components/navigation/Navbar.vue";
import BackHome from "./components/elements/BackHome.vue";
</script>

<style scoped></style>
