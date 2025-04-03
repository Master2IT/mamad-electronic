<template>
  <OrderHistory />
</template>

<script setup>
const { data: orders } = await useFetch('/api/user/orders')
</script>