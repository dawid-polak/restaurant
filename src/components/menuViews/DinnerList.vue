<template>
     <div class="bg-[#EFE3D3] p-4 m-4 rounded-xl max-h-[140px] flex flex-col justify-center">
          <div class="flex w-full justify-between">
               <h1 class="font-bold text-xl">TALERZE THALI</h1>
               <h4>39 zł</h4>
          </div>
          <p class="font-thin text-xs p-2">Tradycyjnie potrawy kuchni indyjskiej podawane są na Thali czyli metalowej tacy.</p>
          <div @click="store.addProduct('TALERZE THALI', 40, 1)" class="text-right underline pt-2 px-2 cursor-pointer">dodaj do koszyka</div>
     </div>
</template>

<script setup lang="ts">
import { useBasket } from '@/stores/basket';

const store = useBasket();
</script>

<style scoped></style>
