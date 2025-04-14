<template>
  <NuxtLayout name="shop">
    <div class="grid grid-cols-8 gap-3 h-[410px]">
      <div class="col-span-6">
        <img class="w-full h-[410px] rounded-md"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.K3aqrxZ6ZRGdF1udMU_w9gHaEJ%26pid%3DApi&f=1&ipt=32ef0b7bdd8652ef9ec3454de585bd08d44f76d3f1e4f547b33350a27e22c221&ipo=images"
          alt="">
      </div>
      <div class="col-span-2 flex flex-col gap-4">
        <img class="h-[197px] w-full rounded-md"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hu01Ni5boV2C9jffzqZKsQHaEP%26pid%3DApi&f=1&ipt=3f2e2523148b16691711eb3f33ea440c81869001700397734538a60d3f82869c&ipo=images"
          alt="">
        <img class="h-[197px] w-full rounded-md"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Hu01Ni5boV2C9jffzqZKsQHaEP%26pid%3DApi&f=1&ipt=3f2e2523148b16691711eb3f33ea440c81869001700397734538a60d3f82869c&ipo=images"
          alt="">
      </div>
    </div>
    <!-- Categories -->
    <div class="grid grid-cols-6 gap-2 my-10">
      <ShopCategoryCard v-for="category in CATEGORIES" :key="category.id" :image="category.image"
        :name="category.name" />
    </div>
  
    <ShopAmazingProducts />
    <ShopProductsCategory link="#" title="جدید ترین محصولات" :products="PRODUCTS" />
    <ShopProductsCategory link="#" title="پیشنهادات" :products="PRODUCTS" />
    <ShopBrands link="#" title="محبوب ترین برند ها" :items="BRANDS" />
    <ShopFAQ link="#" title="سوالات متداول" :items="FAQS" />

    <!-- <CommonProductCard :product="PRODUCTS" /> -->
    <!-- <ShopReviews :items="REVIEWS" /> -->
    <!-- <ShopUserReviews :items="USER_REVIEWS" /> -->
    <!-- <ShopSpecificationsProduct :items="SPECIFICATIONS" /> -->
  </NuxtLayout>
</template>

<script setup>
import { CATEGORIES, PRODUCTS, BRANDS, FAQS } from '@/constant'
</script>