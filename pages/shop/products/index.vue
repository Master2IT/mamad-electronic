<template>
  <div>
    <ProductFilters />
    <ProductGrid :products="products" />
  </div>
</template>

<script setup>
const { data: products } = await useFetch('/api/products')
</script>