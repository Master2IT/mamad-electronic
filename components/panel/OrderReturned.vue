<template>
  <CommonOrderDetail
    v-for="item in orders"
    :key="item.id"
    :order="item"
    :is-loading="isLoading"
  />
  <div
    v-if="!isLoading && orders.length === 0"
    class="flex flex-col items-center justify-center py-12 text-center"
  >
    <UIcon name="i-lucide-package-x" class="mb-4 text-6xl text-gray-400" />
    <h3 class="mb-2 text-lg font-semibold text-gray-700">
      هیچ سفارش مرجوع شده‌ای یافت نشد
    </h3>
    <p class="text-gray-500">شما هنوز هیچ سفارش مرجوع شده‌ای ندارید.</p>
  </div>
</template>
<script setup>
import invoiceApi from '~/api/invoice-api'

const orders = ref([
  {
    id: 1,
    item: {},
  },
])
const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true
  try {
    const response = await invoiceApi.getInvoices({
      search: {
        order_status: 'Returned',
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
