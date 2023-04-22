<template>
     <div class="main flex fixed h-full w-full bg-black bg-opacity-75 z-50 top-0">
          <div class="basket fixed flex flex-col justify-between bg-white h-full w-11/12 sm:w-8/12 lg:w-5/12 z-40">
               <div class="w-full flex justify-end">
                    <img @click="$emit('close')" class="m-8 w-12 h-12 cursor-pointer hover:bg-zinc-200 p-2 rounded-full" src="../../assets/icons/close-dark.png" alt="close" />
               </div>
               <div class="flex-col w-full h-[400px] sm:h-[600px] items-center overflow-y-scroll border-y">
                    <BasketItem v-for="product in store.products" :data="product"/>
               </div>
               <div class="w-full flex my-10">
                    <div class="w-1/2 h-full flex flex-col items-center justify-center">
                         <p class="font-light">łączna cena:</p>
                         <p class="font-thin text-xl">zł</p>
                    </div>
                    <div class="w-1/2 h-full flex flex-col items-center justify-center">
                         <Button @click="$emit('close')" :text="'Zapłać'" :href="'order'" />
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import BasketItem from "./BasketItem.vue";
import { useBasket } from "@/stores/basket";

const store = useBasket();
</script>

<style scoped lang="scss">
.main {
     opacity: 0;
     animation: showMain 0.5s forwards ease-in-out;
     .basket {
          left: -100%;
          animation: showBasket 0.5s forwards ease-in-out;

          @keyframes showBasket {
               from {
                    left: -100%;
               }

               to {
                    left: 0;
               }
          }
     }

     @keyframes showMain {
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
}
</style>
