<template>
  <div class="container space-y-8 hidden">
    <!-- Header Section -->
    <div class="flex flex-col">
      <h2 class="text-3xl font-bold text-purple-800 text-right ">نظرات کاربران</h2>
      <div class="flex items-center justify-between">
        <div class="flex items-center ">
          <div class="flex items-center gap-2">
            <Icon name="lucide:rows-3" class="size-4"/>
            <Rows3 class="size-4"/>
            <span class="ml-2 font-bold">مرتب سازی: </span>
          </div>
          <div class="flex space-x-4 rtl:space-x-reverse">
            <button class="text-purple-800 font-medium border-b-2 border-purple-800">جدیدترین</button>
            <button class="text-gray-600 hover:text-purple-800">قدیمی ترین</button>
            <button class="text-gray-600 hover:text-purple-800">بیشترین امتیاز</button>
            <button class="text-gray-600 hover:text-purple-800">کمترین امتیاز</button>
          </div>
        </div>
        <button class="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-900 transition">
          نظر خود را ثبت کنید
        </button>
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

<!--  isMobile-->
  <div class="grid">
    <div v-for="(item) in items" :key="item.id" class="pb-6 p-4 border m-2 ">
      <div class="flex  gap-3 mb-3">
        <div class="flex flex-col">
          <span class="text-gray-700 font-medium">{{ item.userName }}</span>
          <div class="flex my-1">
               <span v-for="n in 5" :key="n" class="text-yellow-400">
                 <span v-if="n <= item.rating">★</span>
                 <span v-else>☆</span>
               </span>
          </div>
          <span class="text-gray-500 text-sm">{{item.date}}</span>
        </div>
        <div class="flex flex-row  items-center gap-2">
          <span class="text-gray-600 text-sm">آیا این نظر مفید بود؟</span>
          <div class="flex gap-3 items-center">
            <button class="flex items-center gap-1 text-gray-500 hover:text-gray-700">
              <span>۰</span>
              <ThumbsUp class="size-4"/>
            </button>
            <button class="flex items-center gap-1 text-gray-500 hover:text-gray-700">
              <span>۰</span>
              <ThumbsDown class="size-4"/>
            </button>
          </div>
          <button class="text-purple-800 font-medium">پاسخ</button>
        </div>
      </div>
      <p class="text-right text-gray-800">{{item.comment}}</p>
    </div>
  </div>




</template>

<script setup lang="ts">
import {Rows3} from "lucide-vue-next"
import {ThumbsUp } from "lucide-vue-next"
import {ThumbsDown  } from "lucide-vue-next"
import Icon from '@/components/common/Icon.vue'
interface ReviewUserItem{
  id: number | string,
  date: string,
  rating: number,
  userName: string,
  productId: number |string,
  comment: string,
  verified: true
}
// State can be defined directly in setup script
const reviews = ref([])
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

defineProps<{
  items: ReviewUserItem[]
}>();
</script>

<style scoped>
/* Add any additional custom styles here */
/* For RTL support */
.rtl\:space-x-reverse {
  --tw-space-x-reverse: 1;
}
</style>