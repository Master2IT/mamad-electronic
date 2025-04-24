<template>
  <CommonOrderDetail v-for="item in items" :key="item.id" :order="item" />
</template>

<script setup>
const items = ref([
  {
    code: '38663813136',
    date: '16 فروردین 14:03',
    amount: '15,123,800',
    discount: '55,800',
    deliveryDate: 'پنج شنبه 23 فروردین 5 - 9 عصر',
    productImage: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    status: 'delivered' // can be 'processing', 'readyToShip', 'delivered', 'cancelled'
  },
  {
    code: '38663813136',
    date: '16 فروردین 14:03',
    amount: '15,123,800',
    discount: '55,800',
    deliveryDate: 'پنج شنبه 23 فروردین 5 - 9 عصر',
    productImage: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    status: 'delivered'
  }
]);

</script>