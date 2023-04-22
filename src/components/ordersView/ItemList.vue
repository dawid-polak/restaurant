<template>
     <tr class="bg-[#EFE3D3] border-b-[0.8px] border-slate-800 text-black h-20">
          <th scope="row" class="px-6 py-4 font-bold whitespace-nowrap cursor-pointer">{{ data.id }}</th>
          <td class="px-6 py-4">{{ data.date }}</td>
          <td class="px-6 py-4">{{ data.time }}</td>
          <td class="px-6 py-4">{{ data.price }} zł</td>
          <td class="px-6 py-4 text-center">
            <p class="px-2 inline underline cursor-pointer">status</p> 
            <p class="px-2 inline underline text-red-500 cursor-pointer">anuluj</p>
          </td>
     </tr>
</template>

<script setup lang="ts">

const props = defineProps(['data']);

</script>

<style scoped></style>
