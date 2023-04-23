<template>
     <div class="absolute mt-24 flex-col justify-center w-full">
          <div class="w-full text-center text-4xl px-3 mt-20 sticky top-24 bg-white h-28 z-20">
               <p class="text-lg block">Głodny? Zobacz!</p>
               <h1 class="font-bold tracking-wider block">NASZE MENU</h1>
               <span class="bg-black w-24 h-[2px] mt-2 block m-auto"></span>
               <img v-if="!navbarMenuShow" @click="navbarMenuShow = !navbarMenuShow" class="bg-black rounded-full flex items-center justify-center w-10 mt-[13px] p-2 ml-5 sm:ml-32 cursor-pointer z-20 hover:shadow-xl absolute border" src="../assets/icons/menu.png" alt="menu" />
               <img v-if="navbarMenuShow" @click="navbarMenuShow = !navbarMenuShow" class="bg-black rounded-full flex items-center justify-center w-10 mt-[13px] p-2 ml-5 sm:ml-32 cursor-pointer z-20 hover:shadow-xl absolute border" src="../assets/icons/close.png" alt="close" />
               <div :class="{ hidden: !navbarMenuShow }" class="flex w-full sm:justify-center items-center text-xl text-white bg-black overflow-scroll mt-[33px] z-20">
                    <div @click="downloadData" class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">menu</div>
                    <div @click="selectProductsInMenu('dinner')" class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">obiady</div>
                    <div @click="selectProductsInMenu('mainCourse')" class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">dania główne</div>
                    <div @click="selectProductsInMenu('desert')" class="py-4 min-w-[200px] cursor-pointer hover:text-[#EFE3D3]">desery</div>
               </div>
          </div>
          <div class="w-full z-[-10] bottom-0 h-full mt-20 flex flex-wrap justify-center mb-10">
               <DinnerList v-for="item in dataFromServer" :data="item" @close="handleShowAlert"/>
          </div>
          <Footer />
        </div>
        <Alert v-if="showAlert"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import DinnerList from "@/components/menuViews/DinnerList.vue";
import Footer from "@/components/navigation/Footer.vue";
import Alert from "@/components/elements/Alert.vue";

import axios from "axios";

const navbarMenuShow = ref(false);
const dataFromServer = ref();
const showAlert = ref(false);

onMounted(() => {
     downloadData();
     scrollToTop();
});

//download data from server
const downloadData = () => {
     axios.get("https://api.jsonbin.io/v3/b/6443cb76b89b1e22998f33c8").then((res) => {
          dataFromServer.value = res.data.record;
          scrollToTop();
     });
};

//select products
//in json file exist 3 categories: dinner | mainCourse | desert
const selectProductsInMenu = (category: String) => {
     axios.get("https://api.jsonbin.io/v3/b/6443cb76b89b1e22998f33c8").then((res) => {
          dataFromServer.value = [];
          res.data.record.forEach((product: Object) => {
               if (product.type === category) {
                    dataFromServer.value.push(product);
                    scrollToTop();
               }
          });
     });
};

//function scroll to top
const scrollToTop = () => {
     window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
     });
};

//function show alert when the product added to basket 
const handleShowAlert = () => {
    showAlert.value = false;
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false;
    }, 2000)
}
</script>

<style scoped></style>
