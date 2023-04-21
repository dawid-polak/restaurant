<template>
    <div class="w-full flex justify-between h-24 items-center absolute">
        <div class="ml-10">
            <img class="w-12 h-12 cursor-pointer hover:shadow-xl rounded-full p-1" src="../../assets/icons/shopping-bag.png" alt="shopping-bag">
        </div>
        <div class="mr-10">
            <Button :text="'Twoje Zamówienia'" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Button from '../elements/Button.vue';


</script>

<style scoped lang="scss">

</style>