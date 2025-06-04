<template>
  <div class="container space-y-8">
    <!-- Header Section -->
    <div class="flex flex-col">
      <h2 class="text-3xl font-bold text-purple-800 text-right">نظرات کاربران</h2>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="flex items-center gap-2">
            <Icon name="lucide:rows-3" class="size-4" />
            <span class="ml-2 font-bold">مرتب سازی: </span>
          </div>
          <div class="flex space-x-4 rtl:space-x-reverse">
            <button v-for="sort in ['جدیدترین', 'قدیمی ترین', 'بیشترین امتیاز', 'کمترین امتیاز']" :key="sort" :class="[
              'text-gray-600 hover:text-purple-800',
              { 'text-purple-800 border-b-2 border-purple-800': sortBy === sort }
            ]" @click="sortReviews(sort)">
              {{ sort }}
            </button>
          </div>
        </div>
        <button class="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-900 transition"
          @click="showAddReviewModal = true">
          نظر خود را ثبت کنید
        </button>
      </div>
    </div>

    <!-- Review Section - Desktop -->
    <div class="hidden md:block">
      <UCard v-for="review in sortedReviews" :key="review.id" class="mb-4">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <div class="flex flex-col">
              <span class="text-gray-700 font-medium">{{ review.userName }}</span>
              <div class="flex gap-1">
                <UIcon v-for="star in 5" :key="star" name="i-lucide-star" :class="[
                  'text-yellow-400 my-2 size-3.5',
                  { '!fill-yellow-500': star <= review.rating }
                ]" />
              </div>
              <span class="text-gray-500 text-sm">{{ review.date }}</span>
            </div>
          </div>
          <div class="flex items-center gap-8">
            <span class="text-gray-600 text-sm">آیا این نظر مفید بود؟</span>
            <div class="flex gap-3 items-center">
              <UButton variant="ghost" size="sm" class="flex items-center gap-1" @click="handleVote(review.id, 'up')">
                <span>{{ review.upVotes || '۰' }}</span>
                <UIcon name="i-lucide-thumbs-up" class="size-4" />
              </UButton>
              <UButton variant="ghost" size="sm" class="flex items-center gap-1" @click="handleVote(review.id, 'down')">
                <span>{{ review.downVotes || '۰' }}</span>
                <UIcon name="i-lucide-thumbs-down" class="size-4" />
              </UButton>
            </div>
            <UButton color="primary" variant="link" @click="replyToReview(review.id)">
              پاسخ
            </UButton>
          </div>
        </div>
        <p class="text-right text-gray-800 mt-4">{{ review.comment }}</p>

        <!-- Review Images -->
        <div v-if="review.images?.length" class="mt-4 flex flex-wrap gap-2">
          <UImage v-for="(image, index) in review.images" :key="index" :src="image" alt="Review image"
            class="h-20 w-20 object-cover rounded-md cursor-pointer" @click="openImagePreview(image)" />
        </div>
      </UCard>
    </div>

    <!-- Review Section - Mobile -->
    <div class="md:hidden grid gap-4">
      <UCard v-for="review in sortedReviews" :key="review.id">
        <div class="flex flex-col gap-4">
          <div class="flex items-start gap-3">
            <UAvatar :src="review.userAvatar || '/default-avatar.png'" size="md" alt="User avatar" />
            <div class="flex flex-col">
              <span class="text-gray-700 font-medium">{{ review.userName }}</span>
              <div class="flex gap-1 my-1">
                <UIcon v-for="star in 5" :key="star" name="i-lucide-star" :class="[
                  'text-yellow-400 size-3.5',
                  { '!fill-yellow-500': star <= review.rating }
                ]" />
              </div>
              <span class="text-gray-500 text-sm">{{ review.date }}</span>
            </div>
          </div>
          <p class="text-right text-gray-800">{{ review.comment }}</p>

          <!-- Review Images -->
          <div v-if="review.images?.length" class="flex flex-wrap gap-2">
            <UImage v-for="(image, index) in review.images" :key="index" :src="image" alt="Review image"
              class="h-16 w-16 object-cover rounded-md cursor-pointer" @click="openImagePreview(image)" />
          </div>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <span class="text-gray-600 text-xs">آیا این نظر مفید بود؟</span>
              <div class="flex gap-2 items-center">
                <UButton variant="ghost" size="xs" class="flex items-center gap-1" @click="handleVote(review.id, 'up')">
                  <span>{{ review.upVotes || '۰' }}</span>
                  <UIcon name="i-lucide-thumbs-up" class="size-3" />
                </UButton>
                <UButton variant="ghost" size="xs" class="flex items-center gap-1"
                  @click="handleVote(review.id, 'down')">
                  <span>{{ review.downVotes || '۰' }}</span>
                  <UIcon name="i-lucide-thumbs-down" class="size-3" />
                </UButton>
              </div>
            </div>
            <UButton color="primary" variant="ghost" size="xs" @click="replyToReview(review.id)">
              پاسخ
            </UButton>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/common/Icon.vue'

const props = defineProps<{
  items: any[]
}>();

// State can be defined directly in setup script
const showAddReviewModal = ref(false)
const sortBy = ref('newest')

// Methods can be defined as regular functions
const sortReviews = (type: string) => {
  sortBy.value = type
  // Add sorting logic here
}

const addReview = () => {
  // Add review submission logic here
}

const handleVote = (reviewId: number, voteType: 'up' | 'down') => {
  // Add voting logic here
}

const replyToReview = (reviewId: number) => {
  // Add reply logic here
}

const sortedReviews = computed(() => {
  return props.items.sort((a, b) => {
    if (sortBy.value === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })
})
</script>

<style scoped>
/* Add any additional custom styles here */
/* For RTL support */
.rtl\:space-x-reverse {
  --tw-space-x-reverse: 1;
}
</style>