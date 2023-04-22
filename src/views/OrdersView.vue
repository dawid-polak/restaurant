<template>
     <div class="w-full absolute mt-24 flex flex-col justify-center items-center">
          <div class="w-11/12 max-w-5xl flex flex-col items-center">
               <h1 class="text-3xl m-5 font-bold">Historia:</h1>
               <div class="relative overflow-x-auto w-full">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                         <thead class="text-xs text-white uppercase bg-black">
                              <tr>
                                   <th scope="col" class="px-6 py-3">Numer zamówienia</th>
                                   <th scope="col" class="px-6 py-3">Data</th>
                                   <th scope="col" class="px-6 py-3">Godzina</th>
                                   <th scope="col" class="px-6 py-3">Cena</th>
                                   <th scope="col" class="px-6 py-3 text-center">Akcje</th>
                              </tr>
                         </thead>
                         <tbody>
                              <ItemList />
                              <ItemList />
                              <ItemList />

                              <ItemList />
                              <ItemList />
                              <ItemList />
                              <ItemList />

                              <ItemList />

                              <ItemList />
                              <ItemList />
                              <ItemList />

                              <ItemList />


                         </tbody>
                    </table>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import ItemList from "@/components/ordersView/ItemList.vue";
import Footer from "@/components/navigation/Footer.vue";
</script>

<style scoped></style>
