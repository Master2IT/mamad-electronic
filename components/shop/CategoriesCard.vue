<template>
    <div class="my-10 h-auto">
        <UCarousel v-slot="{ item }" align="start" skipSnaps :items="items" autoHeight class="w-full" arrows loop
            :autoplay="{ delay: 2000 }" :ui="{
                item: 'basis-full md:basis-1/6',
                prev: 'left-0 right-auto',
                next: 'right-0 left-auto'
            }">
            <div class="py-1">
                <ShopCategoryCard :image="item.image" :name="item.name" />
            </div>
        </UCarousel>
    </div>
</template>
<script setup>

defineProps({
    items: {
        type: Array,
        required: true
    },
})
</script>