<template>
  <div>
    <Header />
    <div class="flex gap-3">
      <UCard class="w-56">
        <div class="flex items-center gap-4 mb-4">
          <UAvatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" />
          <p>mehran</p>
        </div>
        <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
      </UCard>
      <slot />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const items = ref([
[
  {
    label: "اطلاعات فردی",
    to: "/panel/profile",
    icon: "i-heroicons-user",
  },
  {
    label: "پرداخت و اقساط", 
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
  {
    label: "کارت های هدیه",
    to: "/panel/gift-cards",
    icon: "i-heroicons-gift",
  },
  {
    label: "پیغام ها",
    to: "/panel/notifications",
    icon: "i-heroicons-bell",
  },
  {
    label: "تماس با ما",
    to: "/panel/contact",
    icon: "i-heroicons-chat-bubble-oval-left",
  }
]
]);
</script>