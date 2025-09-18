<template>
  <div>
    <Header />
    <UContainer>
      <div>
        <UCard class="p-5">

          <UStepper :items="items" v-model="currentStep" />
        </UCard>
        <slot />
      </div>
    </UContainer>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import type { StepperItem } from '@nuxt/ui';

const route = useRoute()
const path = route.path.split('/')
const currentStep = ref(0)

onBeforeMount(() => {
  const isAuth = CookieStorage.get('token')
  if (!isAuth) {
    navigateTo('/')
  }
})

watch(path, () => {
  console.log(path[1]);

  setTimeout(() => {
    switch (path[1]) {
      case 'cart':
        currentStep.value = 0
        break
      case 'address':
        currentStep.value = 1
        break
      case 'checkout':
        currentStep.value = 2
        break
      case 'callback':
        currentStep.value = 3
        break
      default:
        currentStep.value = 0
        break
    }
  }, 50)
}, {
  immediate: true
})

const items = ref<StepperItem[]>([
  {
    // title: 'مرحله اول',
    description: 'سبد خرید شما',
    disabled: useRoute().path !== '/basket',
    icon: 'i-lucide-shopping-basket',
    complete: computed(() => currentStep.value > 0)
  },
  {
    // title: 'مرحله  دوم',
    description: 'ارسال اطلاعات',
    icon: 'i-lucide-map-pin',
    complete: computed(() => currentStep.value > 1)
  },
  {
    // title: 'مرحله سوم',
    description: 'پرداخت و ثبت نهایی',
    icon: 'i-lucide-credit-card',
    complete: computed(() => currentStep.value > 2)
  },
  {
    // title: 'مرحله چهارم',
    description: 'اتمام خرید و ارسال',
    icon: 'i-lucide-truck',
    complete: computed(() => currentStep.value > 3)
  }
])
</script>