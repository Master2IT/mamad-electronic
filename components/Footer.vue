<template>
  <footer class="text-white">
    <div class="my-4 grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-md border border-gray-200 bg-white p-4">
      <div class=" flex items-center justify-center gap-2 sm:flex-col flex-col-reverse">
        <p class="text-black text-sm md:text-base text-center">پشتیبانی 24 ساعته</p>
        <img src="/Vect.svg" alt="logo" class="w-12 sm:w-16 md:w-auto" />
      </div>
      <div class="flex items-center justify-center gap-2 sm:flex-col flex-col-reverse">
        <p class="text-black text-sm md:text-base text-center">تحویل سریع</p>
        <img src="/Vector.svg" alt="logo" class="w-12 sm:w-16 md:w-auto" />
      </div>
      <div class="flex items-center justify-center gap-2 sm:flex-col flex-col-reverse">
        <p class="text-black text-sm md:text-base text-center">ضمانت کالا</p>
        <img src="/Vecto.svg" alt="logo" class="w-12 sm:w-16 md:w-auto" />
      </div>
      <div class="flex items-center justify-center gap-2 sm:flex-col flex-col-reverse">
        <p class="text-black text-sm md:text-base text-center">جدیدترین تکنولوژی</p>
        <img src="/Vec.svg" alt="logo" class="w-12 sm:w-16 md:w-auto" />
      </div>
    </div>
    <!-- Social Media Bar -->
    <div class="bg-[#1F032F]">
      <UContainer class="mx-auto flex flex-col items-center justify-between gap-6 px-4 py-4 md:flex-row md:gap-0">
        <div class="flex w-full flex-col items-center gap-2 md:w-auto">
          <p class="w-full text-center text-white md:w-[400px]">
            برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را وارد نمایید
          </p>
          <form class="flex w-full items-center gap-2 md:w-auto" @submit.prevent="subscribeNewsletter">
            <input v-model="email" type="email" placeholder="ایمیل شما"
              class="w-full rounded-md bg-gray-800 px-4 py-2 text-white focus:outline-none md:w-96" />
            <button type="submit"
              class="rounded-md bg-purple-600 px-4 py-2 whitespace-nowrap transition duration-300 hover:bg-purple-500">
              ثبت
            </button>
          </form>
        </div>

        <div class="flex flex-col items-center space-x-2 rtl:space-x-reverse">
          <h3 class="mb-2 text-white">شبکه های اجتماعی</h3>
          <div class="flex space-x-2 rtl:space-x-reverse">
            <NuxtLink v-for="social in footer?.social_links?.filter(
              (link) => link.show
            )" :key="social.link?.url" :to="social.link?.url || '#'" :external="social.link?.is_external"
              class="rounded-md bg-gray-700 p-2 hover:bg-gray-600">
              <component :is="getSocialIcon(social)" class="size-5 text-white" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Main Footer Content -->
    <div class=" sm:flex min-h-[400px] items-center justify-center bg-white text-gray-800 mt-5">
      <div class="block sm:hidden col-span-1 md:col-span-2 lg:col-span-3">
        <div class="flex items-center justify-center">
          <img src="../public/logo.svg" alt="logo" class="w-16 md:w-auto" />
          <div>
            <p class="text-primary text-2xl font-bold md:text-4xl">محمد</p>
            <span>الکترونیک</span>
          </div>
        </div>
        <div class="">
          <h4 class="mt-4 mb-2 text-center text-lg font-bold text-neutral-800 lg:text-right">
            آدرس فروشگاه
          </h4>
          <p class="text-center text-neutral-800 lg:text-right">
            {{ footer?.address }}
          </p>
          <!-- Trust Badges -->

        </div>
      </div>
      <UContainer>
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-8">
          <div
            class="col-span-1 grid grid-cols-1 gap-8 text-right sm:grid-cols-2 md:col-span-2 lg:col-span-5 lg:grid-cols-4">
            <div v-for="section in footer?.cols" :key="section.title">
              <h3 class="mb-4 text-xl font-bold text-neutral-800 lg:text-2xl">
                {{ section.title }}
              </h3>
              <ul class="space-y-4 lg:space-y-8">
                <li v-for="link in section.links" :key="link.link?.url">
                  <NuxtLink v-if="link.name && link.link?.url" :external="link.link?.is_external" :to="link.link?.url"
                    class="text-neutral-800 hover:text-purple-600">
                    {{ link.name }}
                  </NuxtLink>
                  <span v-else-if="link.name" class="text-neutral-800">
                    {{ link.name }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-span-1 md:col-span-2 lg:col-span-3 hidden sm:block">
            <div class="flex items-center justify-center">
              <img src="../public/logo.svg" alt="logo" class="w-16 md:w-auto" />
              <div>
                <p class="text-primary text-2xl font-bold md:text-4xl">محمد</p>
                <span>الکترونیک</span>
              </div>
            </div>
            <div class="">
              <h4 class="mt-4 mb-2 text-center text-lg font-bold text-neutral-800 lg:text-right">
                آدرس فروشگاه
              </h4>
              <p class="text-center text-neutral-800 lg:text-right">
                {{ footer?.address }}
              </p>
              <!-- Trust Badges -->
              <div class="mt-8 flex items-center justify-center space-x-4 rtl:space-x-reverse">
                <div v-for="badge in footer?.logoes" :key="badge.name" class="rounded-lg bg-gray-100 p-2">
                  <NuxtLink v-if="badge.link?.url" :to="badge.link.url" :external="badge.link.is_external">
                    <img v-if="badge.img" :src="badge.img" :alt="badge.name" class="h-8 w-auto" />
                    <span v-else class="text-xs text-gray-600">{{
                      badge.name
                    }}</span>
                  </NuxtLink>
                  <div v-else>
                    <img v-if="badge.img" :src="badge.img" :alt="badge.name" class="h-8 w-auto" />
                    <span v-else class="text-xs text-gray-600">{{
                      badge.name
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>
    <div class="sm:hidden mt-8 flex items-center justify-center space-x-8 rtl:space-x-reverse">
      <div v-for="badge in footer?.logoes" :key="badge.name" class="rounded-lg bg-gray-100 p-2">
        <NuxtLink v-if="badge.link?.url" :to="badge.link.url" :external="badge.link.is_external">
          <img v-if="badge.img" :src="badge.img" :alt="badge.name" class="h-8 w-auto" />
          <span v-else class="text-xs text-gray-600">{{
            badge.name
          }}</span>
        </NuxtLink>
        <div v-else>
          <img v-if="badge.img" :src="badge.img" :alt="badge.name" class="h-8 w-auto" />
          <span v-else class="text-xs text-gray-600">{{
            badge.name
          }}</span>
        </div>
      </div>
    </div>
    <!-- Copyright -->
    <div class="bg-primary-800 py-4 text-center">
      <p class="text-sm text-gray-300 md:text-base">
        تمامی حقوق محفوظ و متعلق به این سایت محفوظ می‌باشد ©
        {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Send, Twitter, XIcon, Youtube } from 'lucide-vue-next'
import settingsApi from '~/api/settings-api'

// Reactive email state for newsletter subscription
const email = ref('')

// Fetch footer data from API
const { data: footer } = await useAsyncData('footer', async () => {
  const footer = await settingsApi.getFooter()
  return {
    ...footer,
    social_links: footer.social_links?.map((link) => ({
      ...link,
      img:
        link.name.toLowerCase() === 'instagram'
          ? 'Instagram'
          : link.name.toLowerCase() === 'telegram'
            ? 'Send'
            : link.name.toLowerCase() === 'twitter'
              ? 'Twitter'
              : link.name.toLowerCase() === 'x'
                ? 'XIcon'
                : link.name.toLowerCase() === 'facebook'
                  ? 'Facebook'
                  : link.name.toLowerCase() === 'youtube'
                    ? 'Youtube'
                    : null,
    })),
  }
})

// Newsletter subscription handler
const subscribeNewsletter = () => {
  // Handle newsletter subscription logic here
  console.log('Subscribing email:', email.value)
  // Reset the form
  email.value = ''
}

// Helper function to get social media icons
const getSocialIcon = (social) => {
  const iconMap = {
    Instagram,
    Send,
    Twitter,
    XIcon,
    Facebook,
    Youtube,
  }
  return iconMap[social.img] || Instagram
}
</script>
