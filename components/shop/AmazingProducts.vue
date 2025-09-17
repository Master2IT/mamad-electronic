<template>
  <div class="bg-primary-700 rounded-lg p-4 my-6 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
    <div class="flex justify-center items-center gap-6 lg:gap-10 flex-col relative lg:mt-10 order-2 lg:order-1">
      <h2 class="text-2xl lg:text-4xl text-center text-white lg:mt-5 font-black w-full lg:w-[200px] wrap-normal">تخفیف های شگفت انگیز</h2>
      <UButtonGroup orientation="horizontal" class="flex-wrap justify-center">
        <UButton v-for="(time, i) in times" :key="i" class="flex flex-col px-3 lg:px-5 bg-white hover:bg-white">
          <p class="text-xl lg:text-2xl font-bold text-primary-700 leading-3 mt-2">{{ time.value }}</p>
          <span class="text-primary-700 text-xs">{{ time.label }}</span>
        </UButton>
      </UButtonGroup>
      <NuxtLink external :to="`#`" class="text-white flex gap-1 lg:mt-auto lg:self-start lg:mr-10 items-center">
        <span>مشاهده همه</span>
        <ChevronLeft :size="18" />
      </NuxtLink>
    </div>
    <div class="w-full col-span-1 lg:col-span-3 order-1 lg:order-2">
      <Carousel :items="data?.items" :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }">
        <template #default="{ item }">
          <CommonProductCard :type="1" :product="item" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import Carousel from '@/components/common/Carousel/Carousel.vue'
import { convertToPersianNumber } from '@/utils'
import { ChevronLeft } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'
import { getProducts } from '~/api/product-api'

const { data } = await useAsyncData('products', () => getProducts({ sort: 'most_offer' }))

const timer = ref({
  hours: '2',
  minutes: '33',
  seconds: '45'
})

const times = computed(() => [ // Changed to computed to react to timer changes
  { label: 'ساعت', value: timer.value.hours },
  { label: 'دقیقه', value: timer.value.minutes },
  { label: 'ثانیه', value: timer.value.seconds }
])

let interval

onMounted(() => {
  const initialHours = 2
  const initialMinutes = 33
  const initialSeconds = 45

  const endTime = new Date()
  endTime.setHours(endTime.getHours() + initialHours)
  endTime.setMinutes(endTime.getMinutes() + initialMinutes)
  endTime.setSeconds(endTime.getSeconds() + initialSeconds)

  interval = setInterval(() => {
    const now = new Date()
    const diff = endTime - now

    if (diff <= 0) {
      clearInterval(interval)
      timer.value = {
        hours: '00',
        minutes: '00',
        seconds: '00'
      }
      return
    }

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    timer.value = {
      hours: convertToPersianNumber(hours.toString().padStart(2, '0')),
      minutes: convertToPersianNumber(minutes.toString().padStart(2, '0')),
      seconds: convertToPersianNumber(seconds.toString().padStart(2, '0'))
    }
  }, 1000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>