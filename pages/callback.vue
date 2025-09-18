<template>
  <NuxtLayout name="checkout">
    <div class="flex items-center justify-center p-4">
      <div class="max-w-md w-full">
        <UCard class="text-center" variant="soft">
          <template #header>
            <div class="flex justify-center mb-4">
              <UIcon :name="statusConfig.icon" :class="statusConfig.iconClass" class="h-16 w-16" />
            </div>
            <h1 class="text-2xl font-bold" :class="statusConfig.titleClass">
              {{ statusConfig.title }}
            </h1>
          </template>

          <div class="space-y-4">
            <p class="text-gray-600">
              {{ statusConfig.message }}
            </p>

            <div class="flex flex-col gap-3 mt-6">
              <UButton color="primary" size="xl" class="w-full justify-center" to="/" external>
                بازگشت به صفحه اصلی
              </UButton>

              <UButton v-if="status === 'Accepted'" color="gray" variant="soft" size="xl" class="w-full justify-center"
                to="/panel/orders" external>
                مشاهده سفارشات
              </UButton>

              <UButton v-if="status === 'Declined'" color="gray" variant="soft" size="lg" class="w-full justify-center"
                to="/cart" external>
                بازگشت به سبد خرید
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'

// Get status from query parameters
const route = useRoute()
const status = computed(() => {
  const queryStatus = route.query.status?.toLowerCase()
  
  // Map different status values to our internal status
  if (queryStatus === 'declined') {
    return 'Declined'
  } else if (queryStatus === 'accepted') {
    return 'Accepted'
  }
  
  return 'failed' // Default to failed if status is unknown
})

// Configuration for different payment statuses
const statusConfig = computed(() => {
  switch (status.value) {
    case 'Accepted':
      return {
        icon: 'i-lucide-check-circle',
        iconClass: 'text-green-500',
        titleClass: 'text-green-700',
        title: 'پرداخت موفق',
        message: 'پرداخت شما با موفقیت انجام شد. سفارش شما در حال پردازش است.'
      }
    case 'Declined':
      return {
        icon: 'i-lucide-x-circle',
        iconClass: 'text-orange-500',
        titleClass: 'text-orange-700',
        title: 'پرداخت لغو شد',
        message: 'پرداخت توسط شما لغو شد. می‌توانید مجدداً تلاش کنید.'
      }
    default:
      return {
        icon: 'i-lucide-alert-circle',
        iconClass: 'text-red-500',
        titleClass: 'text-red-700',
        title: 'پرداخت ناموفق',
        message: 'متأسفانه پرداخت شما با خطا مواجه شد. لطفاً مجدداً تلاش کنید.'
      }
  }
})

// Set page meta
useHead({
  title: statusConfig.value.title,
  meta: [
    {
      name: 'description',
      content: statusConfig.value.message
    }
  ]
})
</script>
