<template>
    <div class="grid grid-cols-7 p-10 gap-5 w-full">
        <UCard class="col-span-5">
            <div class="grid grid-cols-5 gap-5">
                <div class="col-span-2">
                    <NuxtImg class="h-72 w-full"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hfNK8S7ywtaPVr8WGTV4-wHaE7%26pid%3DApi&f=1&ipt=5c6457e85e91df6fd76ec0370b001563b9d75153ef52ede1bbec796523e42d71&ipo=images"
                        alt="MacBook Air MGN63 2020" />
                </div>
                <div class="col-span-3">
                    <div class="flex flex-col space-y-2">
                        <h1 class="font-bold">لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020</h1>
                        <span class="text-gray-400">گارانتی سلامت کالا</span>
                        <span class="text-gray-400">ارسال امروز</span>
                        <span class="text-gray-400">ارسال رایگان</span>
                    </div>
                    <div class="flex item-center justify-between mt-4">
                        <p class="text-red-500">۴۸،۴۹۰،۰۰۰</p>
                        <p class=""> ۴۸،۴۹۰،۰۰۰ تومان</p>
                        <UButton>button</UButton>
                    </div>
                </div>
            </div>

        </UCard>
        <UCard class="col-span-2">
            <div class="p-4 space-y-2">
                <h2 class="text-lg font-bold mb-4">سبد خرید</h2>
                <div class="flex justify-between mb-2">
                    <span>قیمت کالاها (۳)</span>
                    <span>۵۰,۵۰۰,۰۰۰ تومان</span>
                </div>
                <div class="flex justify-between mb-2">
                    <span class="font-bold">جمع سبد خرید</span>
                    <span>۵۰,۵۰۰,۰۰۰ تومان</span>
                </div>
                <div class="flex justify-between mb-2">
                    <span class="font-bold text-red-500">سود تخفیف پلکانی</span>
                    <span>۵۰,۵۰۰,۰۰۰ تومان</span>
                </div>
                <UButton block color="primary" class="mt-4">تایید و تکمیل سفارش</UButton>
                <div class="mt-2">

                    <span class="text-gray-500 text-xs">هزینه این سفارش هنوز پرداخت نشده و در صورت اتمام موجودی
                        کالاها از سبد خرید حذف میشنود.</span>
                </div>
            </div>
        </UCard>

        <UCard class="col-span-7">
            <template #header>
                <p class="text-lg font-bold p-4 text-primary-800">
                    <span class="border-b-2">خریداران این محصولات،</span> محصولات زیر را هم خریده اند
                </p>
            </template>
            <div class="grid grid-cols-4 gap-4 p-4">
                <CommonProductCard 
                    v-for="product in PRODUCTS.slice(0, 4)" 
                    :key="product.id"
                    :type="2"
                    :product="product"
                    show-review
                />
            </div>
        </UCard>

    </div>
</template>
<script setup>
import { PRODUCTS } from '~/constant';


</script>