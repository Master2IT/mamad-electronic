<template>
  <header class="border-b min-h-[174px] px-4">
    <UContainer>
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
        <!-- Logo and Brand -->
        <nuxt-link external to="/">
          <div class="flex items-center justify-center md:justify-start">
            <NuxtImg src="logo.svg" alt="logo" class="w-[60px] md:w-[81px] ml-2" />
            <div>
              <p class="text-secondary-300 leading-6 font-bold text-xl md:text-2xl lg:text-4xl">محمد</p>
              <span class="text-sm md:text-base">الکترونیک</span>
            </div>
          </div>
        </nuxt-link>

        <!-- Search Bar -->
        <div class="flex gap-2 w-full md:w-auto order-3 md:order-2">
          <UInput placeholder="جستجو" icon="i-heroicons-magnifying-glass" class="w-full md:w-[300px] lg:w-[500px]"
            size="lg" />
        </div>

        <!-- User Actions -->
        <div class="hidden md:block md:space-y-4 w-full md:w-auto order-2 md:order-3">
          <div class="flex md:hidden items-center justify-end gap-4">
            <UButton variant="ghost" icon="i-lucide-shopping-cart" class="size-8 md:size-10" />
            <UButton color="primary" icon="i-lucide-log-in" size="sm" class="text-sm">
              ورود
            </UButton>
          </div>
          <div class="hidden md:flex items-center justify-between gap-4">
            <UModal close>
              <UButton color="primary" icon="i-lucide-log-in" size="lg" class="text-sm md:text-base">
                ورود / ثبت نام
              </UButton>
              <template #content>
                <AuthLoginForm v-if="!isCodeSent" />
                <AuthVerifyForm v-else />
              </template>
            </UModal>
            <UButton variant="ghost" icon="i-lucide-shopping-cart" class="size-10" />
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
        <div class="flex items-center gap-8">
          <MegaMenu />

          <div class="flex items-center gap-4">
            <NuxtLink v-for="category in categories" :key="category.label" :to="category.to"
              class="flex items-center gap-2 text-gray-700 hover:text-primary-500 transition-colors">
              <!-- <UIcon :name="category.icon" class="size-5" /> -->
              <span>{{ category.label }}</span>
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </nav>
  </header>
</template>
<script setup>
import MegaMenu from './common/MegaMenu.vue';
import { getCategories } from '~/api/category-api';
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const isCodeSent = computed(() => {
  return authStore.isCodeSent
})
const { data: categories } = await useAsyncData('categories', async () => {
  const categories = await getCategories()
  return categories.map(category => ({
    label: category.title,
    to: `/category/${category.id}`
  }))
})
</script>
