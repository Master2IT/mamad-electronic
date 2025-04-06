<template>
  <div class="bg-primary rounded-lg p-4 my-6 grid grid-cols-4 gap-2">
    <div class="flex justify-between items-center mb-4 flex-col">
      <div class="text-white text-right">
        <h2 class="text-2xl font-bold">تخفیف های شگفت انگیز</h2>
      </div>
      <div class="text-center flex gap-2 justify-center items-center">
        <div class="text-white text-center mb-4">
          <div class="text-4xl font-bold">{{ timer.hours }}</div>
          <div>ساعت</div>
        </div>
        <div class="text-white text-center mb-4">
          <div class="text-4xl font-bold">{{ timer.minutes }}</div>
          <div>دقیقه</div>
        </div>
        <div class="text-white text-center">
          <div class="text-4xl font-bold">{{ timer.seconds }}</div>
          <div>ثانیه</div>
        </div>
      </div>
      <button class="text-white flex items-center">
        <span>مشاهده همه</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <!-- <UCarousel v-slot="{ item }" :items="products" :loop="true" :autoplay="{ delay: 2000, pauseOnHover: true }"
      class="w-full col-span-3" :ui="{
            item: 'basis-1/5',
            container: 'relative',
            wrapper: 'overflow-hidden',
          }" :breakpoints="{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 }
          }" autoHeight arrows dragFree>
      <ShopProductCard :product="item" />
    </UCarousel> -->
    <div class="w-full col-span-3">
      <Carousel>
        <CarouselSlide v-for="product in products" :key="product.id">
          <ShopProductCard :product="product" />
        </CarouselSlide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { PRODUCTS } from '@/constant'
import { convertToPersianNumber } from '@/utils'
import Carousel from '@/components/common/Carousel/Carousel.vue'
import CarouselSlide from '@/components/common/Carousel/CarouselSlide.vue'

const products = ref(PRODUCTS)

const timer = ref({
  hours: '۲',
  minutes: '۳۳',
  seconds: '۴۵'
})

let interval

onMounted(() => {
  // Implement countdown timer
  let endTime = new Date()
  endTime.setHours(endTime.getHours() + 2)
  endTime.setMinutes(endTime.getMinutes() + 33)
  endTime.setSeconds(endTime.getSeconds() + 45)

  interval = setInterval(() => {
    const now = new Date()
    const diff = endTime - now

    if (diff <= 0) {
      clearInterval(interval)
      return
    }

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    // Convert to Persian numerals
    timer.value.hours = convertToPersianNumber(hours)
    timer.value.minutes = convertToPersianNumber(minutes)
    timer.value.seconds = convertToPersianNumber(seconds)
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>