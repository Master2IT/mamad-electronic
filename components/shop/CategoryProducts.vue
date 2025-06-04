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

            <!-- Loading Skeleton -->
            <div v-if="pending" :class="[
                viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-4 gap-6' : 'space-y-4'
            ]">
                <div v-for="i in 12" :key="i" :class="[
                    'animate-pulse',
                    viewMode === 'grid' ? 'flex flex-col' : 'flex gap-4'
                ]">
                    <div :class="[
                        'bg-gray-200 rounded-lg',
                        viewMode === 'grid' ? 'h-48 w-full' : 'h-32 w-32'
                    ]"></div>
                    <div :class="[
                        'space-y-3',
                        viewMode === 'grid' ? 'mt-4' : 'flex-1'
                    ]">
                        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </div>

            <!-- No Products Message -->
            <div v-else-if="!products?.items?.length" class="flex flex-col items-center justify-center py-12 px-4">
                <div class="text-gray-400 mb-4">
                    <div class="i-lucide-package-x text-6xl"></div>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">محصولی یافت نشد</h3>
                <p class="text-gray-500 text-center max-w-md">
                    با تغییر فیلترها یا جستجوی متفاوت می‌توانید محصولات دیگری را مشاهده کنید
                </p>
            </div>

            <!-- Products -->
            <div v-else :class="[
                viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-4 gap-6' : 'space-y-4',
            ]">
                <CommonProductCard v-for="product in products.items" :key="product.id" :product="product"
                    :type="viewMode === 'grid' ? 1 : 2" />
            </div>

            <!-- Pagination -->
            <div class="flex justify-center mt-8" v-if="products?.meta?.total > 12">
                <UPagination show-edges v-model:page="currentPage" 
                :total="products?.meta?.total - 1 || 0"
                    :page-count="products?.meta?.per_page || 12" :total-pages="products?.meta?.last_page || 1" :ui="{
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
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { getProducts } from '~/api/product-api'

const sorting = ref('newest')
const currentPage = ref(1)
const viewMode = ref('grid')

const filters = ref({
    price: [0, 10000000],
    selectedColors: [],
    selectedBrands: [],
    selectedType: null,
    tomorrowShipping: false
})

const { data: products, pending, refresh } = await useAsyncData('products',
    () => getProducts({
        sort: sorting.value,
        page: currentPage.value,
        prices: {
            min: filters.value.price[0],
            max: filters.value.price[1]
        }
    }), {
    watch: [sorting]
})


// Watch price changes with debounce
watch(() => filters.value.price, useDebounceFn(async () => {
    await refresh()
}, 1000))

// Watch page changes immediately
watch(() => currentPage.value, async () => {
    await refresh()
}, {
    immediate: true
})

const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'cheapest', label: 'ارزان‌ترین' },
    { value: 'expensiveness', label: 'گران‌ترین' },
    { value: 'popular', label: 'محبوب‌ترین' },
    { value: 'most_offer', label: 'بیشترین تخفیف' },
    { value: 'most_sale', label: 'پرفروش‌ترین' },
    { value: 'chosen', label: 'منتخب' }
]

const colors = [
    { id: 1, name: 'مشکی' },
    { id: 2, name: 'سفید' },
    { id: 3, name: 'آبی' },
    { id: 4, name: 'قرمز' },
    { id: 5, name: 'سبز' }
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
</script>