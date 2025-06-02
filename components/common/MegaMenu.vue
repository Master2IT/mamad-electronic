<template>
    <client-only>
        <div class="relative" @mouseenter="openMenu" @mouseleave="closeMenu">
            <UButton variant="ghost" class="flex items-center gap-2">
                <span>دسته‌ بندی محصولات</span>
                <UIcon name="i-lucide-chevron-down" class="size-5" />
            </UButton>

            <div v-if="isOpen"
                class="absolute top-full right-0 w-[1200px] bg-white rounded-lg shadow-lg border-neutral-100 border mt-1 p-4 z-50">
                <div class="flex">
                    <!-- Parent Categories Column -->
                    <div class="w-[200px] border-l pl-3 border-neutral-300">
                        <div v-for="category in categories[0].children" :key="category.label"
                            @mouseenter="activeCategory = category"
                            class="flex items-center justify-between gap-2 rounded-lg hover:bg-primary-100 transition-colors cursor-pointer p-2">
                            <h3 class="font-medium text-neutral-800 text-sm">{{ category.label }}</h3>
                            <UIcon name="i-lucide-chevron-left" class="size-5 text-gray-400" />
                        </div>
                    </div>

                    <!-- Subcategories Column -->
                    <div v-if="activeCategory?.subcategories" class="w-2/3 p-4">
                        <ul class="space-y-2">
                            <li v-for="sub in activeCategory.subcategories" :key="sub.label">
                                <UButton :to="sub.to" variant="ghost"
                                    class="text-sm text-gray-600 hover:text-primary-500 transition-colors w-full text-start">
                                    {{ sub.label }}
                                </UButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </client-only>
</template>

<script setup>
import { getCategories } from '~/api/category-api'

const isOpen = ref(false)
const activeCategory = ref(null)
let closeTimeout = null

const openMenu = () => {
    if (closeTimeout) {
        clearTimeout(closeTimeout)
    }
    isOpen.value = true
}

const closeMenu = () => {
    closeTimeout = setTimeout(() => {
        isOpen.value = false
    }, 200) // Add 200ms delay before closing
}

const categories = [
    {
        label: '‌دسته بندی محصولات',
        children: [
            {
                label: 'قطعات الکترونیکی',
                // description: 'انواع قطعات و کامپوننت‌های الکترونیکی',
                icon: 'i-lucide-cpu',
                to: '/category/1',
                subcategories: [
                    { label: 'مقاومت‌ها', to: '/category/2' },
                    { label: 'خازن‌ها', to: '/category/3' },
                    { label: 'ترانزیستورها', to: '/category/4' }
                ]
            },
            {
                label: 'ابزار و تجهیزات',
                // description: 'ابزارهای تخصصی تعمیرات و مونتاژ',
                icon: 'i-lucide-wrench',
                to: '/category/5',
                subcategories: [
                    { label: 'هویه و لوازم لحیم‌کاری', to: '/category/6' },
                    { label: 'مولتی‌متر و تستر', to: '/category/7' },
                    { label: 'ابزار دستی', to: '/category/8' }
                ]
            },
            {
                label: 'بردهای توسعه',
                // description: 'انواع آردوینو، رزبری‌پای و بردهای توسعه',
                icon: 'i-lucide-circuit-board',
                to: '/category/9',
                subcategories: [
                    { label: 'آردوینو', to: '/category/10' },
                    { label: 'رزبری‌پای', to: '/category/11' },
                    { label: 'میکروکنترلرها', to: '/category/12' }
                ]
            },
            {
                label: 'سنسورها و ماژول‌ها',
                // description: 'تجهیزات اندازه‌گیری و کنترل',
                icon: 'i-lucide-radio-tower',
                to: '/category/13',
                subcategories: [
                    { label: 'سنسورهای دما', to: '/category/14' },
                    { label: 'سنسورهای فشار', to: '/category/15' },
                    { label: 'ماژول‌های وای‌فای', to: '/category/16' }
                ]
            }
        ]
    }
]
</script>
