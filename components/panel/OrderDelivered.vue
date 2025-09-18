<template>
  <CommonOrderDetail v-for="item in orders" :key="item.id" :order="item" :is-loading="isLoading" />
  <div v-if="!isLoading && orders.length === 0" class="flex flex-col items-center justify-center py-12 text-center">
    <UIcon name="i-lucide-package-x" class="text-6xl text-gray-400 mb-4" />
    <h3 class="text-lg font-semibold text-gray-700 mb-2">هیچ سفارش تحویل شده‌ای یافت نشد</h3>
    <p class="text-gray-500">شما هنوز هیچ سفارش تحویل شده‌ای ندارید.</p>
  </div>
</template>
<script setup>
import invoiceApi from '~/api/invoice-api'


const orders = ref([
  {
    id: 1,
    item: {}
  },
])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  try {
    const response = await invoiceApi.getInvoices({
      search: {
        order_status: 'Delivered',
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
