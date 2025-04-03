<template>
  <div class="category-grid">
    <div 
      v-for="category in categories" 
      :key="category.id" 
      class="category-card"
    >
      <img :src="category.image" :alt="category.name">
      <h3>{{ category.name }}</h3>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { id: 1, name: 'Electronics', image: '/images/electronics.jpg' },
  { id: 2, name: 'Clothing', image: '/images/clothing.jpg' },
  { id: 3, name: 'Home', image: '/images/home.jpg' },
  { id: 4, name: 'Sports', image: '/images/sports.jpg' }
]
</script>