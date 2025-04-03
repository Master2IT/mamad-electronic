<template>
  <section class="featured-product">
    <img :src="product.image" :alt="product.name">
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <p class="price">{{ formatPrice(product.price) }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      id: 1,
      name: 'Featured Product',
      price: 99.99,
      image: '/images/featured.jpg'
    })
  }
})

const formatPrice = (price) => `$${price.toFixed(2)}`
const addToCart = () => {
  // Cart logic here
}
</script>