<template>
    <div class="absolute mt-24 flex justify-center w-full">
        <div class="w-full text-center text-4xl px-3 mt-20">
            <h1 class="font-thin">Witamy w naszej <br> restauracji!</h1>
            <div class="w-48 h-10 m-auto my-10">
                <Button :text="'MENU'" :href="'menu'"/>
            </div>
        </div>
        <div class="w-full flex fixed bottom-0 h-[40%] ">
            <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1027&q=80" alt="img-1">
            <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1591459034470-d1e05d7b05d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-2">
            <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1615500025837-cf3a8716c83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-3">
            <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-4">
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/elements/Button.vue';

</script>

<style scoped>

</style>