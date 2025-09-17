<template>
    <UCard class="my-4">
        <div class="space-y-4">
            <USkeleton v-if="!isLoading" class="h-6 w-32" />
            <h2 v-else class="text-xl font-bold">جزئیات سفارش</h2>
            
            <div class="flex flex-wrap gap-4">
                <template v-if="isLoading">
                    <USkeleton class="h-5 w-24" />
                    <span>•</span>
                    <USkeleton class="h-5 w-28" />
                    <span>•</span>
                    <USkeleton class="h-5 w-32" />
                    <span>•</span>
                    <USkeleton class="h-5 w-20" />
                </template>
                <template v-else>
                    <div class="flex justify-between items-center gap-1">
                        <span class="font-medium">کد سفارش:</span>
                        <span class="text-neutral-600 text-sm">{{ props.order.resNum }}</span>
                    </div>
                    <span>•</span>
                    <div class="flex justify-between items-center gap-1">
                        <span class="font-medium">تاریخ سفارش:</span>
                        <span class="text-neutral-600 text-sm">{{ formatDate(props.order.created) }}</span>
                    </div>
                    <span>•</span>
                    <div class="flex justify-between items-center gap-1">
                        <span class="font-medium">مبلغ سفارش:</span>
                        <span class="text-neutral-600 text-sm">{{ formatPrice(props.order.payment_process.prices.total) }} تومان</span>
                    </div>
                    <span>•</span>
                    <div class="flex justify-between items-center gap-1">
                        <span class="font-medium">تخفیف:</span>
                        <span class="text-neutral-600 text-sm">{{ formatPrice(props.order.payment_process.prices.discount) }} تومان</span>
                    </div>
                </template>
            </div>
        </div>
        <template #footer>
            <div class="w-full grid grid-cols-2">
                <div class="flex flex-col justify-start items-start">
                    <USkeleton v-if="isLoading" class="h-5 w-24 mb-2" />
                    <p v-else class="font-bold">مرسوله ۱ از ۱</p>
                    
                    <div class="flex justify-between gap-2">
                        <USkeleton v-if="isLoading" class="h-4 w-20" />
                        <span v-else class="font-medium">تاریخ تحویل:</span>
                        <USkeleton v-if="isLoading" class="h-4 w-32" />
                        <span v-else>{{ props.order.payment_process.prices?.shipping_method?.time ? formatDate(props.order.payment_process.prices.shipping_method.time) : 'بسته به زمان تحویل' }}</span>
                    </div>
                    
                    <USkeleton v-if="isLoading" class="h-28 w-28 mt-2" />
                    <NuxtImg 
                        v-else-if="firstProduct?.image?.path" 
                        :src="firstProduct.image.path" 
                        :alt="firstProduct.title_fa" 
                        class="max-h-28 object-contain" 
                    />
                </div>
                <div class="space-y-2" v-if="type == 'current'">
                    <div class="flex justify-between mt-2 rtl">
                        <USkeleton v-if="isLoading" class="h-5 w-24" />
                        <span v-else>{{ orderStatus }}</span>
                        <USkeleton v-if="isLoading" class="h-5 w-20" />
                        <span v-else-if="props.order.order_status === 'Ready to Ship'">آماده ارسال</span>
                    </div>
                    <USkeleton v-if="isLoading" class="h-2 w-full" />
                    <UProgress v-else inverted v-model="orderProgressValue" color="success" />
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
    },
    isLoading: {
        type: Boolean,
        default: true
    }
});

const firstProduct = computed(() => {
    return props.order?.product_fields?.productsInfo?.[0] || null;
});

const orderStatus = computed(() => {
    if (!props.order?.order_status) return '';
    
    switch (props.order.order_status) {
        case 'Awaiting':
            return 'در انتظار پردازش';
        case 'Processing':
            return 'در حال پردازش';
        case 'Ready to Ship':
            return 'آماده ارسال';
        case 'Shipped':
            return 'ارسال شده';
        case 'Delivered':
            return 'تحویل داده شده';
        case 'Cancelled':
            return 'لغو شده';
        case 'Returned':
            return 'مرجوع شده';
        default:
            return props.order.order_status;
    }
});

const orderProgressValue = computed(() => {
    if (!props.order?.order_status) return 0;
    
    switch (props.order.order_status) {
        case 'Awaiting':
            return 10;
        case 'Processing':
            return 25;
        case 'Ready to Ship':
            return 50;
        case 'Shipped':
            return 75;
        case 'Delivered':
            return 100;
        case 'Cancelled':
        case 'Returned':
            return 0;
        default:
            return 0;
    }
});

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const formatPrice = (price) => {
    if (!price) return '0';
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
</script>