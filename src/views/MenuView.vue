<template>
     <div class="absolute mt-24 flex-col justify-center w-full">
          <div class="w-full text-center text-4xl px-3 mt-20 sticky top-24 bg-white h-28">
               <p class="text-lg block">Głodny? Zobacz!</p>
               <h1 class="font-bold tracking-wider block">NASZE MENU</h1>
               <span class="bg-black w-24 h-[2px] mt-2 block m-auto"></span>
               <img v-if="!navbarMenuShow" @click="navbarMenuShow = !navbarMenuShow"  class="bg-black rounded-full flex items-center justify-center w-10 mt-[13px] p-2 ml-5 sm:ml-32 cursor-pointer z-20 hover:shadow-xl absolute border" src="../assets/icons/menu.png" alt="menu" />
               <img v-if="navbarMenuShow" @click="navbarMenuShow = !navbarMenuShow"  class="bg-black rounded-full flex items-center justify-center w-10 mt-[13px] p-2 ml-5 sm:ml-32 cursor-pointer z-20 hover:shadow-xl absolute border" src="../assets/icons/close.png" alt="close" />
               <div :class="{ 'hidden': !navbarMenuShow }" class="flex w-full sm:justify-center items-center text-xl text-white bg-black overflow-scroll mt-[33px] z-20">
                    <div class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">przystawki</div>
                    <div class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">dania główne</div>
                    <div class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">desery</div>
               </div>
          </div>
          <div class="w-full z-[-10] bottom-0 h-full mt-10 flex flex-wrap justify-center mb-10">
               <DinnerList />
               <DinnerList />

               <DinnerList />
               <DinnerList />

               <DinnerList />
               <DinnerList />
               <DinnerList />
               <DinnerList />
               <DinnerList />
               <DinnerList />
               <DinnerList />
               <DinnerList />
          </div>
          <Footer />
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DinnerList from "@/components/menuViews/DinnerList.vue";
import Footer from "@/components/navigation/Footer.vue";

const navbarMenuShow = ref(false)
</script>

<style scoped></style>
