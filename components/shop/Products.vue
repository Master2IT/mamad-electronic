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
                    <h4 class="font-medium">رنگ‌ها</h4>
                    <div class="space-y-2">
                        <UCheckboxGroup v-model="filters.selectedColors" :items="colors" value-key="id"
                            label-key="name" />
                    </div>
                </div>

                <!-- Brands -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">برندها</h4>
                    <div class="space-y-2">
                        <UCheckboxGroup v-model="filters.selectedBrands" :items="brands" value-key="id"
                            label-key="name" />
                    </div>
                </div>

                <!-- Product Type -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">نوع محصول</h4>
                    <div class="space-y-2">
                        <URadioGroup v-model="filters.selectedType" :items="types" value-key="id" label-key="name" />
                    </div>
                </div>

                <!-- Tomorrow Shipping -->
                <div class="pt-4 border-t border-gray-300">
                    <UCheckbox v-model="filters.tomorrowShipping" label="ارسال فردا" />
                </div>
            </UCard>
        </div>

        <!-- Products Grid -->
        <div class="w-full">
            <!-- Sorting and View Options -->
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <USelect v-model="sorting" :items="sortOptions" placeholder="مرتب‌سازی بر اساس"
                    class="w-full sm:w-48" />
                <div class="flex gap-2">
                    <UButton :variant="viewMode === 'grid' ? 'solid' : 'outline'" @click="viewMode = 'grid'"
                        icon="i-lucide-grid" />
                    <UButton :variant="viewMode === 'list' ? 'solid' : 'outline'" @click="viewMode = 'list'"
                        icon="i-lucide-list" />
                </div>
            </div>

            <!-- Products -->
            <div :class="[
                viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-4 gap-6' : 'space-y-4',
            ]">
                <CommonProductCard v-for="product in filteredProducts" :key="product.id" :product="product"
                    :type="viewMode === 'grid' ? 1 : 2" />
            </div>

            <div class="flex justify-center mt-8">
                <UPagination v-model="currentPage" show-edges :total="data?.meta?.total || 0"
                    :page-count="data?.meta?.per_page || 12" :ui="{
                        rounded: 'rounded-lg',
                        next: 'rotate-180',
                        prev: 'rotate-180',
                        first: 'rotate-180',
                        last: 'rotate-180',
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
import { ref, computed } from 'vue'
import { getProducts } from '~/api/product-api'

const sorting = ref('newest')
const currentPage = ref(1)

const { data, refresh } = await useAsyncData('products', () => getProducts({ sort: sorting.value, page: currentPage.value }), {
    watch: [sorting, currentPage]
})

// Filter states
const filters = ref({
    price: [0, 10000000],
    selectedColors: [],
    selectedBrands: [],
    selectedType: null,
    tomorrowShipping: false
})

// View mode (grid/list)
const viewMode = ref('grid')

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

// Filter options
const colors = [
    { id: 1, name: 'مشکی' },
    { id: 2, name: 'سفید' },
    { id: 3, name: 'آبی' },
    { id: 4, name: 'قرمز' },
    { id: 5, name: 'سبز' },
]

const brands = [
    { id: 1, name: 'آردوینو' },
    { id: 2, name: 'رزبری پای' },
    { id: 3, name: 'اس‌تی' },
    { id: 4, name: 'تگزاس اینسترومنت' },
    { id: 5, name: 'میکروچیپ' }
]

const types = [
    { id: 1, name: 'میکروکنترلر' },
    { id: 2, name: 'سنسور' },
    { id: 3, name: 'قطعات پسیو' },
    { id: 4, name: 'ابزار' },
    { id: 5, name: 'کیت آموزشی' }
]

watch(sorting, async () => {
    await refresh()
})

watch(currentPage, async () => {
    await refresh()
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
            filters.value.selectedColors.includes(product.color_id)
        )
    }

    // Filter by brands
    if (filters.value.selectedBrands.length > 0) {
        result = result.filter(product =>
            filters.value.selectedBrands.includes(product.brand_id)
        )
    }

    // Filter by type
    if (filters.value.selectedType) {
        result = result.filter(product =>
            product.type_id === filters.value.selectedType
        )
    }

    // Filter by tomorrow shipping
    if (filters.value.tomorrowShipping) {
        result = result.filter(product => product.tomorrow_shipping)
    }

    return result
})
</script>