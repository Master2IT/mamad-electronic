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
          <span>{{
            product.prices.map((price) => price.final_price.color.title_fa).join(', ')
          }}</span>
        </div>
        <div class="flex gap-2">
          <div v-for="(price, index) in product.prices" :key="index" class="relative">
            <button
              @click="
                () => {
                  selectedColorId = price.final_price.color.id
                  selectedPriceId = price.id
                  emit('update:selectedColorId', price.final_price.color.id)
                  emit('update:selectedPriceId', price.id)
                }
              "
              :class="[
                'flex h-6 w-6 items-center justify-center rounded-sm border border-neutral-500 transition-all hover:opacity-80',
                selectedColorId === price.final_price.color.id
                  ? 'ring-primary-500 ring-2 ring-offset-2'
                  : '',
              ]"
              :style="{ background: price.final_price.color.hex }"
              :aria-label="`انتخاب رنگ ${price.final_price.color.title_fa}`"
            >
              <span
                v-show="selectedColorId === price.final_price.color.id"
                :class="price.final_price.color.hex === '#ffffff' ? 'text-black' : 'text-white'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <USeparator class="w-32" />

      <!-- Warranty info -->
      <div class="my-3 flex items-center gap-2" v-if="guaranty">
        <BadgeCheckIcon class="size-6 text-neutral-700" stroke-width="1.5" />
        <span>{{ guaranty?.attribute_item_title }}</span>
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
            {{
              product.prices
                .find((price) => price.id === selectedPriceId)
                ?.final_price?.final_price?.toLocaleString() || 0
            }}
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

const emit = defineEmits(['update:selectedColorId', 'update:selectedPriceId'])

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const selectedColorId = ref(null)
const selectedPriceId = ref(null)

const basket = ref(0)
watch(
  () => product?.prices,
  () => {
    selectedColorId.value = product?.prices[0]?.final_price.color.id
    selectedPriceId.value =
      product?.prices.find((price) => price.is_default)?.id || product?.prices[0]?.id
  },
  { immediate: true }
)

const addProductToBasket = () => {
  if (basket.value < product.stock) {
    basket.value++
  }
}

const guaranty = computed(() => {
  return product.attributes.find((attribute) => attribute.attribute_title === 'گارانتی')
})
</script>
