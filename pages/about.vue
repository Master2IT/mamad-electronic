<template>
  <NuxtLayout name="shop">
    <div class="container mx-auto px-4 py-8">
      <!-- Loading State -->
      <div v-if="isLoading" class="animate-pulse">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gray-200 rounded h-12 w-3/4 mx-auto mb-8"></div>
          <div class="space-y-4">
            <div class="bg-gray-200 rounded h-4 w-full"></div>
            <div class="bg-gray-200 rounded h-4 w-5/6"></div>
            <div class="bg-gray-200 rounded h-4 w-4/5"></div>
            <div class="bg-gray-200 rounded h-4 w-full"></div>
            <div class="bg-gray-200 rounded h-4 w-3/4"></div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div v-else class="mx-auto max-w-4xl">
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <h1 class="mb-6 text-4xl font-bold  md:text-3xl">
            {{ settings.title || 'درباره ما' }}
          </h1>
          <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <!-- Description Content -->
        <div class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div class="p-8 md:p-12">
            <div class="prose prose-lg max-w-none">
              <div 
                v-if="settings.description" 
                v-html="settings.description"
                class="text-gray-700 leading-relaxed text-justify"
              ></div>
              <div v-else class="text-center py-12">
                <div class="text-gray-400 mb-4">
                  <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p class="text-gray-500">محتوایی برای نمایش وجود ندارد</p>
              </div>
            </div>
          </div>
          
          <!-- Decorative Bottom Border -->
          <div class="h-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700"></div>
        </div>

        <!-- Additional Info Cards (Optional Enhancement) -->
        <div class="mt-12 grid md:grid-cols-3 gap-6">
          <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 text-center border border-primary-200">
            <div class="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-primary-700 mb-2">سرعت و کیفیت</h3>
            <p class="text-sm text-gray-600">ارائه سریع‌ترین و بهترین خدمات</p>
          </div>
          
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center border border-green-200">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-green-700 mb-2">تضمین کیفیت</h3>
            <p class="text-sm text-gray-600">کیفیت محصولات تضمین شده</p>
          </div>
          
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center border border-blue-200">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-blue-700 mb-2">پشتیبانی ۲۴/۷</h3>
            <p class="text-sm text-gray-600">پشتیبانی همیشگی از مشتریان</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import settingsApi from '~/api/settings-api'

useHead({
  title: 'درباره ما',
  meta: [
    { name: 'description', content: 'درباره ما' }
  ]
})

const isLoading = ref(true)
const settings = ref({
  title: '',
  description: '',
})

onMounted(async () => {
  const settingsResponse = await settingsApi.getAbout()
  settings.value = settingsResponse
  isLoading.value = false
})
</script>