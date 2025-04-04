<template>
  <div class="px-24">
    <!--        <ShopAmazingProducts />-->
    <!--        <ShopFAQ :items="FAQS"/>-->
    <!--      <ShopProductCard :product="PRODUCTS"/>-->
    <!--      <ShopReviews  :items="REVIEWS"/>-->
    <!--      <ShopUserReviews :items="USER_REVIEWS"/>-->
    <ShopSpecificationsProduct :items="SPECIFICATIONS"/>
  </div>
</template>

<script setup>
import {FAQS} from "@/constant";
import {PRODUCTS} from "@/constant";
import {USER_REVIEWS} from "@/constant";
import {REVIEWS} from "@/constant";
import {SPECIFICATIONS} from "@/constant";
</script>