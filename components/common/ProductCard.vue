<template>
  <NuxtLink :to="`/item/${product.id}/${product.title_fa}`">
    <div class="relative rounded-md w-full shadow-sm border-0 bg-[#F7F7F7] select-none">
      <div class="relative p-0 flex justify-center items-center">
        <NuxtImg :src="`${BASE_URL}${product?.file?.path}`" :alt="product.title_fa"
          class="h-[200px] w-[200px] object-contain rounded-md" />
        <span v-if="product?.final_price?.discount_price"
          class="absolute top-2.5 left-2.5 bg-red-500 rounded-full text-white pt-0.5 px-3 text-xs">
          {{ product?.final_price?.discount_value }} {{ product?.final_price?.discount_type?.toLowerCase() ==
            'percent' ? '%' : 'تومان' }}
        </span>
        <button class="absolute top-2.5 right-2.5 bg-transparent border-none cursor-pointer" @click="toggleFavorite">
          <Heart :class="{ 'text-red-500': product.favorite, 'text-gray-300': !product.favorite }" size="24" />
        </button>
      </div>
      <div class="px-5 pb-2">
        <UTooltip :text="product.name" :content="{ side: 'top' }">
          <h3 class="text-md font-semibold text-center line-clamp-1">{{ product.title_fa }}</h3>
        </UTooltip>
        <div v-if="showReview" class="flex gap-1 items-center justify-end my-3 text-sm">
          <span class="text-neutral-400 mt-0.5">(43 نظر)</span>
          <div class="text-yellow-500 flex items-center font-medium">
            <span class="mt-0.5">4.4</span>
            <Icon name="medal-star" size="18" />
          </div>
        </div>
        <div :class="['flex items-end mt-3', { 'flex-col': type == 1 }, { 'justify-between gap-2': type == 2 }]">
          <p class="text-gray-500 text-sm line-through">{{
            Number(product?.final_price?.discount_price).toLocaleString('fa-IR') }}</p>
          <UButton v-if="product.final_price?.discount_price" class="!gap-1" size="sm" :block="type == 2">
            <span class="!font-bold text-[14px]">
              {{ Number(product?.final_price?.price).toLocaleString('fa-IR') }}
            </span>تومان
          </UButton>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
import Icon from '../common/Icon.vue';

const BASE_URL = "https://api.merqc.com/v1";

defineProps({
  product: {
    type: Object,
    required: true
  },
  type: {
    type: Number,
    default: 1
  },
  showReview: {
    type: Boolean,
    default: false
  }
})

const toggleFavorite = async () => {
  await createFavorite('product', props.product.id)
}
</script>
