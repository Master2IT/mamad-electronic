<template>
  <div class="my-5 grid w-full grid-cols-7 gap-5">
    <div class="col-span-5">
      <div
        v-if="loading"
        class="mb-4 flex h-[200px] items-center gap-5 rounded-lg border border-gray-200 p-4"
        v-for="i in 1"
        :key="i"
      >
        <div>
          <USkeleton class="h-[150px] w-[200px]" />
        </div>
        <div class="place-self-normal flex w-full flex-col py-2">
          <div class="flex flex-col space-y-2">
            <USkeleton class="h-6 w-2/4" />
          </div>
          <div class="item-center mt-auto flex justify-between gap-10">
            <div class="flex items-center gap-10">
              <USkeleton class="h-5 w-24" />
            </div>
            <div class="flex items-center gap-2">
              <USkeleton class="h-10 w-[100px]" />
              <USkeleton class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      <UCard v-else>
        <div
        v-for="(item, index) in cart"
          v-if="cart.length"
          :class="['flex h-[200px] items-center gap-5', {'border-b border-gray-200' : index !== cart.length - 1}]"
          :key="item.id"
        >
          <div>
            <NuxtImg
              class="w-[200px]"
              :src="BASE_URL + item.file?.path"
              :alt="item.title_fa"
            />
          </div>
          <div class="place-self-normal flex w-full flex-col pb-2 pt-5">
            <div class="flex flex-col space-y-2">
              <h1 class="text-lg font-bold">{{ item.title_fa }}</h1>
              <span class="text-gray-400">
                رنگ : {{ item.prices.color.title_fa }}
              </span>
              <!-- <span class="text-gray-400">گارانتی سلامت کالا</span> -->
              <!-- <span class="text-gray-400">ارسال امروز</span>
              <span class="text-gray-400">ارسال رایگان</span> -->
            </div>
            <div class="item-center mt-auto flex justify-between gap-10">
              <div class="flex items-center gap-10">
                <p
                  class="font-medium text-red-500 line-through"
                  v-if="item.prices.discount_price"
                >
                  {{ item.prices.price.toLocaleString() }} تومان
                </p>
                <p class="font-medium">
                  {{
                    item.prices.discount_price
                      ? item.prices.discount_price.toLocaleString()
                      : item.prices.price.toLocaleString()
                  }}
                  تومان
                </p>
              </div>
              <div class="flex items-center gap-2">
                <UInputNumber
                  class="w-[100px]"
                  v-model="item.quantity"
                  :min="1"
                  :max="10"
                  @update:model-value="updateQuantity(item.prices.id, $event)"
                />
                <UButton
                  color="red"
                  variant="ghost"
                  icon="i-lucide-trash-2"
                  size="sm"
                  @click="removeFromCart(item.id)"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="animate-fade-in flex h-[200px] flex-col items-center justify-center"
        >
          <UIcon
            name="i-lucide-shopping-cart"
            class="animate-bounce-slow mb-4 h-16 w-16 text-gray-400"
          />
          <p class="animate-fade-in-up text-lg font-medium text-gray-500">
            سبد خرید شما خالی است
          </p>
          <UButton
            to="/shop"
            color="primary"
            variant="soft"
            class="animate-fade-in-up mt-4"
            :ui="{ rounded: 'rounded-full' }"
          >
            شروع خرید
          </UButton>
        </div>
      </UCard>
    </div>
    <UCard class="col-span-2 h-fit">
      <template v-if="loading">
        <div class="mb-4 flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <div class="mb-4 flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
        <div class="mb-4 flex justify-between">
          <USkeleton class="h-5 w-1/3" />
          <USkeleton class="h-5 w-1/3" />
        </div>
      </template>
      <div class="space-y-2 text-center" v-else>
        <div class="mb-4 flex justify-between">
          <span>قیمت کالاها ({{ cart.length }})</span>
          <p class="font-medium text-gray-500">
            {{ total.toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span class="font-bold">جمع سبد خرید</span>
          <p class="font-medium">
            {{ (total - totalDiscount).toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <div class="mb-4 flex justify-between">
          <span class="font-bold text-red-500">سود تخفیف پلکانی</span>
          <p class="font-medium">
            {{ totalDiscount.toLocaleString() }}
            <span class="text-xs text-gray-500">تومان</span>
          </p>
        </div>
        <UButton
          to="/address"
          external
          v-if="cart.length"
          color="primary"
          class="mt-4 p-3 px-10"
          >تایید و تکمیل سفارش
        </UButton>
        <span class="block pt-3 text-right text-xs leading-5 text-gray-500"
          >هزینه این سفارش هنوز پرداخت نشده و در صورت اتمام موجودی کالاها از سبد
          خرید حذف میشنود.</span
        >
      </div>
    </UCard>

    <div class="col-span-7" v-show="products.length">
      <ShopProductsCategory
        class="my-5"
        link="#"
        title="خریداران این محصولات، محصولات زیر را هم خریده اند"
        :products="products"
      />
    </div>
  </div>
</template>
<script setup>
import {
  addToCart,
  deleteCartItem,
  fetchCart,
  getProducts,
} from '~/api/product-api'

const BASE_URL = process.env.BASE_URL || 'https://api.merqc.com'

const loading = ref(true)
const cart = ref([])
const total = ref(0)
const totalDiscount = ref(0)
const products = ref([])
// const stepped_dicounts = ref([])

const loadCart = async () => {
  try {
    loading.value = true
    const response = await fetchCart()
    cart.value = response.items
    total.value = response.total
    totalDiscount.value = response.total_discount
    // stepped_dicounts.value.push(response.items.map(item => item.prices.stepped_discount));
  } catch (error) {
    console.error('Error loading cart:', error)
  } finally {
    loading.value = false
  }
}

const loadProducts = async () => {
  try {
    loading.value = true
    const response = await getProducts({ sort: 'popular' })
    products.value = response.items
  } catch (error) {
    console.error('Error loading products:', error)
  } finally {
    loading.value = false
  }
}

const updateQuantity = async (id, quantity) => {
  if (loading.value) return

  loading.value = true
  try {
    await addToCart({
      section: 'ProductPrice',
      target_id: id,
      quantity: quantity,
    })
    loadCart()
  } catch (error) {
    console.error('Error updating quantity:', error)
  } finally {
    loading.value = false
  }
}

const removeFromCart = async (id) => {
  loading.value = true
  try {
    await deleteCartItem(id)
    loadCart()
  } catch (error) {
    console.error('Error removing item from cart:', error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await loadCart()
  await loadProducts()
})
</script>
