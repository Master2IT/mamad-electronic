<template>
    <div class="flex flex-col md:flex-row gap-6">
        <!-- Filters Sidebar -->
        <div class="md:w-1/4 space-y-6">
            <UCard>
                <template #header>
                    <h3 class="text-lg font-bold">فیلترها</h3>
                </template>

                <!-- Price Range -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">محدوده قیمت</h4>
                    <USlider v-model="filters.price" :min="0" :max="10000000" :step="100000" class="w-full" />
                    <div class="flex justify-between text-sm text-gray-600">
                        <span>{{ filters.price[1].toLocaleString('fa-IR') }} تومان</span>
                        <span>{{ filters.price[0].toLocaleString('fa-IR') }} تومان</span>
                    </div>
                </div>

                <!-- Colors -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">رنگ</h4>
                    <div class="space-y-2">
                        <UCheckboxGroup v-model="filters.selectedColors" :items="colors" value-key="id"
                            label-key="name" />
                    </div>
                </div>

                <!-- Brands -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">برند</h4>
                    <div class="space-y-2">
                        <UCheckboxGroup v-model="filters.selectedBrands" :items="brands" value-key="id"
                            label-key="name" />
                    </div>
                </div>


                <!-- Tomorrow Shipping -->
                <div class="pt-4 border-t border-gray-300">
                    <UCheckbox  label="ارسال فردا" />
                </div>
            </UCard>
        </div>

        <!-- Products Grid -->
        <div class="w-full">
            <!-- Sorting and View Options -->
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <USelect v-model="sorting" :items="sortOptions" placeholder="مرتب‌سازی بر اساس" class="w-full sm:w-48"
                    @update:model-value="sortingQuery" :disabled="pending" />
                <div class="flex gap-2">
                    <UButton :variant="viewMode === 'grid' ? 'solid' : 'outline'" @click="viewMode = 'grid'"
                        icon="i-lucide-grid" :disabled="pending" />
                    <UButton :variant="viewMode === 'list' ? 'solid' : 'outline'" @click="viewMode = 'list'"
                        icon="i-lucide-list" :disabled="pending" />
                </div>
            </div>

            <!-- Products -->
            <div v-if="pending" :class="[
                viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-4 gap-6' : 'space-y-4',
            ]">
                <div v-for="i in 12" :key="i" class="border border-gray-200 rounded-lg p-4">
                    <USkeleton class="h-48 w-full mb-4" />
                    <USkeleton class="h-4 w-3/4 mb-2" />
                    <USkeleton class="h-4 w-1/2 mb-2" />
                    <USkeleton class="h-6 w-1/3" />
                </div>
            </div>
            <div v-else :class="[
                viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-4 gap-6' : 'space-y-4',
            ]">
                <CommonProductCard v-for="product in filteredProducts" :key="product.id" :product="product"
                    :type="viewMode === 'grid' ? 1 : 2" />
            </div>

            <div class="flex justify-center mt-8">
                <UPagination v-model:page="currentPage"  show-edges :total="data?.meta?.total || 0"
                    :page-count="data?.meta?.per_page || 12" :disabled="pending" :ui="{
                        rounded: 'rounded-lg',
                        default: {
                            padding: 'px-3 py-1',
                            size: 'sm',
                            activeButton: 'bg-primary-500 text-white font-bold',
                            inactiveButton: 'bg-gray-100 text-gray-600',
                            button: 'hover:bg-primary-100',
                        }
                    }" dir="rtl" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getProducts } from '~/api/product-api'
import { getBrands } from '~/api/brand-api'
import { getColors } from '~/api/colors-api'
const route = useRoute()
const sorting = ref(route.query.sort || 'newest')
const currentPage = ref(parseInt(route.query.page) || 1)

const { data, refresh, pending } = await useAsyncData('products', () => getProducts({ sort: sorting.value, page: currentPage.value }), {
    watch: [sorting, currentPage]
})
// Filter states
const filters = ref({
    price: [0, 10000000],
    selectedColors: [],
    selectedBrands: [],
    selectedType: null,
    
})

// View mode (grid/list)
const viewMode = ref('grid')

// const colors = computed(() => {
//     if (!data.value?.items) return []
//     const allColors = data.value.items.map((item) => item.final_price.color).filter(Boolean)
//     return allColors.map((item) => ({
//         id: item.id,
//         name: item.title_fa
//     }))
// })
const { data: brands } = await useAsyncData('brands', async () => {
  const brands = await getBrands()
  return brands.map(brand => ({
    id: brand.id,
    name: brand.title,
  }))
})
const { data: colors } = await useAsyncData('colors', async () => {
  const colors = await getColors()
  return colors.map(color => ({
    id: color.id,
    name: color.title_fa,
  }))
})



// Sorting
const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'cheapest', label: 'ارزان‌ترین' },
    { value: 'expensiveness', label: 'گران‌ترین' },
    { value: 'popular', label: 'محبوب‌ترین' },
    { value: 'most_offer', label: 'بیشترین تخفیف' },
    { value: 'most_sale', label: 'پرفروش‌ترین' },
    { value: 'chosen', label: 'منتخب' }
]



const sortingQuery = () => {
    if (!pending.value) {
        navigateTo(`/products?sort=${sorting.value}&page=${currentPage.value}`)
    }
}

watch(sorting, async () => {
    currentPage.value = 1
    await refresh()
})

watch(currentPage, async () => {
    await refresh()
    navigateTo(`/products?sort=${sorting.value}&page=${currentPage.value}`)
})

// Filtered products
const filteredProducts = computed(() => {
    if (!data.value?.items) return []

    let result = [...data.value.items]

    // Filter by price
    result = result.filter(product => {
        const price = parseInt(product.final_price?.price || 0)
        return price >= filters.value.price[0] && price <= filters.value.price[1]
    })

    // Filter by colors
    if (filters.value.selectedColors.length > 0) {
        result = result.filter(product =>
            filters.value.selectedColors.includes(product.final_price.color.id)
        )
    }

    // Filter by brands
    if (filters.value.selectedBrands.length > 0) {
        result = result.filter(product =>
            filters.value.selectedBrands.includes(product.brand.id)
        )
    }

    // Filter by type
    if (filters.value.selectedType) {
        result = result.filter(product =>
            product.type_id === filters.value.selectedType
        )
    }

    // // Filter by tomorrow shipping
    // if (filters.value.tomorrowShipping) {
    //     result = result.filter(product => product.tomorrow_shipping)
    // }

    return result
})
</script>