<template>
    <div class="w-full flex justify-between h-24 items-center fixed z-50 bg-white">
        <div class="ml-10">
            <img @click="showBasket = !showBasket" class="w-12 h-12 cursor-pointer hover:shadow-xl rounded-full p-1" src="../../assets/icons/shopping-bag.png" alt="shopping-bag">
        </div>
        <div class="mr-10">
            <Button :text="'Twoje Zamówienia'" />
        </div>
    </div>
    <Basket v-if="showBasket" @close="showBasket = !showBasket"/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../elements/Button.vue';
import Basket from '../elements/Basket.vue';

const showBasket = ref(false);

</script>

<style scoped lang="scss">

</style>