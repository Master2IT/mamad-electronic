<template>
<div class="flex flex-col gap-5 p-5">
    <div>
        <h1 class="text-2xl font-bold mb-1">علاقه مندی ها</h1>
        <p class="text-gray-600">مواردی که لیست شده</p>
    </div>
    <div class="grid grid-cols-4 gap-4">
        <CommonProductCard 
            v-for="product in data?.items" 
            :key="product.id"
            :type="2" 
            :product="{item}"
            show-review 
        />
    </div>
</div>
</template>

<script setup>
import { getFavorite } from '~/api/customer-api';

const data = ref(null)

onMounted(async () => {
  try {
    const response = await getFavorite()
    data.value = response
    console.log("data", data.value)
  } catch (error) {
    console.error("Error fetching favorites:", error)
  }
})

</script>