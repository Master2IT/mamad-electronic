<template>
    <div>
        <UContainer>
            <Header />
            <div>
              <UCard class="p-5">

                <UStepper :items="items" :value="currentStep" />
              </UCard>
                <slot />
            </div>
        </UContainer>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import type { StepperItem } from '@nuxt/ui'

const currentStep = ref(0)

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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>