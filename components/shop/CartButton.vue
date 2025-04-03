<template>
  <button class="cart-button" @click="navigateToCart">
    Cart ({{ cartStore.itemCount }})
  </button>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const navigateToCart = () => {
  navigateTo('/shop/cart')
}
</script>