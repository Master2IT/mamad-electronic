<template>
    <NuxtLayout name="shop">
        <div class="container mx-auto px-4 py-8">
            <!-- Loading State -->
            <div v-if="pending" class="animate-pulse">
                <div class="bg-gray-200 rounded-lg h-64 w-full mb-8"></div>
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gray-200 rounded h-8 w-3/4 mb-4"></div>
                    <div class="bg-gray-200 rounded h-4 w-1/2 mb-6"></div>
                    <div class="space-y-3">
                        <div class="bg-gray-200 rounded h-4 w-full"></div>
                        <div class="bg-gray-200 rounded h-4 w-full"></div>
                        <div class="bg-gray-200 rounded h-4 w-3/4"></div>
                    </div>
                </div>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="text-center py-12">
                <p class="text-red-500 text-lg">خطا در بارگذاری مقاله</p>
                <UButton @click="refresh()" class="mt-4" variant="outline">
                    تلاش مجدد
                </UButton>
            </div>

            <!-- Blog Content -->
            <article v-else class="max-w-4xl mx-auto">
                <!-- Hero Image -->
                <div class="relative mb-8 rounded-lg overflow-hidden">
                    <img 
                        :src="data.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.png'" 
                        :alt="data.title"
                        class="w-full h-64 md:h-96 object-cover"
                    />
                </div>

                <!-- Article Header -->
                <header class="mb-8">
                    <h1 class="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                        {{ data.title }}
                    </h1>
                    
                    <!-- Meta Information -->
                    <div class="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                        <div class="flex items-center gap-2">
                            <Icon name="heroicons:user" class="w-4 h-4" />
                            <span>{{ data.user.display_name || 'نویسنده' }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Icon name="heroicons:calendar-days" class="w-4 h-4" />
                            <span>{{ formatDate(data.created) }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Icon name="heroicons:eye" class="w-4 h-4" />
                            <span>{{ data.view_count || '0' }} بازدید</span>
                        </div>
                    </div>


                    <!-- Share Buttons -->
                    <div class="flex items-center gap-4 pb-6 border-b border-gray-200">
                        <span class="text-gray-600 font-medium">اشتراک گذاری:</span>
                        <div class="flex gap-2">
                            <UButton 
                                @click="shareOnTelegram"
                                icon="i-simple-icons-telegram"
                                variant="outline"
                                size="sm"
                                color="blue"
                            />
                            <UButton 
                                @click="shareOnWhatsApp"
                                icon="i-simple-icons-whatsapp"
                                variant="outline"
                                size="sm"
                                color="green"
                            />
                            <UButton 
                                @click="copyLink"
                                icon="heroicons:link"
                                variant="outline"
                                size="sm"
                                color="gray"
                            />
                        </div>
                    </div>
                </header>

                <!-- Article Content -->
                <div class="prose prose-lg max-w-none mb-12">
                    <!-- Summary/Description -->
                    <div v-if="data.summary" class="bg-gray-50 p-6 rounded-lg mb-8 border-r-4 border-primary-500">
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">خلاصه مقاله</h3>
                        <p class="text-gray-700 leading-relaxed">{{ data.summary }}</p>
                    </div>

                    <!-- Main Content -->
                    <div v-html="data.content || data.description" class="text-gray-800 leading-relaxed"></div>
                </div>

                <!-- Navigation -->
                <div class="flex justify-between items-center pt-8 border-t border-gray-200">
                    <NuxtLink 
                        to="/blogs" 
                        class="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                        <span>بازگشت به وبلاگ</span>
                    </NuxtLink>
                    
                    <div class="flex gap-4">
                        <UButton 
                            v-if="data.prev_post"
                            :to="`/blogs/${data.prev_post.slug}`"
                            variant="outline"
                            size="sm"
                        >
                            مقاله قبلی
                        </UButton>
                        <UButton 
                            v-if="data.next_post"
                            :to="`/blogs/${data.next_post.slug}`"
                            variant="solid"
                            size="sm"
                        >
                            مقاله بعدی
                        </UButton>
                    </div>
                </div>
            </article>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { getBlogById } from '@/api/blogs-api'

const route = useRoute()
const slug = route.params.slug

// Set page meta
useHead({
    title: 'در حال بارگذاری...',
    meta: [
        { name: 'description', content: 'مقاله وبلاگ' }
    ]
})

// Fetch blog data
const { data, pending, error, refresh } = await useAsyncData(`blog-${slug}`, async () => {
    const res = await getBlogById(slug)
    console.log(res);
    
    return {
        id: res.id,
        title: res.title,
        content: res.content,
        description: res.body,
        summary: res.summary,
        image: res.image,
        author: res.user.display_name,
        author_bio: res.author_bio,
        created: res.created,
        updated_at: res.updated_at,
        read_time: res.read_time,
        prev_post: res.prev_post,
        next_post: res.next_post,
        user: res.user,
        view_count: res.view_count,
    }
})

// Update page meta when data is loaded
watch(data, (newData) => {
    if (newData) {
        useHead({
            title: newData.title,
            meta: [
                { name: 'description', content: newData.summary || newData.description || 'مقاله وبلاگ' },
                { property: 'og:title', content: newData.title },
                { property: 'og:description', content: newData.summary || newData.description },
                { property: 'og:image', content: newData.image },
                { property: 'og:type', content: 'article' },
            ]
        })
    }
}, { immediate: true })

// Utility functions
const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('fa-IR')
}

const shareOnTelegram = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(data.value.title)
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank')
}

const shareOnWhatsApp = () => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(`${data.value.title} - ${url}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
}

const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(window.location.href)
        // You can add a toast notification here
        console.log('Link copied to clipboard')
    } catch (err) {
        console.error('Failed to copy link:', err)
    }
}
</script>
