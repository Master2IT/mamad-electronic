<template>
  <div class="bg-base-100 shadow-sm h-[174px] px-24 justify-between">
    <div class="navbar flex justify-between">
      <div class="flex">
        <img src="../public/logo.svg" alt="logo" />
        <div>
          <p class="text-primary font-bold text-4xl">محمد</p>
          <span>الکترونیک</span>
        </div>
      </div>
      <div class="flex gap-2">
        <input
            type="search"
            placeholder="جستجو"
            class="input input-bordered w-24 md:w-[500px] rounded-md"
        />
      </div>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <button class="btn bg-primary text-white">
            <LogIn class="size-5" />
            ورود / ثبت نام
          </button>
          <div class="divider lg:divider-horizontal"></div>
          <button class="">
            <ShoppingCart class="size-8" />
          </button>
        </div>
        <div class="flex justify-between">
          <p>پشتیبانی</p>
          <p class="text-secondary">۰۳۱-۳۲۳۷۲۷۶۷</p>
        </div>
      </div>
    </div>
    <ul class="menu menu-horizontal px-1 flex items-center justify-between">
      <li>
        <details>
          <summary>دسته بندی کالا ها</summary>
          <ul class="p-2 bg-base-100 shadow-lg rounded-md w-[calc(100vw-200px)]">
            <div class="grid grid-cols-3 gap-0">
              <div class="border-l border-pink-200">
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
              <div class="border-l border-pink-200">
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
      <li><a href="">تخفیفات</a></li>
      <li><a href="" class="text-[#009951] font-bold text-xl">

        پیشنهاد ویژه</a></li>
      <img src="../../public/moon.svg" alt="">
    </ul>
  </div>
</template>
<script setup lang="ts">
import { LogIn } from 'lucide-vue-next'
import { ShoppingCart } from 'lucide-vue-next'
</script>
