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
    <ShopBrands link="#" title="محبوب ترین برند ها" :items="brands" />
    <ShopFAQ link="#" title="سوالات متداول" :items="FAQS" />

    <ShopArticles :articles="ARTICLES" />
  </NuxtLayout>
</template>

<script setup>
import { ARTICLES, CATEGORIES, FAQS, PRODUCTS } from '@/constant'
import { getBrands } from '~/api/brand-api'

const { data: brands } = await useAsyncData('brands', async () => {
  const brands = await getBrands()
  return brands.map(brand => ({
    id: brand.id,
    name: brand.title,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png"
  }))
})
</script>