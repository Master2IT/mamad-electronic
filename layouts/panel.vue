<template>
  <div>
    <Header />
    <div class="flex gap-3 p-3">
      <UCard class="w-72 hidden lg:flex" :ui="{
        body: '!px-0'
      }">
        <div class="flex items-center gap-4 mb-4 px-4 w-full">
          <UAvatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" size="sm" />
          <h3 class="text-lg font-bold">{{ user?.name }} {{ user?.family }}</h3>
        </div>
        <UNavigationMenu orientation="vertical" :items="items" class="mt-2 w-full" :ui="{
          item: 'mb-3 w-72 hover:bg-primary/10',
          link: 'p-3 relative before:bg-transparent before:!rounded-none data-[active]:before:border-r-2 before:border-primary before:absolute before:right-0 before:top-0 before:h-full pr-5 w-full'
        }" />
        <div class="px-4 w-full">
          <UButton block class="mt-3 flex justify-center cursor-pointer w-full" @click="logout">خروج</UButton>
        </div>
      </UCard>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { CookieStorage } from '#imports';
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import { ref } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore()
const { logout, user } = authStore


onBeforeMount(() => {
  if (!CookieStorage.get('token')) {
    navigateTo('/')
  }
})


const items = ref([
[
  {
    label: "اطلاعات فردی",
    to: "/panel/profile",
    external: true,
    icon: "i-lucide-user",
  },
  {
    label: "پرداخت", 
    to: "/panel/card",
    external: true,
    icon: "i-lucide-dollar-sign",
  },
  {
    label: "سفارش ها",
    to: "/panel/orders", 
    external: true,
    icon: "i-lucide-shopping-bag",
  },
  {
    label: "لیست های من",
    to: "/panel/wishlist",
    external: true,
    icon: "i-lucide-heart",
  },
  {
    label: "پیغام ها",
    to: "/panel/notifications",
    external: true,
    icon: "i-lucide-bell",
  },
  // {
  //   label: "تماس با ما",
  //   to: "/panel/contact",
  //   external: true,
  //   icon: "i-lucide-message-circle",
  // },
]
]);
</script>