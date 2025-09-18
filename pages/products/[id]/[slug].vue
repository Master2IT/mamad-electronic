<template>
  <NuxtLayout name="shop">
    <div class="hidden sm:block">
      <UTabs :items="tabs" color="primary" variant="link" class="bg-[#FAFAFA]" :ui="{
        trigger: 'py-5',
        indicator: 'bg-primary-500',
      }" v-model="activeTab" />
    </div>
    <div class="container mx-auto bg-white py-8">
      <!-- Product Details Section -->
      <div class="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Product Gallery -->
        <div class="rounded-lg bg-white p-4">
          <NuxtImg :src="BASE_URL + selectedImage" :alt="product?.title_fa ?? 'Product Image'"
            class="h-[400px] w-full object-contain" />
          <div class="mt-4 flex gap-2 overflow-x-auto pb-2" v-if="product?.galleries && product?.galleries.length">
            <NuxtImg v-for="(gallery, index) in product?.galleries" :key="index" :src="BASE_URL + gallery?.path"
              :alt="`${gallery?.name ?? 'Gallery'} - thumbnail ${index + 1}`"
              class="hover:border-primary-500 h-20 w-20 cursor-pointer rounded border object-contain"
              @click="selectedImage = gallery?.path" />
          </div>
        </div>

        <!-- Product Info -->
        <ShopProductInfo @update:selectedColorId="selectedColorId = $event"
          @update:selectedPriceId="selectedPriceId = $event" :product="product" />
      </div>
      <div class="block sm:hidden">
        <UTabs :items="tabs" color="primary" variant="link" class="bg-[#FAFAFA]" :ui="{
          trigger: 'py-5',
          indicator: 'bg-primary-500',
        }" v-model="activeTab" />
      </div>
      <div class="my-4" id="specifications" >
        <ShopAttributes :items="product.attributes"/>
      </div>

      <USeparator class="w-full" />

      <div class="my-4 px-8" id="reviews">
        <h2 class="mb-6 text-right text-xl font-bold text-purple-600 md:text-2xl">نقد و بررسی</h2>
        <div class="prose max-w-none" v-html="product?.description || '-'"></div>
      </div>

      <USeparator class="w-full" />

      <div class="py-4">
        <ShopUserReviews />
      </div>

      <!-- Related Products -->
      <ShopProductsCategory link="#" title="کالاهای مشابه" :products="product?.product_relations"
        v-if="product?.product_relations?.length" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { getProductById } from '~/api/product-api'

const router = useRouter()

// Environment and route
const BASE_URL = process.env.BASE_URL || "https://api.merqc.com"
const route = useRoute()

const selectedColorId = ref(null)
const selectedPriceId = ref(null)
const activeTab = ref(null)

// Tabs configuration
const tabs = [
  {
    key: 'description',
    label: 'توضیحات محصول',
  },
  {
    key: 'specifications',
    label: 'مشخصات فنی',
  },
  {
    key: 'reviews',
    label: 'نظرات کاربران',
  },
]

// Fetch product data
const { data: product } = await useAsyncData('product', () => getProductById(route.params.slug))

// Reactive image selection
const selectedImage = ref(null)

// Set initial image based on product data
watch(
  () => product.value,
  (newProduct) => {
    if (newProduct?.banner?.path) {
      selectedImage.value = newProduct.banner.path
    } else if (newProduct?.file?.path) {
      selectedImage.value = newProduct.file.path
    } else {
      selectedImage.value = '/fallback-image.jpg' // Fallback image
    }
  },
  { immediate: true }
)

watch(
  () => activeTab.value,
  (newHash) => {
    console.log(newHash);
    if (activeTab.value) {
      const currentTab = tabs.find((tab) => tab.key === newHash)
      router.push(`#${currentTab.key}`)
    }
  },
  { immediate: true }
)

// Watch selectedColorId to update image
watch(
  selectedColorId,
  (newColorId) => {
    if (newColorId && product.value?.galleries) {
      const matchingGallery = product.value.galleries.find(
        (gallery) => gallery.color.id === newColorId
      )
      if (matchingGallery?.path) selectedImage.value = matchingGallery?.path
      else selectedImage.value = product.value.banner.path ?? product.value.file.path
    }
  },
  { immediate: true }
)
</script>
