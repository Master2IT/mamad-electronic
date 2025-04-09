<template>
  <UCard class="my-4 ">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">جزئیات سفارش</h2>
      <div class="flex space-x-2">
        <div class="flex justify-between items-center gap-1">
          <span class="font-medium">کد سفارش:</span>
          <span class="text-neutral-600 text-sm">{{ order.code }}</span>
        </div>
        <span>•</span>
        <div class="flex justify-between items-center gap-1">
          <span class="font-medium">تاریخ سفارش:</span>
          <span class="text-neutral-600 text-sm">{{ order.date }}</span>
        </div>
        <span>•</span>
        <div class="flex justify-between items-center gap-1">
          <span class="font-medium">مبلغ سفارش:</span>
          <span class="text-neutral-600 text-sm">{{ order.amount }} تومان</span>
          
        </div>
        <span>•</span>
        <div class="flex justify-between items-center gap-1">
          <span class="font-medium">تخفیف:</span>
          <span class="text-neutral-600 text-sm">{{ order.discount }} تومان</span>
        </div>
      
      </div>
    </div>

    <template #footer>

      <div class="w-full grid grid-cols-2">
        <div class="flex flex-col justify-start items-start">
          <p class="font-bold">مرسوله ۱ از ۱</p>
        <div class="flex justify-between">
          <span class="font-medium">تاریخ تحویل:</span>
          <span>{{ order.deliveryDate }}</span>
          
        </div>
        <NuxtImg
          :src="order.productImage"
          alt="تصویر محصول"
          class="max-h-28 object-contain"
        />
      </div>
       <div class="space-y-2">
        <div class="flex justify-between mt-2 rtl">
          <span>در حال پردازش</span>
          <span>آماده ارسال</span>
        </div>
        <UProgress inverted  v-model="orderProgressValue" color="success" />
       
       </div>
      </div>
    </template>
  </UCard>
</template>

<script setup>
import NuxtImg from "../../node_modules/%40nuxt/image/dist/runtime/components/NuxtImg.vue";
const order = ref({
  code: '38663813136',
  date: '16 فروردین 14:03',
  amount: '15,123,800',
  discount: '55,800',
  deliveryDate: 'پنج شنبه 23 فروردین 5 - 9 عصر',
  productImage: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
  status: 'readyToShip' // can be 'processing', 'readyToShip', 'delivered', 'cancelled'
});

const orderStatus = computed(() => {
  switch (order.value.status) {
    case 'processing':
      return 'در حال پردازش';
    case 'readyToShip':
      return 'آماده ارسال';
    case 'delivered':
      return 'تحویل داده شده';
    case 'cancelled':
      return 'لغو شده';
    default:
      return '';
  }
});

const orderProgressValue = computed(() => {
  switch (order.value.status) {
    case 'processing':
      return 25;
    case 'readyToShip':
      return 75;
    case 'delivered':
      return 100;
    case 'cancelled':
      return 0;
    default:
      return 0;
  }
});
</script>