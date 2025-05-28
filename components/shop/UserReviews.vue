<template>
  <div dir="rtl" class="container mx-auto py-8">
    <!-- Header Section -->
    <div class="flex flex-col mb-6">
      <h2 class="text-3xl font-bold text-purple-800 text-right">نظرات کاربران</h2>
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-4">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-lucide-rows-3" class="size-4" />
            <span class="font-bold">مرتب سازی: </span>
          </div>
          <UTabs variant="link" v-model="sortBy" :items="[
            { label: 'جدیدترین', value: 'newest' },
            { label: 'قدیمی ترین', value: 'oldest' },
            { label: 'بیشترین امتیاز', value: 'highest' },
            { label: 'کمترین امتیاز', value: 'lowest' }
          ]" class="w-fit" />
        </div>
        <UButton color="primary" icon="i-lucide-message-square" @click="showAddReviewModal = true">
          نظر خود را ثبت کنید
        </UButton>
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

  <UFormGroup label="نظر شما">
    <UTextarea v-model="newReview.comment" rows="4" placeholder="نظر خود را بنویسید..." />
  </UFormGroup>

  <UFormGroup label="تصاویر (اختیاری)">
    <UUpload v-model="newReview.images" :multiple="true" :max-files="3" :max-file-size="5000000" accept="image/*" />
  </UFormGroup>
</div>

<template #footer>
          <div class="flex justify-end gap-2">
            <UButton color="gray" variant="ghost" @click="showAddReviewModal = false">انصراف</UButton>
            <UButton color="primary" @click="submitReview">ثبت نظر</UButton>
          </div>
        </template>
</UCard>
</UModal> -->

    <!-- Image Preview Modal -->
    <!-- <UModal v-model="showImagePreviewModal">
      <UCard>
        <template #header>
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">تصویر</h3>
            <UButton color="gray" variant="ghost" icon="i-lucide-x" @click="showImagePreviewModal = false" />
          </div>
        </template>

        <div class="flex justify-center">
          <UImage :src="previewImage" alt="Preview image" class="max-h-[80vh] max-w-full object-contain" />
        </div>
      </UCard>
    </UModal> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface ReviewUserItem {
  id: number | string
  date: string
  rating: number
  userName: string
  productId: number | string
  comment: string
  verified: boolean
  userAvatar?: string
  images?: string[]
  upVotes?: number
  downVotes?: number
}

const props = defineProps<{
  items: ReviewUserItem[]
}>()

// State
const sortBy = ref('newest')
const showAddReviewModal = ref(false)
const showImagePreviewModal = ref(false)
const previewImage = ref('')

const newReview = ref({
  rating: 0,
  comment: '',
  images: []
})

// Computed
const sortedReviews = computed(() => {
  if (!props.items) return []

  const reviews = [...props.items]

  switch (sortBy.value) {
    case 'newest':
      return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    case 'oldest':
      return reviews.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    case 'highest':
      return reviews.sort((a, b) => b.rating - a.rating)
    case 'lowest':
      return reviews.sort((a, b) => a.rating - b.rating)
    default:
      return reviews
  }
})

// Methods
const sortReviews = (type: string) => {
  sortBy.value = type
}

const handleVote = (reviewId: number | string, voteType: 'up' | 'down') => {
  // Add voting logic here
  console.log(`Vote ${voteType} for review ${reviewId}`)
}

const replyToReview = (reviewId: number | string) => {
  // Add reply logic here
  console.log(`Reply to review ${reviewId}`)
}

const submitReview = () => {
  // Add review submission logic here
  console.log('Submitting review:', newReview.value)

  // Reset form and close modal
  newReview.value = {
    rating: 0,
    comment: '',
    images: []
  }
  showAddReviewModal.value = false
}

const openImagePreview = (image: string) => {
  previewImage.value = image
  showImagePreviewModal.value = true
}
</script>

<style scoped>
/* For RTL support */
.rtl\:space-x-reverse {
  --tw-space-x-reverse: 1;
}
</style>