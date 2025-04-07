<template>
  <div class="bg-base-100 border-b min-h-[174px] px-4 justify-between">
    <div class="navbar flex flex-col md:flex-row justify-between gap-4">
      <div class="flex items-center">
        <img src="../public/logo.svg" alt="logo" class="w-16 md:w-auto" />
        <div>
          <p class="text-primary font-bold text-2xl md:text-4xl">محمد</p>
          <span>الکترونیک</span>
        </div>
      </div>
      <div class="flex gap-2 w-full md:w-auto">
        <input type="search" placeholder="جستجو" class="input input-bordered w-full md:w-[500px] rounded-md" />
      </div>
      <div class="space-y-2 md:space-y-4 w-full md:w-auto">
        <div class="hidden md:flex items-center justify-between">
          <button class="btn btn-sm md:btn-md bg-primary text-white">
            <LogIn class="size-4 md:size-5" />
            <span class="text-sm md:text-base">ورود / ثبت نام</span>
          </button>
          <div class="divider divider-horizontal hidden md:flex"></div>
          <button class="">
            <ShoppingCart class="size-6 md:size-8" />
          </button>
        </div>
        <div class="flex justify-between text-sm md:text-base">
          <p>پشتیبانی</p>
          <p class="text-secondary">۰۳۱-۳۲۳۷۲۷۶۷</p>
        </div>
      </div>
    </div>
    <ul class="menu menu-horizontal px-1 flex flex-wrap md:flex-nowrap items-center justify-between gap-2">
      <li class="w-full md:w-auto">
        <details>
          <summary>دسته بندی کالا ها</summary>
          <ul class="p-2 bg-base-100 shadow-lg rounded-md w-full md:w-[calc(100vw-200px)]">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0">
              <div class="border-0 md:border-l border-pink-200">
                <li><a class="hover:bg-pink-100">آی سی</a></li>
                <li><a class="hover:bg-pink-100">خازن</a></li>
                <li><a class="hover:bg-pink-100">مقاومت</a></li>
                <li><a class="hover:bg-pink-100">پتانسیومتر</a></li>
                <li><a class="hover:bg-pink-100">قطعات ربات پروازی</a></li>
                <li><a class="hover:bg-pink-100">دیود</a></li>
                <li><a class="hover:bg-pink-100">سلف</a></li>
                <li><a class="hover:bg-pink-100">اینترنت</a></li>
                <li><a class="hover:bg-pink-100">تجهیزات جانبی</a></li>
              </div>
              <div class="border-0 md:border-l border-pink-200">
                <li><a class="hover:bg-pink-100 bg-pink-200">آی سی یک</a></li>
                <li><a class="hover:bg-pink-100">آی سی دو</a></li>
                <li><a class="hover:bg-pink-100">همه محصولات آی سی</a></li>
              </div>
              <div>
                <li><a class="hover:bg-pink-100">آی سی یک</a></li>
                <li><a class="hover:bg-pink-100">آی سی دو</a></li>
              </div>
            </div>
          </ul>
        </details>
      </li>
      <li><a href="" class="text-sm md:text-base">تخفیفات</a></li>
      <li><a href="" class="text-[#009951] font-bold text-lg md:text-xl">
          پیشنهاد ویژه</a></li>
      <Icon name="moon" class="size-5 md:size-6" />
    </ul>
  </div>
</template>
<script setup>
import { LogIn } from 'lucide-vue-next'
import { ShoppingCart } from 'lucide-vue-next'
import Icon from '@/components/common/Icon.vue'
</script>
