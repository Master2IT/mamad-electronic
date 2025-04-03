<template>
  <div class="product-grid">
    <ProductCard 
      v-for="product in products" 
      :key="product.id" 
      :product="product" 
    />
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>