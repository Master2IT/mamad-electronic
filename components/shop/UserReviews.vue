<template>
  <div class="container space-y-8">
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
    <!-- Review Section -->
     <div class="h-[300px] overflow-y-auto">
       <div  v-for="(item) in items" :key="item.id"  class="pb-6 border-b">
         <div class="flex items-center justify-between mb-1">
           <div class="flex flex-col ">
             <span class="mr-2 text-gray-700">{{ item.userName }}</span>
             <div class="flex">
<span v-for="n in 5" :key="n" class="text-yellow-400">
  <span v-if="n <= item.rating">★</span>
  <span v-else>☆</span>
</span>
             </div>
             <span class="text-gray-500 text-sm mr-2">{{item.date}}</span>
           </div>
           <span class="text-gray-600 mr-1">آیا این نظر مفید بود؟</span>
           <div class="flex gap-3 items-center">
             <button class="flex items-center mx-2 text-gray-500 hover:text-gray-700">
               <span>۰</span>
               <ThumbsUp class="size-4"/>
             </button>
             <button class="flex items-center mx-2 text-gray-500 hover:text-gray-700">
               <span>۰</span>
               <ThumbsDown class="size-4"/>
             </button>
           </div>
           <button class="text-purple-800 font-medium">پاسخ</button>
         </div>
         <p class="text-right text-gray-800 mt-5">{{item.comment}}</p>
       </div>
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