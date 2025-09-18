<template>
  <NuxtLayout name="shop">
    <div class="container mx-auto px-4 py-8">
      <!-- Loading State -->
      <div v-if="pending" class="animate-pulse">
        <div class="mb-8 h-64 w-full rounded-lg bg-gray-200"></div>
        <div class="mx-auto max-w-4xl">
          <div class="mb-4 h-8 w-3/4 rounded bg-gray-200"></div>
          <div class="mb-6 h-4 w-1/2 rounded bg-gray-200"></div>
          <div class="space-y-3">
            <div class="h-4 w-full rounded bg-gray-200"></div>
            <div class="h-4 w-full rounded bg-gray-200"></div>
            <div class="h-4 w-3/4 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="py-12 text-center">
        <p class="text-lg text-red-500">خطا در بارگذاری مقاله</p>
        <UButton @click="refresh()" class="mt-4" variant="outline">
          تلاش مجدد
        </UButton>
      </div>

      <!-- Blog Content -->
      <article v-else class="mx-auto max-w-4xl">
        <!-- Hero Image -->
        <div class="relative mb-8 overflow-hidden rounded-lg">
          <img
            :src="
              getImageUrl(data.image?.path) ||
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png'
            "
            :alt="data.title"
            class="h-64 w-full object-cover md:h-96"
          />
        </div>

        <!-- Article Header -->
        <header class="mb-8">
          <h1 class="text-primary-700 mb-4 text-3xl font-bold md:text-4xl">
            {{ data.title }}
          </h1>

          <!-- Meta Information -->
          <div class="mb-6 flex flex-wrap items-center gap-4 text-gray-600">
            <div class="flex items-center gap-2">
              <Icon name="heroicons:user" class="h-4 w-4" />
              <span>{{ data.user?.display_name || 'نویسنده' }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="heroicons:calendar-days" class="h-4 w-4" />
              <span>{{ formatDate(data.created) }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="heroicons:eye" class="h-4 w-4" />
              <span>{{ data.view_count || '0' }} بازدید</span>
            </div>
          </div>

          <!-- Tags -->
          <div
            v-if="data.tags?.length"
            class="mb-6 flex flex-wrap items-center gap-2"
          >
            <span class="font-medium text-gray-600">برچسب‌ها:</span>
            <UBadge
              v-for="tag in data.tags"
              :key="tag.id"
              variant="soft"
              color="primary"
              size="sm"
            >
              {{ tag.title }}
            </UBadge>
          </div>

          <!-- Share Buttons -->
          <div class="flex items-center gap-4 border-b border-gray-200 pb-6">
            <span class="font-medium text-gray-600">اشتراک گذاری:</span>
            <div class="flex gap-2">
              <UButton
                @click="shareOnTelegram"
                icon="i-simple-icons-telegram"
                variant="outline"
                size="sm"
                color="blue"
              />
              <UButton
                @click="shareOnWhatsApp"
                icon="i-simple-icons-whatsapp"
                variant="outline"
                size="sm"
                color="green"
              />
              <UButton
                @click="copyLink"
                icon="heroicons:link"
                variant="outline"
                size="sm"
                color="gray"
              />
            </div>
          </div>
        </header>

        <!-- Article Content -->
        <div class="prose prose-lg mb-12 max-w-none">
          <!-- Summary/Description -->
          <div
            v-if="data.summary"
            class="border-primary-500 mb-8 rounded-lg border-r-4 bg-gray-50 p-6"
          >
            <h3 class="mb-3 text-lg font-semibold text-gray-800">
              خلاصه مقاله
            </h3>
            <p class="leading-relaxed text-gray-700">{{ data.summary }}</p>
          </div>

          <!-- Main Content -->
          <div v-html="data.body" class="leading-relaxed text-gray-800"></div>
        </div>

        <!-- Brand Information -->
        <div v-if="data.brand" class="mb-8 rounded-lg bg-gray-50 p-6">
          <h3 class="mb-4 text-lg font-semibold text-gray-800">درباره برند</h3>
          <div class="flex items-start gap-4">
            <div v-if="data.brand.logo_object" class="flex-shrink-0">
              <img
                :src="getImageUrl(data.brand.logo_object.path)"
                :alt="data.brand.title"
                class="h-16 w-16 rounded object-contain"
              />
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-gray-800">
                {{ data.brand.title }}
              </h4>
              <p class="mb-2 text-sm text-gray-600">{{ data.brand.name_fa }}</p>
              <div v-if="data.brand.founder" class="text-sm text-gray-600">
                <span class="font-medium">بنیانگذار:</span>
                {{ data.brand.founder.name }}
              </div>
              <div v-if="data.brand.owner" class="text-sm text-gray-600">
                <span class="font-medium">مالک:</span>
                {{ data.brand.owner.name }}
              </div>
            </div>
          </div>
        </div>

        <!-- Related Posts -->
        <div v-if="data.children?.length" class="mb-8">
          <h3 class="mb-4 text-xl font-semibold text-gray-800">مطالب مرتبط</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <NuxtLink
              v-for="child in data.children"
              :key="child.id"
              :to="`/blogs/${child.slug}`"
              class="block rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <h4 class="mb-2 font-semibold text-gray-800">
                {{ child.title }}
              </h4>
              <p class="line-clamp-2 text-sm text-gray-600">{{ child.body }}</p>
            </NuxtLink>
          </div>
        </div>

        <!-- Navigation -->
        <div
          class="flex items-center justify-between border-t border-gray-200 pt-8"
        >
          <NuxtLink
            external
            to="/blogs"
            class="text-primary-600 hover:text-primary-700 flex items-center gap-2 transition-colors"
          >
            <Icon name="heroicons:arrow-right" class="h-4 w-4" />
            <span>بازگشت به وبلاگ</span>
          </NuxtLink>
        </div>
      </article>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { getBlogById } from '@/api/blogs-api'

const route = useRoute()
const slug = route.params.slug

// Environment variable for base URL
const BASE_URL = process.env.BASE_URL || 'https://api.merqc.com'

// Set page meta
useHead({
  title: 'در حال بارگذاری...',
  meta: [{ name: 'description', content: 'مقاله وبلاگ' }],
})

// Fetch blog data
const { data, pending, error, refresh } = await useAsyncData(
  `blog-${slug}`,
  async () => {
    const res = await getBlogById(slug)
    console.log(res)

    return {
      id: res.id,
      title: res.title,
      slug: res.slug,
      summary: res.summary,
      body: res.body,
      secound_title: res.secound_title,
      third_title: res.third_title,
      first_link: res.first_link,
      secound_link: res.secound_link,
      view_count: res.view_count,
      seo_title: res.seo_title,
      seo_description: res.seo_description,
      status: res.status,
      brand: res.brand,
      show_in_menu: res.show_in_menu,
      parent: res.parent,
      children: res.children,
      categories: res.categories,
      tags: res.tags,
      user: res.user,
      image: res.image,
      video: res.video,
      comments: res.comments,
      created: res.created,
      updated: res.updated,
    }
  }
)

const getImageUrl = (imagePath) => {
  if (!imagePath) return null
  return imagePath.startsWith('http') ? imagePath : `${BASE_URL}${imagePath}`
}

// Update page meta when data is loaded
watch(
  data,
  (newData) => {
    if (newData) {
      useHead({
        title: newData.seo_title || newData.title,
        meta: [
          {
            name: 'description',
            content:
              newData.seo_description || newData.summary || 'مقاله وبلاگ',
          },
          { property: 'og:title', content: newData.title },
          {
            property: 'og:description',
            content: newData.summary || newData.seo_description,
          },
          { property: 'og:image', content: getImageUrl(newData.image?.path) },
          { property: 'og:type', content: 'article' },
        ],
      })
    }
  },
  { immediate: true }
)

// Utility functions
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('fa-IR')
}

const shareOnTelegram = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(data.value.title)
  window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank')
}

const shareOnWhatsApp = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`${data.value.title} - ${url}`)
  window.open(`https://wa.me/?text=${text}`, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    // You can add a toast notification here
    console.log('Link copied to clipboard')
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script>
