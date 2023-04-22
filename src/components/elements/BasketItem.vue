<template>
    <div class="flex flex-col w-full justify-center items-cneter border-b my-5 pb-5">
        <h1 class="font-thin text-xl w-full text-center">{{ data.name}}</h1>
        <span class="mt-1 text-center font-bold">{{ data.price }}zł</span>
          <div class="flex justify-center mt-5 h-12 w-full">
               <div class="flex items-center">
                    <span @click="store.discountProduct(data.name)" class="flex items-center justify-center w-8 h-8 cursor-pointer bg-zinc-100 hover:bg-zinc-200 p-1 rounded-full"> - </span>
                    <p class="flex items-center justify-center w-8 h-8 font-medium">{{ data.numberOfProduct }}</p>
                    <span @click="store.countProduct(data.name)" class="flex items-center justify-center w-8 h-8 cursor-pointer bg-zinc-100 hover:bg-zinc-200 p-1 rounded-full"> + </span>
               </div>
               <div @click="store.removeProduct(data.name)" class="flex items-center ml-5 justify-center hover:underline cursor-pointer text-red-500 font-normal tracking-widest font-thin">usuń</div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { useBasket } from '@/stores/basket'
const props = defineProps(['data']);
const store = useBasket();
</script>

<style scoped>

</style>