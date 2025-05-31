<template>
  <NuxtLayout name="shop">
    <client-only>
      <ShopSlider />
    </client-only>
    <!-- Categories -->
    <ShopCategoriesCard :items="CATEGORIES" />

    <ShopAmazingProducts />
    <ShopProductsCategory link="#" title="جدیدترین محصولات" :products="PRODUCTS" type="newest" />
    <ShopProductsCategory link="#" title="پیشنهادات" :products="PRODUCTS" type="chosen" />
    <ShopBrands link="#" title="محبوب ترین برند ها" :items="BRANDS" />
    <ShopFAQ link="#" title="سوالات متداول" :items="FAQS" />

    <ShopArticles :articles="ARTICLES" />

    <!-- <ShopReviews :items="REVIEWS" />
    <ShopUserReviews :items="USER_REVIEWS" />
    <ShopSpecificationsProduct :items="SPECIFICATIONS" /> -->
  </NuxtLayout>
</template>

<script setup>
import { CATEGORIES, PRODUCTS, BRANDS, FAQS, ARTICLES } from '@/constant'
</script>