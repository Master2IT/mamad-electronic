<template>
  <div class="col-span-2 flex justify-between p-5">
    <div>
      <!-- Product title -->
      <h2 class="mb-4 text-2xl font-bold">{{ product.title_fa }}</h2>

      <!-- Product type -->
      <span class="mb-3 block">{{ product.title_en }}</span>

      <!-- User rating -->
      <div class="my-3 flex items-center gap-2">
        <span>امتیاز کاربران:</span>
        <div class="flex gap-1">
          <!-- todo: fix rating -->
          <NuxtRating
            read-only
            :rating-value="product.ratings"
            inactive-color="white"
            :rating-size="15"
            rounded-corners
          />
        </div>
      </div>

      <USeparator class="w-56" />

      <!-- Color selection -->
      <div class="my-3 flex flex-col gap-2">
        <div>
          <span class="font-bold">رنگ: </span>
          <span>{{ product.prices.map(price=> price.final_price.color.title_fa).join(", ") }}</span>
        </div>
        <button
          class="h-6 w-6 rounded-sm bg-black transition-opacity hover:opacity-80"
          aria-label="انتخاب رنگ مشکی"
        />
      </div>

      <USeparator class="w-32" />

      <!-- Warranty info -->
      <div class="my-3 flex items-center gap-2">
        <BadgeCheckIcon class="size-6 text-neutral-700" stroke-width="1.5" />
        <span>گارانتی ۱۸ ماهه آروند</span>
      </div>
    </div>
    <div>
      <h3 class="mb-2 text-lg font-bold">ویژگی ها</h3>
      <ul class="w-[280px] rounded-md border" v-if="product.prices.length > 0">
        <template v-for="(price, index) in product.prices" :key="index">
          <li class="flex items-center gap-2 p-2">
            <span class="text-sm text-neutral-500">{{ price?.final_price?.title }}</span>
            <span>{{ price?.final_price?.final_price?.toLocaleString() }}</span>
          </li>
          <hr
            class="my-1 w-full border-[1.5px] border-dashed border-neutral-300"
            v-if="index !== product.prices.length - 1 && product.prices.length > 1"
          />
        </template>
      </ul>

      <div class="mt-8 flex flex-col gap-2">
        <div>
          تومان
          <span class="text-xl font-bold">
            {{ product.prices[0]?.final_price?.final_price?.toLocaleString() || 0 }}
          </span>
        </div>
        <div class="mt-1 flex gap-2">
          <UButton block size="xl" @click="addProductToBasket">
            افزودن به سبد خرید
            <ShoppingCartIcon class="size-4" />
          </UButton>
          <UButton size="xl" v-if="basket > 0" @click="basket--"> +{{ basket }} </UButton>
        </div>
        <span class="mt-1 text-xs text-red-500">{{ product.stock }} عدد در انبار باقی مانده</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BadgeCheckIcon, ShoppingCartIcon } from 'lucide-vue-next'

const basket = ref(0)

const addProductToBasket = () => {
  if (basket.value < product.stock) {
    basket.value++
  }
}

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
