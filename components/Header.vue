<template>
  <header class="border-b border-gray-200 !bg-white px-4 mb-5">
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
            <UButton v-else to="/panel/profile" color="secondary" icon="i-lucide-log-out" size="lg"
              class="text-sm md:text-base">
              ورود به پنل
            </UButton>
            <UButton icon="i-lucide-shopping-cart" size="lg" color="primary" variant="ghost" @click="goToCard" />
          </div>
          <div class="flex justify-between text-xs sm:text-sm md:text-base">
            <p>پشتیبانی</p>
            <p class="text-secondary">۰۳۱-۳۲۳۷۲۷۶۷</p>
          </div>
        </div>
      </div>
    </UContainer>
    <nav class="mt-3">
      <UContainer>
        <div class="flex items-center gap-5">
          <CommonMegaMenu :categories="categories" />
        </div>
      </UContainer>
    </nav>
  </header>
</template>
<script setup>
import { getCategories } from '~/api/category-api'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { hasToken } = useAuth()

const isLoginModalOpen = computed(() => {
  return authStore.getLoginModal
})

const isCodeSent = computed(() => {
  return authStore.isCodeSent
})
const { data: categories } = await useAsyncData('categories', async () => {
  const categories = await getCategories()
  return categories.map((category) => ({
    id: category.id,
    label: category.title,
    slug: category.slug,
    status: category.status,
    icon: category.icon,
    image: category.image,
    show_in_menu: category.show_in_menu,
    to: `/category/${category.slug}`,
    children: category?.children?.map((child) => ({
      id: child.id,
      label: child.title,
      to: `/category/${child?.slug || child.id}`,
      status: child.status,
      children: child?.children?.map((subChild) => ({
        id: subChild.id,
        label: subChild.title,
        to: `/category/${subChild?.slug || subChild.id}`,
        status: subChild.status,
      })),
    })),
  }))
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
