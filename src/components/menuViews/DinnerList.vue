<template>
     <div class="bg-[#EFE3D3] p-4 m-4 rounded-xl max-h-[140px] flex flex-col justify-center">
          <div class="flex w-full justify-between">
               <h1 class="font-bold text-xl">{{ data.name }}</h1>
               <h4>{{ data.price }} zł</h4>
          </div>
          <p class="font-thin text-xs p-2 max-w-[400px]">{{ data.description }}</p>
          <div @click="store.addProduct(data.name, data.price, 1), $emit('close')" class="text-center underline pt-2 px-2 cursor-pointer transform active:scale-75 transition-transform">dodaj do koszyka</div>
     </div>
</template>

<script setup lang="ts">
import { useBasket } from '@/stores/basket';
const porps = defineProps(['data']);
const store = useBasket();
</script>

<style scoped></style>
