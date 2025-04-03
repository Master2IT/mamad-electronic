<template>
    <div class="bg-purple-800 rounded-lg p-4 my-6 h-[324px]">
        <div class="flex justify-between items-center mb-4">
            <div class="text-white text-right">
                <h2 class="text-2xl font-bold">تخفیف های شگفت انگیز</h2>
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
        <div class="flex">
            <div class="w-4/6">
                <SwiperSlider :slides-per-view="5" :space-between="10" :navigation="true" :loop="true" :breakpoints="{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    }
                }">
                    <SwiperSlide v-for="product in products" :key="product.id">
                        <div class="bg-white rounded-lg p-3 text-center h-full">
                            <div class="flex justify-between">
                                <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">{{ product.discount
                                    }}٪</span>
                                <button class="text-purple-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex justify-center my-4">
                                <img :src="product.image" :alt="product.name" class="h-20 w-20">
                            </div>
                            <h3 class="text-right text-gray-800 mb-2">{{ product.name }}</h3>
                            <div class="text-right">
                                <div class="line-through text-gray-400 text-sm">{{ product.originalPrice }} تومان</div>
                                <div class="text-gray-800 font-bold">{{ product.discountedPrice }} تومان</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </SwiperSlider>
            </div>
            <div class="w-2/6 text-center flex flex-col justify-center items-center">
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
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SwiperSlider from '../common/SwiperSlider.vue'
import SwiperSlide from '../common/SwiperSlide.vue'
import { PRODUCTS } from '@/constant'
import { convertToPersianNumber } from '@/utils'

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

<style scoped>
/* For RTL support */
html {
    direction: rtl;
}
</style>