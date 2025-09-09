<template>
  <NuxtLayout name="shop">
    <client-only>
      <ShopSlider />
    </client-only>
    <!-- Categories -->
    <ShopCategoriesCard :items="categories" />

    <ShopAmazingProducts />
    <ShopProductsCategory link="/products?sort=newest" title="جدیدترین محصولات" :products="PRODUCTS" type="newest" />
    <ShopProductsCategory link="/products?sort=chosen" title="پیشنهادات" :products="PRODUCTS" type="chosen" />
    <ShopBrands link="/brands" title="محبوب ترین برند ها" :items="brands" />
    <ShopFAQ link="/faqs" title="سوالات متداول" :items="FAQS" />

    <ShopArticles link="/articles" :articles="ARTICLES" />
  </NuxtLayout>
</template>

<script setup>
import { ARTICLES, FAQS, PRODUCTS } from '@/constant'
import { getBrands } from '~/api/brand-api'
import { getCategories } from '~/api/category-api'
const BASE_URL = process.env.BASE_URL;
const { data: brands } = await useAsyncData('brands', async () => {
  const brands = await getBrands()
  return brands.map(brand => ({
    id: brand.id,
    name: brand.title,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png"
  }))
})
const { data: categories } = await useAsyncData('categories', async () => {
  const categories = await getCategories()
  return categories[0].children.map(category => ({
    id: category.id,
    name: category.title,
    image: `${BASE_URL}/${category.image}`,
    to: `/category/${category?.slug || category.id}`,
  }))
})
</script>