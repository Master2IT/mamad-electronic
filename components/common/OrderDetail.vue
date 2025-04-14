<template>
    <UCard class="my-4">
        <div class="space-y-4">
            <h2 class="text-xl font-bold">جزئیات سفارش</h2>
            <div class="flex flex-wrap gap-4">
                <div class="flex justify-between items-center gap-1">
                    <span class="font-medium">کد سفارش:</span>
                    <span class="text-neutral-600 text-sm">{{ props.order.code }}</span>
                </div>
                <span>•</span>
                <div class="flex justify-between items-center gap-1">
                    <span class="font-medium">تاریخ سفارش:</span>
                    <span class="text-neutral-600 text-sm">{{ props.order.date }}</span>
                </div>
                <span>•</span>
                <div class="flex justify-between items-center gap-1">
                    <span class="font-medium">مبلغ سفارش:</span>
                    <span class="text-neutral-600 text-sm">{{ props.order.amount }} تومان</span>
                </div>
                <span>•</span>
                <div class="flex justify-between items-center gap-1">
                    <span class="font-medium">تخفیف:</span>
                    <span class="text-neutral-600 text-sm">{{ props.order.discount }} تومان</span>
                </div>
            </div>
        </div>
        <template #footer>
            <div class="w-full grid grid-cols-2">
                <div class="flex flex-col justify-start items-start">
                    <p class="font-bold">مرسوله ۱ از ۱</p>
                    <div class="flex justify-between">
                        <span class="font-medium">تاریخ تحویل:</span>
                        <span>{{ props.order.deliveryDate }}</span>
                    </div>
                    <NuxtImg :src="props.order.productImage" alt="تصویر محصول" class="max-h-28 object-contain" />
                </div>
                <div class="space-y-2" v-if="type == 'current'">
                    <div class="flex justify-between mt-2 rtl">
                        <span>{{ orderStatus }}</span>
                        <span v-if="props.order.status === 'readyToShip'">آماده ارسال</span>
                    </div>
                    <UProgress inverted v-model="orderProgressValue" color="success" />
                </div>
            </div>
        </template>
    </UCard>
</template>

<script setup>
const props = defineProps({
    order: {
        type: Object,
        required: true
    },
    type: {
        type: String
    }
});

const orderStatus = computed(() => {
    switch (props.order.status) {
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
    switch (props.order.status) {
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