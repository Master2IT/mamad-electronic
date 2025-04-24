<template>
  <header class="border-b min-h-[174px] px-4">
    <UContainer>
      <div class="flex flex-col md:flex-row justify-between gap-4 py-4">
        <!-- Logo and Brand -->
        <div class="flex items-center justify-center md:justify-start">
          <NuxtImg src="logo.svg" alt="logo" class="w-[60px] md:w-[81px] ml-2" />
          <div>
            <p class="text-secondary-300 leading-6 font-bold text-xl md:text-2xl lg:text-4xl">محمد</p>
            <span class="text-sm md:text-base">الکترونیک</span>
          </div>
        </div>

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
            <UButton color="primary" icon="i-lucide-log-in" size="lg" class="text-sm md:text-base">
              ورود / ثبت نام
            </UButton>
            <UDivider vertical />
            <UButton variant="ghost" icon="i-lucide-shopping-cart" class="size-10" />
          </div>
          <div class="flex justify-between text-xs sm:text-sm md:text-base">
            <p>پشتیبانی</p>
            <p class="text-secondary">۰۳۱-۳۲۳۷۲۷۶۷</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
    </UContainer>
    <nav class="mt-3">
      <UNavigationMenu :items="items" class="w-full" />
    </nav>
  </header>
</template>

<script setup>

const items = ref([
  {
    label: 'دسته‌بندی محصولات',
    icon: 'i-lucide-layers',
    to: '/categories',
    children: [
      {
        label: 'قطعات الکترونیکی',
        description: 'انواع قطعات و کامپوننت‌های الکترونیکی',
        icon: 'i-lucide-cpu'
      },
      {
        label: 'ابزار و تجهیزات',
        description: 'ابزارهای تخصصی تعمیرات و مونتاژ',
        icon: 'i-lucide-wrench'
      },
      {
        label: 'بردهای توسعه',
        description: 'انواع آردوینو، رزبری‌پای و بردهای توسعه',
        icon: 'i-lucide-circuit-board'
      },
      {
        label: 'سنسورها و ماژول‌ها',
        description: 'تجهیزات اندازه‌گیری و کنترل',
        icon: 'i-lucide-radio-tower'
      },
      {
        label: 'لوازم جانبی',
        description: 'کابل، کانکتور و سایر لوازم جانبی',
        icon: 'i-lucide-plug'
      }
    ]
  },
  {
    label: 'تخفیفات',
    icon: 'i-lucide-percent',
    to: '/discounts'
  },
  {
    label: 'پیشنهاد ویژه',
    icon: 'i-lucide-gift',
    to: '/special-offers'
  },
])
</script>
