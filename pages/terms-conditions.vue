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
          <h1 class="mb-6 text-4xl font-bold md:text-3xl">
            {{ settings.title}}
          </h1>
          <div class="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <!-- Terms Content -->
        <div class="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
          <div class="p-8 md:p-12">
            <div class="prose prose-lg max-w-none">
              <div 
                v-if="settings.description" 
                v-html="settings.description"
                class="text-gray-700 leading-relaxed text-justify"
              ></div>
            </div>
          </div>
          
          <!-- Decorative Bottom Border -->
          <div class="h-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700"></div>
        </div>

        <!-- Important Notice -->
        <div class="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div class="mr-3">
              <h3 class="text-lg font-semibold text-amber-800 mb-2">توجه مهم</h3>
              <p class="text-amber-700">
                با ثبت سفارش و استفاده از خدمات این فروشگاه، شما تمامی شرایط و قوانین فوق را مطالعه کرده و می‌پذیرید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import settingsApi from '~/api/settings-api'

// Set page meta
useHead({
  title: 'شرایط و قوانین',
  meta: [
    { name: 'description', content: 'شرایط و قوانین استفاده از فروشگاه' }
  ]
})

// Reactive data
const isLoading = ref(true)
const settings = ref({
  title: '',
  description: '',
})

// Fetch terms and conditions data on component mount
onMounted(async () => {
  try {
    // Try to get terms from settings API (you may need to add this method to settingsApi)
    // For now, using a placeholder ID - adjust based on your API structure
    const settingsResponse = await settingsApi.getSettingById('17') // Assuming ID 17 for terms
    settings.value = settingsResponse
  } catch (error) {
    // If no specific terms setting exists, use default content
    console.log('No custom terms found, using default content')
  } finally {
    isLoading.value = false
  }
})
</script>
