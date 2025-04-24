<template>
  <NuxtLayout name="shop">
    <client-only>
      <ShopSlider />
    </client-only>
    <!-- Categories -->
    <ShopCategoriesCard :items="CATEGORIES" />

    <ShopAmazingProducts />
    <ShopProductsCategory link="#" title="جدید ترین محصولات" :products="PRODUCTS" />
    <ShopProductsCategory link="#" title="پیشنهادات" :products="PRODUCTS" />
    <ShopBrands link="#" title="محبوب ترین برند ها" :items="BRANDS" />
    <ShopFAQ link="#" title="سوالات متداول" :items="FAQS" />

    <ShopArticles :articles="ARTICLES" />

    <!-- <CommonProductCard :product="PRODUCTS" /> -->
    <!-- <ShopReviews :items="REVIEWS" /> -->
    <!-- <ShopUserReviews :items="USER_REVIEWS" /> -->
    <!-- <ShopSpecificationsProduct :items="SPECIFICATIONS" /> -->
  </NuxtLayout>
</template>

<script setup>
import { CATEGORIES, PRODUCTS, BRANDS, FAQS, ARTICLES } from '@/constant'
</script>