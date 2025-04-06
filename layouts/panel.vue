<template>
  <div class="flex gap-3">
    <ul class="menu bg-base-200 rounded-box w-56 space-y-5 p-4">
      <div class="flex items-center gap-4">
        <div class="avatar">
          <div class="w-8 h-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <p>mehran</p>
      </div>
      <li v-for="(item, i) in items" :key="i">
        <NuxtLink :href="item.link">
          <component size="20" :is="item.icon" v-if="item.icon" />
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>
<script setup lang="ts">
import { Bell, CircleDollarSign, Gift, Heart, MessageCircle, ShoppingBasket, UserPenIcon } from "lucide-vue-next";

const items = ref([
  {
    name: "اطلاعات فردی",
    link: "/profile",
    icon: UserPenIcon,
  }, {
    name: "پرداخت و اقساط",
    link: "",
    icon: CircleDollarSign,
  }, {
    name: "سفارش ها",
    link: "",
    icon: ShoppingBasket,
  }, {
    name: "لیست های من",
    link: "",
    icon: Heart,
  }, {
    name: "کارت های هدیه",
    link: "",
    icon: Gift,
  }, {
    name: "پیغام ها",
    link: "",
    icon: Bell,
  }, {
    name: "تماس با ما",
    link: "",
    icon: MessageCircle,
  },
]);


</script>