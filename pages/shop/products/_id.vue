<template>
  <ProductDetail :product="product" />
</template>

<script setup>
const route = useRoute()
const { data: product } = await useFetch(`/api/products/${route.params.id}`)
</script>