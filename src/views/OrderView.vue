<template>
     <div class="absolute w-full mt-32 flex flex-col items-center">
          <div class="flex flex-col items-center justify-center">
               <img class="w-24 h-24 object-cover rounded-full" src="https://images.unsplash.com/photo-1615500025837-cf3a8716c83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-3" />
               <h1 class="text-2xl font-thin mt-5">Zamówienie numer:</h1>
               <p class="font-bold">{{ dataOrder.id }}</p>
          </div>

          <div class="relative overflow-x-auto w-full max-w-2xl mt-5">
               <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-black">
                         <tr>
                              <th scope="col" class="px-6 py-3">Nazwa dania</th>
                              <th scope="col" class="px-6 py-3">Ilość</th>
                              <th scope="col" class="px-6 py-3">Cena</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr class="bg-[#EFE3D3] border-b text-black" v-for="product in dataOrder.products">
                              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">{{ product.name }}</th>
                              <td class="px-6 py-4">{{ product.numberOfProduct }}</td>
                              <td class="px-6 py-4">{{ product.price }}</td>
                         </tr>
                    </tbody>
               </table>
          </div>
          <h5 v-if="dataOrder.price" class="mt-5">Łączna cena: {{ dataOrder.price}} zł</h5>
          <div>
               <h1 class="text-2xl text-green-500 p-5 text-center font-bold">{{ dataOrder.status }}</h1>
               <p></p>
               <p class="text-center">
                    Dziękujemy za zakupy w naszej restaucaji. <br />
                    <span class="font-bold">Zapraszamy ponownie! </span><br />
               </p>
          </div>
          <div class="w-full flex bottom-0 h-[20%] sm:h-[30%] mt-10">
               <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1027&q=80" alt="img-1" />
               <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1591459034470-d1e05d7b05d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-2" />
               <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1615500025837-cf3a8716c83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-3" />
               <img class="w-1/4 object-cover" src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="img-4" />
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useOrders } from "@/stores/orders";

const route = useRoute();
const idOrder = Number(route.params.id);
const storeOrders = useOrders();
const dataOrder = ref({});

onMounted(() => {
     storeOrders.orders.forEach((order) => {
          if (order.id === idOrder) {
               dataOrder.value = order;
          }
     });
});
</script>

<style scoped></style>
