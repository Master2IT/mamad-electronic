<template>
  <div class="bg-primary-700 rounded-lg p-4 my-6 grid grid-cols-4 gap-2">
    <div class="flex justify-center items-center gap-10 flex-col relative mt-10">
      <h2 class="text-4xl text-center text-white mt-5 font-black w-[200px] wrap-normal">تخفیف های شگفت انگیز</h2>
      <UButtonGroup orientation="horizontal">
        <UButton v-for="(time, i) in times" :key="i" color="neutral" class="flex flex-col px-5">
          <p class="text-2xl font-bold text-primary-700 leading-3 mt-2">{{ time.value }}</p>
          <span class="text-primary-700 text-xs">{{ time.label }}</span>
        </UButton>
      </UButtonGroup>
      <!-- <div class="join">
        <div v-for="(time, i) in times" :key="i" class="btn btn-xl join-item flex flex-col justify-center items-center">
          <p class="text-2xl font-bold text-primary leading-3 mt-2">{{ time.value }}</p>
          <span class="text-primary text-xs">{{ time.label }}</span>
        </div>
      </div> -->
      <NuxtLink href="#" class="text-white flex gap-1 mt-auto self-start mr-10 items-center">
        <span>مشاهده همه</span>
        <ChevronLeft :size="18" />
      </NuxtLink>
    </div>
    <div class="w-full col-span-3">
      <!-- <Carousel>
        <CarouselSlide v-for="product in products" :key="product.id">
          <ShopProductCard :product="product" />
        </CarouselSlide>
      </Carousel> -->
      <UCarousel v-slot="{ item }" align="start" skipSnaps :items="products" autoHeight class="w-full" arrows loop
        :autoplay="{ delay: 2000 }" :ui="{ item: 'basis-1/5', prev: 'left-0 right-auto', next: 'right-0 left-auto' }">
        <ShopProductCard :product="item" />
      </UCarousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { PRODUCTS } from '@/constant'
import { convertToPersianNumber } from '@/utils'
// import Carousel from '@/components/common/Carousel/Carousel.vue'
// import CarouselSlide from '@/components/common/Carousel/CarouselSlide.vue'
import { ChevronLeft } from 'lucide-vue-next'

const products = ref(PRODUCTS)

const timer = ref({
  hours: '2',
  minutes: '33',
  seconds: '45'
})


const times = ref([
  { label: 'ساعت', value: timer.value.hours },
  { label: 'دقیقه', value: timer.value.minutes },
  { label: 'ثانیه', value: timer.value.seconds }
])
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