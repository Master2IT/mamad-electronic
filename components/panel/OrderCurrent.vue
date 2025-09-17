<template>
  <CommonOrderDetail
    type="current"
    v-for="item in orders"
    :key="item.id"
    :order="item"
    :is-loading="isLoading"
  />
</template>

<script setup>
import invoiceApi from '~/api/invoice-api'


const orders = ref([])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  try {
    const response = await invoiceApi.getInvoices({
      search: {
        order_status: 'Awaiting',
      },
    })
    orders.value = response
  } catch (error) {
    console.error('Error fetching orders:', error)
  } finally {
    isLoading.value = false
  }
})
</script>
