<template>
    <div class="w-full flex justify-between h-24 items-center">
        <div class="ml-10">
            <img class="w-10 h-10" src="../../assets/icons/shopping-bag.png" alt="shopping-bag">
        </div>
        <div class="mr-10">
            <Button :text="'Twoje zamówienia'" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Button from '../elements/Button.vue';


</script>

<style scoped lang="scss">

</style>