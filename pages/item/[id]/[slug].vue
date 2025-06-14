<template>
  <NuxtLayout name="shop">
    <UTabs
      :items="tabs"
      color="primary"
      variant="link"
      class="bg-[#FAFAFA]"
      :ui="{
        trigger: 'py-5',
        indicator: 'bg-primary-500',
      }"
    />
    <div class="container mx-auto bg-white py-8">
      <!-- Product Details Section -->
      <div class="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Product Gallery -->
        <div class="rounded-lg bg-white p-4">
          <NuxtImg
            :src="BASE_URL + selectedImage"
            :alt="product?.title_fa"
            class="h-[400px] w-full object-contain"
          />
          <div
            class="mt-4 flex gap-2 overflow-x-auto pb-2"
            v-if="product?.galleries && product?.galleries.length"
          >
            <NuxtImg
              v-for="(gallery, index) in product?.galleries"
              :key="index"
              :src="BASE_URL + gallery?.path"
              :alt="`${gallery?.name} - thumbnail ${index + 1}`"
              class="hover:border-primary-500 h-20 w-20 cursor-pointer rounded border object-contain"
              @click="selectedImage = gallery?.path"
            />
          </div>
        </div>

        <!-- Product Info -->
        <ShopProductInfo :product="product" />
      </div>

      <div class="my-4" v-if="product?.attributes?.length">
        <ShopAttributes :items="product.attributes" />
      </div>

      <USeparator class="w-full" />

      <div class="my-4 px-8">
        <h2 class="mb-6 text-right text-xl font-bold text-purple-600 md:text-2xl">نقد و بررسی</h2>
        <div class="prose max-w-none">
          <p>{{ product?.description || 'توضیحات تکمیلی محصول در اینجا قرار می‌گیرد.' }}</p>
        </div>
      </div>

      <USeparator class="w-full" />

      <div class="py-4">
        <ShopUserReviews />
      </div>

      <!-- Related Products -->
      <ShopProductsCategory
        link="#"
        title="کالاهای مشابه"
        :products="product?.product_relations"
        v-if="product?.product_relations?.length"
      />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { getProductById } from '~/api/product-api'

const BASE_URL = process.env.BASE_URL
const route = useRoute()

const { data: product } = await useAsyncData('product', () => getProductById(route.params.slug))

const selectedImage = ref(null)

watchEffect(() => {
  if (product.value?.banner?.path) {
    selectedImage.value = product.value?.banner?.path
  } else if (product.value?.file?.path) {
    selectedImage.value = product.value.file.path
  }
})

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
</script>
