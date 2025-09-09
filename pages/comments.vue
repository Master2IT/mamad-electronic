<template>
  <NuxtLayout name="shop">
    <div class="min-h-screen bg-gray-50 py-8">
      <UContainer>
        <div class="mx-auto max-w-4xl">
          <!-- Page Header -->
          <div class="mb-12 text-center">
            <h1 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              نظرات کاربران
            </h1>
            <p class="text-lg text-gray-600">
              تجربیات و نظرات مشتریان عزیز ما در مورد محصولات و خدمات فروشگاه محمد الکترونیک
            </p>
          </div>

          <!-- Stats Section -->
          <div class="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <UCard :ui="{ body: { padding: 'p-6' } }">
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold text-blue-600">{{ totalReviews }}</div>
                <div class="text-sm text-gray-600">کل نظرات</div>
              </div>
            </UCard>
            <UCard :ui="{ body: { padding: 'p-6' } }">
              <div class="text-center">
                <div class="mb-2 flex items-center justify-center gap-1">
                  <span class="text-3xl font-bold text-yellow-500">{{ averageRating }}</span>
                  <Icon name="lucide:star" class="h-6 w-6 text-yellow-500" />
                </div>
                <div class="text-sm text-gray-600">میانگین امتیاز</div>
              </div>
            </UCard>
            <UCard :ui="{ body: { padding: 'p-6' } }">
              <div class="text-center">
                <div class="mb-2 text-3xl font-bold text-green-600">{{ satisfactionRate }}%</div>
                <div class="text-sm text-gray-600">رضایت مشتریان</div>
              </div>
            </UCard>
          </div>

          <!-- Filter Section -->
          <UCard class="mb-8">
            <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="filter in filters"
                  :key="filter.value"
                  :variant="selectedFilter === filter.value ? 'solid' : 'outline'"
                  :color="selectedFilter === filter.value ? 'primary' : 'gray'"
                  size="sm"
                  @click="selectedFilter = filter.value"
                >
                  {{ filter.label }}
                </UButton>
              </div>
              <USelect
                v-model="sortBy"
                :options="sortOptions"
                placeholder="مرتب سازی"
                class="w-full md:w-48"
              />
            </div>
          </UCard>

          <!-- Comments List -->
          <div class="space-y-6">
            <UCard
              v-for="comment in filteredComments"
              :key="comment.id"
              :ui="{ body: { padding: 'p-6' } }"
            >
              <div class="flex flex-col gap-4 md:flex-row">
                <!-- User Avatar and Info -->
                <div class="flex items-start gap-4 md:w-64">
                  <UAvatar
                    :alt="comment.user.name"
                    size="lg"
                    :ui="{ background: 'bg-gradient-to-r from-blue-500 to-purple-600' }"
                  >
                    {{ comment.user.name.charAt(0) }}
                  </UAvatar>
                  <div>
                    <h3 class="font-semibold text-gray-800">{{ comment.user.name }}</h3>
                    <p class="text-sm text-gray-500">{{ comment.date }}</p>
                    <div class="mt-1 flex items-center gap-1">
                      <Icon
                        v-for="star in 5"
                        :key="star"
                        name="lucide:star"
                        :class="[
                          'h-4 w-4',
                          star <= comment.rating ? 'text-yellow-500' : 'text-gray-300'
                        ]"
                      />
                    </div>
                  </div>
                </div>

                <!-- Comment Content -->
                <div class="flex-1">
                  <div class="mb-3">
                    <UBadge
                      :color="comment.verified ? 'green' : 'gray'"
                      variant="subtle"
                      size="xs"
                    >
                      {{ comment.verified ? 'خریدار محصول' : 'بازدیدکننده' }}
                    </UBadge>
                    <span v-if="comment.product" class="mr-2 text-sm text-gray-600">
                      برای محصول: {{ comment.product }}
                    </span>
                  </div>
                  <p class="text-gray-700 leading-relaxed">{{ comment.text }}</p>
                  
                  <!-- Comment Images -->
                  <div v-if="comment.images && comment.images.length > 0" class="mt-4">
                    <div class="flex gap-2 overflow-x-auto">
                      <img
                        v-for="image in comment.images"
                        :key="image"
                        :src="image"
                        :alt="comment.product"
                        class="h-20 w-20 rounded-lg object-cover"
                      />
                    </div>
                  </div>

                  <!-- Helpful/Not Helpful -->
                  <div class="mt-4 flex items-center gap-4">
                    <button class="flex items-center gap-1 text-sm text-gray-500 hover:text-green-600">
                      <Icon name="lucide:thumbs-up" class="h-4 w-4" />
                      مفید ({{ comment.helpful }})
                    </button>
                    <button class="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
                      <Icon name="lucide:thumbs-down" class="h-4 w-4" />
                      غیر مفید ({{ comment.notHelpful }})
                    </button>
                  </div>
                </div>
              </div>
            </UCard>
          </div>

          <!-- Pagination -->
          <div class="mt-12 flex justify-center">
            <UPagination
              v-model="currentPage"
              :page-count="pageCount"
              :total="totalReviews"
              show-last
              show-first
            />
          </div>

          <!-- Write Review CTA -->
          <UCard class="mt-12" :ui="{ body: { background: 'bg-gradient-to-r from-purple-600 to-blue-600', padding: 'p-8' } }">
            <div class="text-center text-white">
              <h2 class="mb-4 text-2xl font-bold">تجربه خود را با ما به اشتراک بگذارید</h2>
              <p class="mb-6 text-lg opacity-90">
                نظر شما برای ما بسیار ارزشمند است و به بهبود کیفیت خدمات ما کمک می‌کند
              </p>
              <UButton to="/contact" color="white" variant="solid" size="lg">
                ثبت نظر جدید
              </UButton>
            </div>
          </UCard>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>

<script setup>
// Set page title and meta description
useHead({
  title: 'نظرات کاربران - فروشگاه محمد الکترونیک',
  meta: [
    {
      name: 'description',
      content: 'نظرات و تجربیات مشتریان فروشگاه محمد الکترونیک. بررسی امتیاز و نقد محصولات الکترونیکی و خدمات فروشگاه.',
    },
  ],
})

// Sample data
const totalReviews = ref(247)
const averageRating = ref(4.6)
const satisfactionRate = ref(92)
const currentPage = ref(1)
const pageCount = ref(10)
const selectedFilter = ref('all')
const sortBy = ref('newest')

const filters = [
  { label: 'همه نظرات', value: 'all' },
  { label: '5 ستاره', value: '5' },
  { label: '4 ستاره', value: '4' },
  { label: '3 ستاره', value: '3' },
  { label: '2 ستاره', value: '2' },
  { label: '1 ستاره', value: '1' },
  { label: 'خریداران محصول', value: 'verified' }
]

const sortOptions = [
  { label: 'جدیدترین', value: 'newest' },
  { label: 'قدیمی‌ترین', value: 'oldest' },
  { label: 'بالاترین امتیاز', value: 'highest' },
  { label: 'پایین‌ترین امتیاز', value: 'lowest' },
  { label: 'مفیدترین', value: 'helpful' }
]

const comments = [
  {
    id: 1,
    user: { name: 'علی محمدی' },
    rating: 5,
    date: '۱۴۰۳/۰۱/۱۵',
    text: 'خرید بسیار عالی بود. کیفیت محصول فوق‌العاده و ارسال سریع. قیمت‌ها هم بسیار مناسب و رقابتی است. پشتیبانی خیلی خوب و پاسخگو بودند. حتماً دوباره خرید خواهم کرد.',
    product: 'آی سی LM358',
    verified: true,
    helpful: 12,
    notHelpful: 1,
    images: []
  },
  {
    id: 2,
    user: { name: 'فاطمه احمدی' },
    rating: 4,
    date: '۱۴۰۳/۰۱/۱۰',
    text: 'محصولات با کیفیت و اصل هستند. زمان ارسال کمی طولانی بود ولی در کل راضی هستم. قیمت‌ها هم نسبت به سایر فروشگاه‌ها بهتر است.',
    product: 'ماژول Arduino Uno',
    verified: true,
    helpful: 8,
    notHelpful: 0,
    images: []
  },
  {
    id: 3,
    user: { name: 'محمد رضایی' },
    rating: 5,
    date: '۱۴۰۳/۰۱/۰۸', 
    text: 'عالی بود! محصول دقیقاً همان چیزی بود که نیاز داشتم. بسته‌بندی محکم و ارسال سریع. تیم پشتیبانی خیلی کمک کردند تا محصول مناسب را انتخاب کنم.',
    product: 'سنسور دما DS18B20',
    verified: true,
    helpful: 15,
    notHelpful: 0,
    images: []
  },
  {
    id: 4,
    user: { name: 'زهرا کریمی' },
    rating: 3,
    date: '۱۴۰۳/۰۱/۰۵',
    text: 'محصول خوب بود اما زمان ارسال بیش از حد انتظار طولانی شد. امیدوارم در خریدهای بعدی این مشکل برطرف شود.',
    product: 'مقاومت 1K اهم',
    verified: true,
    helpful: 5,
    notHelpful: 2,
    images: []
  },
  {
    id: 5,
    user: { name: 'حسین موسوی' },
    rating: 5,
    date: '۱۴۰۳/۰۱/۰۳',
    text: 'فروشگاه بسیار خوبی است. محصولات متنوع و با کیفیت. مشاوره فنی عالی و راهنمایی‌های مفیدی دادند. قیمت‌ها هم منصفانه است.',
    verified: false,
    helpful: 7,
    notHelpful: 1,
    images: []
  }
]

const filteredComments = computed(() => {
  let filtered = [...comments]
  
  if (selectedFilter.value !== 'all') {
    if (selectedFilter.value === 'verified') {
      filtered = filtered.filter(comment => comment.verified)
    } else {
      const rating = parseInt(selectedFilter.value)
      filtered = filtered.filter(comment => comment.rating === rating)
    }
  }
  
  // Sort logic would go here based on sortBy value
  
  return filtered
})
</script>
