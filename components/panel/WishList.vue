<template>
    <div class="grid grid-cols-4 gap-4 p-5">
        <CommonProductCard v-for="product in PRODUCTS" :product="product" :key="product.id" />
    </div>
</template>

<script setup>
import { PRODUCTS } from '@/constant';


</script>