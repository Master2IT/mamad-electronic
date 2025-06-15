<template>
  <div class="container space-y-8">
    <!-- Header Section -->
    <div class="my-4 flex flex-col px-8">
      <h2 class="mb-6 text-right text-xl font-bold text-purple-600 md:text-2xl">نظرات کاربران</h2>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-layers" class="size-6 !text-[292D32]" />
            <span class="font-bold whitespace-nowrap">مرتب سازی: </span>
          </div>
          <UTabs
            color="neutral"
            variant="link"
            :content="false"
            :items="tabs"
            v-model="sortBy"
            class="w-full"
          />
        </div>
        <ShopSubmitReview @submited="refresh" />
      </div>
    </div>

    <!-- Review Section - Desktop -->
    <div class="hidden md:block">
      <UCard v-for="item in sortedReviews" :key="item.id" class="mb-4">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <div class="flex flex-col">
              <span class="text-gray-700 font-medium">{{ item.userName }}</span>
              <div class="flex gap-1">
                <UIcon v-for="i in 5" :key="i" name="i-lucide-star" :class="[
                  'text-yellow-400 my-2 size-3.5',
                  { '!fill-yellow-500': i <= item.rating }
                ]" />
              </div>
              <span class="text-gray-500 text-sm">{{ item.date }}</span>
            </div>
          </div>
          <div class="flex items-center gap-32">
            <span class="text-gray-600 text-sm">آیا این نظر مفید بود؟</span>
            <div class="flex gap-3 items-center">
              <UButton variant="ghost" size="sm" class="flex items-center gap-1 cursor-pointer"
                @click="handleVote(item.id, 'up')">
                <span>{{ item.upVotes || '۰' }}</span>
                <UIcon name="i-lucide-thumbs-up" class="size-4" />
              </UButton>
              <UButton variant="ghost" size="sm" class="flex items-center gap-1 cursor-pointer"
                @click="handleVote(item.id, 'down')">
                <span>{{ item.downVotes || '۰' }}</span>
                <UIcon name="i-lucide-thumbs-down" class="size-4" />
              </UButton>
            </div>
          </div>
          <UButton color="primary" class="cursor-pointer" variant="link" @click="replyToReview(item.id)">
            پاسخ
          </UButton>
        </div>
        <p class="text-right text-gray-800 mt-4">{{ item.comment }}</p>

        <!-- Review Images -->
        <div v-if="item.images && item.images.length" class="mt-4 flex flex-wrap gap-2">
          <UImage v-for="(image, index) in item.images" :key="index" :src="image" alt="Review image"
            class="h-20 w-20 object-cover rounded-md" @click="openImagePreview(image)" />
        </div>
      </UCard>
    </div>

    <!-- Review Section - Mobile -->
    <div class="md:hidden grid gap-4">
      <UCard v-for="item in sortedReviews" :key="item.id">
        <div class="flex flex-col gap-4">
          <div class="flex items-start gap-3">
            <UAvatar
              :src="item.userAvatar || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'"
              size="md" alt="User avatar" />
            <div class="flex flex-col">
              <span class="text-gray-700 font-medium">{{ item.userName }}</span>
              <!-- <URating v-model="item.rating" :length="5" readonly class="my-1" /> -->
              <span class="text-gray-500 text-sm">{{ item.date }}</span>
            </div>
          </div>
          <p class="text-right text-gray-800">{{ item.comment }}</p>

          <!-- Review Images -->
          <div v-if="item.images && item.images.length" class="flex flex-wrap gap-2">
            <UImage v-for="(image, index) in item.images" :key="index" :src="image" alt="Review image"
              class="h-16 w-16 object-cover rounded-md" @click="openImagePreview(image)" />
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span class="text-gray-600 text-xs">آیا این نظر مفید بود؟</span>
              <div class="flex gap-2 items-center">
                <UButton variant="ghost" size="xs" class="flex items-center gap-1" @click="handleVote(item.id, 'up')">
                  <span>{{ item.upVotes || '۰' }}</span>
                  <UIcon name="i-lucide-thumbs-up" class="size-3" />
                </UButton>
                <UButton variant="ghost" size="xs" class="flex items-center gap-1" @click="handleVote(item.id, 'down')">
                  <span>{{ item.downVotes || '۰' }}</span>
                  <UIcon name="i-lucide-thumbs-down" class="size-3" />
                </UButton>
              </div>
            </div>
            <UButton color="primary" variant="ghost" size="xs" @click="replyToReview(item.id)">
              پاسخ
            </UButton>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Add Review Modal -->
    <!-- <UModal v-model="showAddReviewModal">
      <UCard>
        <template #header>
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">ثبت نظر جدید</h3>
            <UButton color="gray" variant="ghost" icon="i-lucide-x" @click="showAddReviewModal = false" />
          </div>
        </template>

<div class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">امتیاز شما</label>
    <URating v-model="newReview.rating" :length="5" />
  </div>

    <!-- Review Section - Desktop -->
    <div class="my-4 hidden px-8 md:block">
      <UCard v-if="!pending" v-for="review in comments" :key="review.id" class="mb-4">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <div class="flex flex-col">
              <span class="font-medium text-gray-700">{{
                `${review.owner.name} ${review.owner.family}` || 'ناشناس'
              }}</span>
              <div class="flex gap-1">
                <UIcon
                  v-for="star in 5"
                  :key="star"
                  name="i-lucide-star"
                  :class="[
                    'my-2 size-3.5 text-yellow-400',
                    { '!fill-yellow-500': star <= review.rating },
                  ]"
                />
              </div>
              <span class="text-sm text-gray-500">{{
                moment(review.created).format('jYYYY/jMM/jDD')
              }}</span>
            </div>
          </div>
          <div class="flex items-center gap-8" v-if="hasToken">
            <span class="text-sm text-gray-600">آیا این نظر مفید بود؟</span>
            <div class="flex items-center gap-3">
              <UButton
                :loading="loading"
                @click="onRateComment(review.id, 'liked')"
                variant="ghost"
                size="sm"
                class="flex items-center gap-1"
              >
                <span>{{ review.like || 0 }}</span>
                <UIcon name="i-lucide-thumbs-up" class="size-4" />
              </UButton>
              <UButton
                :loading="loading"
                @click="onRateComment(review.id, 'dislike')"
                variant="ghost"
                size="sm"
                class="flex items-center gap-1"
              >
                <span>{{ review.dislike || 0 }}</span>
                <UIcon name="i-lucide-thumbs-down" class="size-4" />
              </UButton>
            </div>
            <UButton v-if="hasToken" color="primary" variant="ghost"> پاسخ </UButton>
          </div>
        </div>
        <p class="mt-4 text-right text-gray-800">{{ review.body }}</p>
      </UCard>
      <div v-else>
        <USkeleton class="mb-4" v-for="i in 3" :key="i">
          <div class="flex items-start justify-between gap-4 rounded-lg bg-gray-100 p-4">
            <div class="flex items-start gap-4">
              <div class="flex flex-col gap-2">
                <USkeleton class="h-4 w-32" />
                <USkeleton class="h-3 w-24" />
                <USkeleton class="h-3 w-20" />
              </div>
            </div>
            <div class="flex items-center gap-8">
              <USkeleton class="h-4 w-36" />
              <div class="flex items-center gap-3">
                <USkeleton class="h-8 w-16" />
                <USkeleton class="h-8 w-16" />
              </div>
              <USkeleton class="h-8 w-16" />
            </div>
          </div>
          <USkeleton class="mt-4 h-16 w-full" />
        </USkeleton>
      </div>
    </div>

    <!-- Review Section - Mobile -->
    <div class="grid gap-4 md:hidden">
      <UCard v-for="review in comments" :key="review.id">
        <div class="flex flex-col gap-4">
          <div class="flex items-start gap-3">
            <UAvatar
              :src="review.owner.avatar || '/default-avatar.png'"
              size="md"
              alt="User avatar"
            />
            <div class="flex flex-col">
              <span class="font-medium text-gray-700">{{ review.owner.name }}</span>
              <div class="my-1 flex gap-1">
                <UIcon
                  v-for="star in 5"
                  :key="star"
                  name="i-lucide-star"
                  :class="[
                    'size-3.5 text-yellow-400',
                    { '!fill-yellow-500': star <= review.rating },
                  ]"
                />
              </div>
              <span class="text-sm text-gray-500">{{
                moment(review.created).format('jYYYY/jMM/jDD')
              }}</span>
            </div>
          </div>
          <p class="text-right text-gray-800">{{ review.body }}</p>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xs text-gray-600">آیا این نظر مفید بود؟</span>
              <div class="flex items-center gap-2">
                <UButton variant="ghost" size="xs" class="flex items-center gap-1">
                  <span>{{ review.like || '۰' }}</span>
                  <UIcon name="i-lucide-thumbs-up" class="size-3" />
                </UButton>
                <UButton variant="ghost" size="xs" class="flex items-center gap-1">
                  <span>{{ review.dislike || '۰' }}</span>
                  <UIcon name="i-lucide-thumbs-down" class="size-3" />
                </UButton>
              </div>
            </div>
            <UButton color="primary" variant="ghost" size="xs"> پاسخ </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import moment from 'moment-jalaali'
import { getCommentsByProductId, rateComment } from '~/api/product-api'
import { useAuth } from '~/composables/useAuth'

const loading = ref(false)

const { hasToken } = useAuth()

const toast = useToast()

const route = useRoute()

const tabs = ref<TabsItem[]>([
  {
    label: 'جدیدترین',
    value: 'newest',
  },
  {
    label: 'قدیمی ترین',
    value: 'oldest',
  },
  {
    label: 'بیشترین امتیاز',
    value: 'highest_rating',
  },
  {
    label: 'کمترین امتیاز',
    value: 'lowest_rating',
  },
])

const sortBy = ref('newest')

const {
  data: comments,
  refresh,
  pending,
} = useAsyncData('comments', () => getCommentsByProductId(route.params.slug as string))

watch(sortBy, () => {
  refresh()
})

const onRateComment = async (id: number, type: 'liked' | 'dislike') => {
  // if (!hasToken.value) {
  //   toast.add({
  //     title: 'خطا',
  //     description: 'لطفا ابتدا وارد حساب کاربری خود شوید',
  //     color: 'error',
  //   })
  //   return
  // }

  try {
    loading.value = true
    await rateComment(id, type)
    toast.add({
      title: 'موفق',
      description: 'نظر شم  ا با موفقیت ثبت شد',
      color: 'success',
    })
  } catch (error) {
    console.error(error)
    toast.add({
      title: 'خطا',
      description: 'لطفا دوباره تلاش کنید',
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
/* For RTL support */
.rtl\:space-x-reverse {
  --tw-space-x-reverse: 1;
}
</style>
