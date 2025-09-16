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
          <UIcon name="i-lucide-loader-2" class="text-primary h-8 w-8 animate-spin" />
        </div>
        <div v-else class="hover:border-primary rounded-lg border bg-gray-50 p-5 transition-colors mb-3">
          <div class="mb-3 flex items-center justify-between">
            <div class="flex items-center gap-2">.

              <URadioGroup default-value="mellat" :ui="{ item: 'flex items-center gap-2' }" :items="items"
                v-model="selectedPayment">
                <template #label="{ item }">
                  <div class="flex items-center gap-2">
                    <span class="p-2 bg-primary rounded-lg">
                      <img :src="`/${item.img}.svg`" class="w-7 h-7 my-auto" />
                    </span>
                    <div class="flex flex-col gap-1 py-2">
                      <span class="font-medium mr-2 text-lg">{{ item.label.title }}</span>
                      <span class="text-sm text-gray-500">{{ item.label.description }}</span>
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
        <div class="border border-dashed border-gray-300 my-4" />
        <div class="mb-4 flex justify-between">
          <span class="font-bold">مبلغ قابل پرداخت</span>
          <p class="font-medium">
            {{ (total || 0).toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <UButton color="primary" class="mt-4 w-full p-3 justify-center" :loading="loading" @click="confirmOrder"
          :disabled="!savedAddresses.length">
          تایید و تکمیل سفارش
        </UButton>

      </div>
    </UCard>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { fetchCart } from '~/api/product-api'

const items = ref([
  {
    label: {
      title: 'پرداخت آنلاین',
      description: 'قابل پرداخت با تمامی کارت های عضو شتاب'
    },
    value: 'mellat',
    img: 'mellat',
  },
  {
    label: {
      title: 'پرداخت اقساطی اسنپ پی',
      description: '4 قسط ماهیانه'
    },
    value: 'snapp',
    img: 'snapp',
  },
  {
    label: {
      title: 'پرداخت در محل',
      description: 'پرداخت هزینه درب منزل'
    },
    value: 'cash',
    img: 'truck',
  }
])
const selectedPayment = ref('mellat')
const onSubmit = () => {
  if (editMode.value) {
    editPayment()
  } else {
    savePayment()
  }
}

const validate = (state) => {
  const errors = []

  if (!state.name) errors.push({ name: 'name', message: 'نام الزامی است' })
  if (!state.family)
    errors.push({ name: 'family', message: 'نام خانوادگی الزامی است' })
  if (!state.mobile)
    errors.push({ name: 'mobile', message: 'شماره موبایل الزامی است' })
  if (!state.province_id)
    errors.push({ name: 'province_id', message: 'استان الزامی است' })
  if (!state.city_id)
    errors.push({ name: 'city_id', message: 'شهر الزامی است' })
  if (!state.user_address)
    errors.push({ name: 'user_address', message: 'آدرس الزامی است' })
  if (!state.number) errors.push({ name: 'number', message: 'پلاک الزامی است' })
  if (!state.postal_code)
    errors.push({ name: 'postal_code', message: 'کد پستی الزامی است' })
  return errors
}

const loading = ref(true)
const isOpen = ref(false)
const confirmDelete = ref(false)
const editMode = ref(false)

// Form data
const addressForm = reactive({
  user_address: '',
  number: '',
  postal_code: '',
  im_owner: true,
  name: '',
  family: '',
  mobile: '',
  province_id: '',
  city_id: '',
})

// Cart data (example data)
const cart = ref([])
const total = ref(0)
const totalDiscount = ref(0)
const savedAddresses = ref([])
const selectedId = ref(null)


const loadCart = async () => {
  try {
    loading.value = true
    const response = await fetchCart()
    cart.value = response.items
    total.value = response.total
    totalDiscount.value = response.total_discount
    // total_discount_price.value = response.prices.total_discount_price
    // stepped_dicounts.value.push(response.items.map(item => item.prices.stepped_discount));
  } catch (error) {
    console.error('Error loading cart:', error)
  } finally {
    loading.value = false
  }
}


// Simulate loading
onMounted(async () => {
  await loadCart()
})
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
