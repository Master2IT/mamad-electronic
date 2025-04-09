<template>
  <NuxtLayout name="panel">
    <UCard class=" my-4">
      <p class="font-bold text-2xl mb-5">تاریخچه سفارشات</p>
      <UTabs :items="items" variant="link" class="gap-4 w-full" :ui="{ trigger: 'flex-1' }">
      <template #current="{ item }">
        <PanelOrderDetails />
      </template>
      <template #delivered="{ item }">
        salam
      </template> 
      <template #returned="{ item }">
        salam
      </template>
       <template #cancelled="{ item }">
        salam
      </template>
    </UTabs>
    </UCard>
   
  </NuxtLayout>
</template>

<script setup>
const items = [
  {
    label: 'جاری',
    slot: 'current'
  },
  {
    label: 'تحویل شده',
    slot: 'delivered'
  },
  {
    label: 'مرجوع شده',
    slot: 'returned'
  },
  {
    label: 'لغو شده',
    slot: 'cancelled'
  }
]
</script>