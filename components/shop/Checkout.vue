<template>
  <div class="my-5 grid w-full grid-cols-1 gap-5 sm:grid-cols-7">
    <div class="col-span-1 sm:col-span-5">
      <UCard class="shadow-sm">
        <template #header>
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-map-pin" class="text-primary" />
              <h2 class="text-lg font-bold">شیوه پرداخت</h2>
            </div>
          </div>
        </template>

        <div v-if="loading" class="flex items-center justify-center p-12">
          <UIcon
            name="i-lucide-loader-2"
            class="text-primary h-8 w-8 animate-spin"
          />
        </div>
        <div
          v-else
          class="hover:border-primary mb-3 rounded-lg border bg-gray-50 p-5 transition-colors"
        >
          <div class="mb-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
              .

              <URadioGroup
                default-value="mellat"
                :ui="{ item: 'flex items-center gap-2' }"
                :items="items"
                v-model="selectedPayment"
              >
                <template #label="{ item }">
                  <div class="flex items-center gap-2">
                    <span class="bg-primary rounded-lg p-2">
                      <img :src="`/${item.img}.svg`" class="my-auto h-7 w-7" />
                    </span>
                    <div class="flex flex-col gap-1 py-2">
                      <span class="mr-2 text-lg font-medium">{{
                        item.label.title
                      }}</span>
                      <span class="text-sm text-gray-500">{{
                        item.label.description
                      }}</span>
                    </div>
                  </div>
                </template>
              </URadioGroup>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <UCard class="col-span-1 sm:col-span-2">
      <template #header>
        <div class="mb-2 flex items-center gap-2">
          <UIcon name="i-lucide-shopping-cart" class="text-primary" />
          <h2 class="text-lg font-bold">خلاصه سفارش</h2>
        </div>
        <UDivider />
      </template>

      <div v-if="loading" class="space-y-4 p-2">
        <div class="flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <div class="flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <div class="flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <USkeleton class="mt-4 h-10 w-full" />
      </div>

      <div class="space-y-2" v-else>
        <div class="mb-4 flex justify-between">
          <span>قیمت کالاها ({{ cart?.length || 0 }})</span>
          <p class="font-medium text-gray-500">
            {{ total?.toLocaleString() || '0' }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span>سود شما</span>
          <p class="font-medium text-gray-500">
            {{ totalDiscount?.toLocaleString() || '0' }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span class="font-bold">جمع سبد خرید</span>
          <p class="font-medium">
            {{ ((total || 0) - (totalDiscount || 0)).toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span class="font-bold text-red-500">هزینه ارسال</span>
          <p class="font-medium text-red-500">
            <!-- {{ (totalDiscount || 0).toLocaleString() }}
               -->
            0
            <span class="text-xs">تومان</span>
          </p>
        </div>
        <div class="my-4 border border-dashed border-gray-300" />
        <div class="mb-4 flex justify-between">
          <span class="font-bold">مبلغ قابل پرداخت</span>
          <p class="font-medium">
            {{ (total || 0).toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <UButton
          color="primary"
          class="mt-4 w-full justify-center p-3"
          :loading="loading"
          @click="onSubmit"
          :disabled="!cartStore.getSelectedAddressId"
        >
          تایید و تکمیل سفارش
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup>
import paymentApi from '~/api/payment-api'
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()

const items = ref([
  {
    label: {
      title: 'پرداخت آنلاین',
      description: 'قابل پرداخت با تمامی کارت های عضو شتاب',
    },
    value: 'mellat',
    img: 'mellat',
  },
  // {
  //   label: {
  //     title: 'پرداخت اقساطی اسنپ پی',
  //     description: '4 قسط ماهیانه'
  //   },
  //   value: 'snapp',
  //   img: 'snapp',
  // },
  // {
  //   label: {
  //     title: 'پرداخت در محل',
  //     description: 'پرداخت هزینه درب منزل'
  //   },
  //   value: 'cash',
  //   img: 'truck',
  // }
])

const form = ref({
  address_id: cartStore.getSelectedAddressId,
  payment_method: 'saman_GW',
  shipping_method: 'Post',
  amount: cartStore.getTotal,
})

const total = computed(() => cartStore.getTotal)
const totalDiscount = computed(() => cartStore.getTotalDiscount)
const cart = computed(() => cartStore.getItems)
const selectedPayment = ref('mellat')
const loading = ref(false)

const onSubmit = async () => {
  try {
    loading.value = true
    const data = await paymentApi.pay(form.value)
    window.open(data.url)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce 2s infinite;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
