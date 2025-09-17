<template>
  <cilent-only>
    <header class="mb-5 border-b border-gray-200 !bg-white px-4">
      <UContainer>
        <div class="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
          <!-- Logo and Brand -->
          <nuxt-link external to="/">
            <div class="flex items-center justify-center md:justify-start">
              <NuxtImg src="logo.svg" alt="logo" class="ml-2 w-[60px] md:w-[81px]" />
              <div>
                <p class="text-secondary-300 text-xl leading-6 font-bold md:text-2xl lg:text-4xl">
                  محمد
                </p>
                <span class="text-sm md:text-base">الکترونیک</span>
              </div>
            </div>
          </nuxt-link>

          <!-- Search Bar -->
          <div class="order-3 flex w-full gap-2 md:order-2 md:w-auto">
            <UInput placeholder="جستجو" icon="i-heroicons-magnifying-glass" class="w-full md:w-[300px] lg:w-[500px]"
              size="xl" @keydown.enter="goToSearch" />
          </div>

          <!-- User Actions -->
          <div class="order-2 hidden w-full md:order-3 md:block md:w-auto md:space-y-4">
            <div class="flex items-center justify-end gap-4 md:hidden">
              <UButton variant="ghost" icon="i-lucide-shopping-cart" class="size-8 md:size-10" />
              <UButton color="primary" icon="i-lucide-log-in" size="sm" class="text-sm">
                ورود
              </UButton>
            </div>
            <div class="hidden items-center justify-between gap-4 md:flex">
              <UModal close v-model:open="isLoginModalOpen" @update:open="authStore.setLoginModal" v-if="!hasToken">
                <UButton color="primary" icon="i-lucide-log-in" size="lg" class="text-sm md:text-base">
                  ورود / ثبت نام
                </UButton>
                <template #content>
                  <AuthLoginForm v-if="!isCodeSent" />
                  <AuthVerifyForm v-else />
                </template>
              </UModal>
              <nuxt-link external v-else to="/panel/profile" color="secondary" icon="i-lucide-log-out" size="lg"
                class="text-sm md:text-base">
                <UButton color="secondary" icon="i-lucide-log-out" size="lg" class="text-sm md:text-base">
                  ورود به پنل
                </UButton>
              </nuxt-link>
              <!-- Basket -->
              <UPopover @update:open="getCart" mode="hover" :open-delay="0" :close-delay="0">
                <template #default>
                  <UChip :color="cartItemsCount > 0 ? 'success' : 'gray'" inset>
                    <UButton icon="i-lucide-shopping-cart" size="lg" color="primary" variant="ghost"></UButton>
                  </UChip>
                </template>

                <template #content>
                  <div class="w-96 overflow-hidden rounded-lg bg-white shadow-xl">
                    <!-- Header -->
                    <div class="from-primary-500 to-primary-600 bg-gradient-to-r px-6 py-4">
                      <div class="flex items-center justify-between">
                        <h3 class="flex items-center gap-2 text-lg font-bold text-white">
                          <Icon name="i-lucide-shopping-cart" class="h-5 w-5" />
                          سبد خرید
                        </h3>
                        <div v-if="cartItemsCount > 0" class="rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
                          <span class="text-sm font-medium text-white">{{ cartItemsCount }} کالا</span>
                        </div>
                      </div>
                    </div>

                    <!-- Empty State -->
                    <div v-if="cartItems.length === 0" class="px-6 py-12 text-center">
                      <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                        <Icon name="i-lucide-shopping-cart" class="h-10 w-10 text-gray-400" />
                      </div>
                      <p class="mb-2 font-medium text-gray-600">
                        سبد خرید شما خالی است
                      </p>
                      <p class="text-sm text-gray-400">
                        محصولات مورد نظر خود را اضافه کنید
                      </p>
                    </div>

                    <!-- Cart Items -->
                    <div v-else class="px-4 py-2">
                      <div class="custom-scrollbar max-h-80 space-y-3 overflow-y-auto">
                        <div v-for="item in cartItems" :key="item.id"
                          class="hover:border-primary-200 hover:bg-primary-50/30 flex items-center gap-3 rounded-lg border border-gray-100 p-3 transition-all duration-200">
                          <!-- Product Image -->
                          <div class="relative flex-shrink-0">
                            <NuxtImg v-if="item.image" :src="item.image" :alt="item.title_fa"
                              class="h-14 w-14 rounded-lg border border-gray-200 object-cover" />
                            <div v-else class="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100">
                              <Icon name="i-lucide-image" class="h-6 w-6 text-gray-400" />
                            </div>
                            <!-- Quantity Badge -->
                            <div
                              class="bg-primary-500 absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium text-white">
                              {{ item.quantity }}
                            </div>
                          </div>

                          <!-- Product Details -->
                          <div class="min-w-0 flex-1">
                            <p class="mb-1 truncate text-sm font-semibold text-gray-800">
                              {{ item.title_fa }}
                            </p>
                            <div class="space-y-1">
                              <p class="text-primary-600 text-sm font-medium" :class="{
                                'line-through': item.prices.discount_price,
                              }">
                                {{ item.prices.price.toLocaleString() }}
                                <span class="text-xs text-gray-500">تومان</span>
                              </p>
                              <p v-if="item.prices.discount_price" class="text-xs text-red-500">
                                {{
                                  item.prices.discount_price.toLocaleString()
                                }}
                                <span class="text-xs">تومان</span>
                              </p>
                              <div class="flex items-center gap-2 text-xs text-gray-500">
                                <span class="flex items-center gap-1">
                                  رنگ :
                                  {{ item.prices.color.title_fa }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Total and Action -->
                      <div class="mt-4 space-y-3 border-t border-gray-200 pt-4">
                        <!-- Total Price -->
                        <div class="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                          <span class="font-medium text-gray-600">مجموع:</span>
                          <span class="text-lg font-bold text-gray-800">
                            {{
                              cartItems
                                .reduce(
                                  (total, item) =>
                                    total + item.prices.price * item.quantity,
                                  0
                                )
                                .toLocaleString()
                            }}
                            <span class="text-sm font-normal text-gray-500">تومان</span>
                          </span>
                        </div>

                        <!-- Action Button -->
                        <UButton to="/cart" color="primary" variant="solid" size="lg"
                          class="w-full justify-center font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
                          @click="goToCard">
                          <Icon name="i-lucide-arrow-left" class="ml-2 h-4 w-4" />
                          مشاهده و تکمیل سبد خرید
                        </UButton>
                      </div>
                    </div>
                  </div>
                </template>
              </UPopover>
            </div>
            <div class="flex justify-between text-xs sm:text-sm md:text-base">
              <p>پشتیبانی</p>
              <p class="text-secondary">{{ header.mobile }}</p>
            </div>
          </div>
        </div>
      </UContainer>
      <nav class="mt-3">
        <UContainer>
          <div class="flex items-center gap-5 hidden md:block">
            <CommonMegaMenu :categories="categories" />
          </div>
        </UContainer>
        <div class="md:hidden absolute top-2 right-2">
          <UButton icon="i-lucide-menu" color="neutral" variant="subtle" size="lg" @click="isMenuOpen = true" />
          <UDrawer direction="right" v-model:open="isMenuOpen">
            <template #content>
              <CommonMegaMenuMobile :categories="categories" />
            </template>
          </UDrawer>
        </div>

      </nav>
    </header>
  </cilent-only>
</template>
<script setup>
import { getCategories } from '~/api/category-api'
import { fetchCart } from '~/api/product-api'
import settingsApi from '~/api/settings-api'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'
const authStore = useAuthStore()
const { hasToken } = useAuth()
const cartStore = useCartStore()

const isLoginModalOpen = computed(() => {
  return authStore.getLoginModal
})

const isCodeSent = computed(() => {
  return authStore.isCodeSent
})

const categories = ref([])
const isMenuOpen = ref(false)
const header = ref({
  mobile: 0,
})

const cartItemsCount = computed(() => {
  return cartStore.getItemCount
})

const cartItems = computed(() => {
  return cartStore.getItems
})

// Transform category data to the required format
const transformCategory = (category) => ({
  id: category.id,
  label: category.title,
  slug: category.slug,
  status: category.status,
  icon: category.icon,
  image: category.image,
  show_in_menu: category.show_in_menu,
  to: `/category/${category.slug}`,
  children: category?.children?.map(transformCategory),
})

const getCart = async () => {
  const cartItemsResponse = await fetchCart()
  cartStore.setItems(cartItemsResponse.items)
  cartStore.setTotal(cartItemsResponse.total)
  cartStore.setTotalDiscount(cartItemsResponse.total_discount)
}

onMounted(async () => {
  const headerResponse = await settingsApi.getHeader()
  header.value = headerResponse

  const categoriesData = await getCategories()
  categories.value = categoriesData.map(transformCategory)

  getCart()
})

const goToCard = () => {
  const isAuth = CookieStorage.get('token')
  if (isAuth) {
    window.location.href = '/cart'
  } else {
    authStore.setLoginModal(true)
  }
}

const goToSearch = () => {
  const searchValue = document.querySelector('input[placeholder="جستجو"]').value
  window.location.href = `/search?q=${searchValue}`
}
</script>
