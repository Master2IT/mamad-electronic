<template>
  <div>
    <Header />
    <div class="flex gap-3 p-3">
      <UCard class="w-56">
        <div class="flex items-center gap-4 mb-4">
          <UAvatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" />
          <p>mehran</p>
        </div>
        <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" :ui="{
          item: 'mb-3',
        }" />
        <UButton class="w-full flex justify-center cursor-pointer" @click="logout">خروج</UButton>
      </UCard>
      <slot />
    </div>
    <Footer />

  </div>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore()
const { logout } = authStore


const items = ref([
[
  {
    label: "اطلاعات فردی",
    to: "/panel/profile",
    icon: "i-heroicons-user",
  },
  {
    label: "پرداخت", 
    to: "/panel/card",
    icon: "i-heroicons-currency-dollar-20-solid",
  },
  {
    label: "سفارش ها",
    to: "/panel/orders", 
    icon: "i-heroicons-shopping-bag",
  },
  {
    label: "لیست های من",
    to: "/panel/wishlist",
    icon: "i-heroicons-heart",
  },
  // {
  //   label: "کارت های هدیه",
  //   to: "/panel/gifts",
  //   icon: "i-heroicons-gift",
  // },
  {
    label: "پیغام ها",
    to: "/panel/notifications",
    icon: "i-heroicons-bell",
  },
  {
    label: "تماس با ما",
    to: "/panel/contact",
    icon: "i-heroicons-chat-bubble-oval-left",
  },
]
]);
</script>