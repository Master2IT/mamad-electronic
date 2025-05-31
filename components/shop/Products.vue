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
                    <URange v-model="filters.price" :min="0" :max="10000000" :step="100000" class="w-full" />
                    <div class="flex justify-between text-sm text-gray-600">
                        <span>{{ filters.price[0].toLocaleString('fa-IR') }} تومان</span>
                        <span>{{ filters.price[1].toLocaleString('fa-IR') }} تومان</span>
                    </div>
                </div>

                <!-- Colors -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">رنگ‌ها</h4>
                    <div class="space-y-2">
                        <UCheckbox v-for="color in colors" :key="color.id" v-model="filters.selectedColors"
                            :value="color.id">
                            <div class="flex items-center gap-2">
                                <div :class="['w-4 h-4 rounded-full', color.class]"></div>
                                <span>{{ color.name }}</span>
                            </div>
                        </UCheckbox>
                    </div>
                </div>

                <!-- Brands -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">برندها</h4>
                    <div class="space-y-2">
                        <UCheckbox v-for="brand in brands" :key="brand.id" v-model="filters.selectedBrands"
                            :value="brand.id">
                            {{ brand.name }}
                        </UCheckbox>
                    </div>
                </div>

                <!-- Product Type -->
                <div class="space-y-4 mb-6">
                    <h4 class="font-medium">نوع محصول</h4>
                    <div class="space-y-2">
                        <URadio v-for="type in types" :key="type.id" v-model="filters.selectedType" :value="type.id">
                            {{ type.name }}
                        </URadio>
                    </div>
                </div>

                <!-- Tomorrow Shipping -->
                <div class="pt-4 border-t">
                    <UCheckbox v-model="filters.tomorrowShipping">
                        ارسال فردا
                    </UCheckbox>
                </div>
            </UCard>
        </div>

        <!-- Products Grid -->
        <div class="w-full">
            <!-- Sorting and View Options -->
            <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <USelect v-model="sorting" :options="sortOptions" placeholder="مرتب‌سازی بر اساس"
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
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PRODUCTS } from '~/constant'

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
const sorting = ref('newest')
const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'price_asc', label: 'ارزان‌ترین' },
    { value: 'price_desc', label: 'گران‌ترین' },
    { value: 'popular', label: 'محبوب‌ترین' }
]

// Filter options
const colors = [
    { id: 1, name: 'مشکی', class: 'bg-black' },
    { id: 2, name: 'سفید', class: 'bg-white border border-gray-300' },
    { id: 3, name: 'آبی', class: 'bg-blue-500' },
    { id: 4, name: 'قرمز', class: 'bg-red-500' },
    { id: 5, name: 'سبز', class: 'bg-green-500' }
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

// Filtered products
const filteredProducts = computed(() => {
    let result = [...PRODUCTS]

    // Filter by price
    result = result.filter(product => {
        const price = parseInt(product.price)
        return price >= filters.value.price[0] && price <= filters.value.price[1]
    })

    // Apply sorting
    switch (sorting.value) {
        case 'price_asc':
            result.sort((a, b) => parseInt(a.price) - parseInt(b.price))
            break
        case 'price_desc':
            result.sort((a, b) => parseInt(b.price) - parseInt(a.price))
            break
        case 'popular':
            result.sort((a, b) => b.rating - a.rating)
            break
        default: // newest
            result.sort((a, b) => b.id - a.id)
    }

    return result
})
</script>