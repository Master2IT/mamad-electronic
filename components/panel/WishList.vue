<template>
<div class="flex flex-col gap-5 p-5">
    <div>
        <h1 class="text-2xl font-bold mb-1">علاقه مندی ها</h1>
        <p class="text-gray-600">مواردی که لیست شده</p>
    </div>
    <div class="grid grid-cols-4 gap-4">
        <CommonProductCard :type="2" show-review v-for="product in PRODUCTS" :product="product" :key="product.id" />
    </div>
</div>
</template>

<script setup>
import { PRODUCTS } from '@/constant';


</script>