<template>
  <div class="md:px-24">
    <div class="grid grid-cols-8 gap-3 h-[410px]">
      <div class="col-span-6">
        <img class="w-full h-[410px] rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K3aqrxZ6ZRGdF1udMU_w9gHaEJ%26pid%3DApi&f=1&ipt=32ef0b7bdd8652ef9ec3454de585bd08d44f76d3f1e4f547b33350a27e22c221&ipo=images" alt="">
      </div>
    <div class="col-span-2 flex flex-col gap-4">
      <img class="h-[197px] w-full rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hu01Ni5boV2C9jffzqZKsQHaEP%26pid%3DApi&f=1&ipt=3f2e2523148b16691711eb3f33ea440c81869001700397734538a60d3f82869c&ipo=images" alt="">
      <img class="h-[197px] w-full rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hu01Ni5boV2C9jffzqZKsQHaEP%26pid%3DApi&f=1&ipt=3f2e2523148b16691711eb3f33ea440c81869001700397734538a60d3f82869c&ipo=images" alt="">
    </div>
      
    </div>
    <!--        <ShopAmazingProducts />-->
    <!--        <ShopFAQ :items="FAQS"/>-->
    <!--      <ShopProductCard :product="PRODUCTS"/>-->
         <!-- <ShopReviews  :items="REVIEWS"/> -->
         <ShopUserReviews :items="USER_REVIEWS"/>
    <!-- <ShopSpecificationsProduct :items="SPECIFICATIONS"/> -->
  </div>
</template>

<script setup>
import {FAQS} from "@/constant";
import {PRODUCTS} from "@/constant";
import {USER_REVIEWS} from "@/constant";
import {REVIEWS} from "@/constant";
import {SPECIFICATIONS} from "@/constant";
</script>