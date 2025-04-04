<template>
    <div>
        <ShopAmazingProducts />
        <ShopFAQ :items="FAQS"/>
    </div>
</template>

<script setup>
import { FAQS } from "@/constant";
</script>