<template>
  <footer class="text-white">
    <!-- Social Media Bar -->
    <div class="bg-[#1F032F]">
      <UContainer class="mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div class="flex flex-col items-center gap-2 w-full md:w-auto">
          <p class="text-white w-full md:w-[400px] text-center">برای دریافت آخرین اخبار و تخفیف های جدید، ایمیل خود را
            وارد نمایید</p>
          <form class="flex gap-2 items-center w-full md:w-auto" @submit.prevent="subscribeNewsletter">
            <input v-model="email" type="email" placeholder="ایمیل شما"
              class="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none w-full md:w-96" />
            <button type="submit"
              class="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md transition duration-300 whitespace-nowrap">
              ثبت
            </button>
          </form>
        </div>

        <div class="flex flex-col items-center space-x-2 rtl:space-x-reverse">
          <h3 class="text-white mb-2">شبکه های اجتماعی</h3>
          <div class="flex space-x-2 rtl:space-x-reverse">
            <NuxtLink v-for="social in socialLinks" :key="social.url" :to="social.url"
              class="bg-gray-700 p-2 rounded-md hover:bg-gray-600">
              <component :is="social.icon" class="size-5 text-white" />
            </NuxtLink>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Main Footer Content -->
    <div class="bg-white text-gray-800 flex items-center justify-center min-h-[400px]">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 items-start gap-8">
          <!-- Services Column -->
          <div
            class="col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            <div v-for="section in footerSections" :key="section.title">
              <h3 class="text-xl lg:text-2xl font-bold mb-4 text-neutral-800">{{ section.title }}</h3>
              <ul class="space-y-4 lg:space-y-8">
                <li v-for="link in section.links" :key="link.url">
                  <NuxtLink external :to="link.url" class="text-neutral-800 hover:text-purple-600">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!-- Support Column -->
            <div>
              <h3 class="text-xl lg:text-2xl font-bold mb-4 text-neutral-800">پشتیبانی</h3>
              <p class="text-neutral-800 mb-4 lg:mb-8">شنبه تا پنجشنبه ۹ الی ۱۸:۳۰</p>
              <div v-for="contact in contactInfo" :key="contact.value" class="mb-4 lg:mb-8">
                <a :href="contact.href"
                  class="text-neutral-800 hover:text-purple-600 flex items-center justify-center gap-2">
                  <Icon :name="contact.icon" class="text-purple-600" />
                  <span class="text-sm lg:text-base">{{ contact.value }}</span>
                </a>
              </div>
            </div>
          </div>

          <div class="col-span-1 md:col-span-2 lg:col-span-3">
            <div class="flex items-center justify-center">
              <img src="../public/logo.svg" alt="logo" class="w-16 md:w-auto" />
              <div>
                <p class="text-primary font-bold text-2xl md:text-4xl">محمد</p>
                <span>الکترونیک</span>
              </div>
            </div>
            <div class="">
              <h4 class="text-lg font-bold mt-4 mb-2 text-neutral-800 text-center lg:text-right">آدرس فروشگاه</h4>
              <p class="text-neutral-800 text-center lg:text-right">
                اصفهان، خیابان هاتف، بازار بزرگ، پاساژ صنف الکترونیک، مجتمع الکترونیک
              </p>
              <!-- Trust Badges -->
              <div class="flex justify-center items-center mt-8 space-x-4 rtl:space-x-reverse">
                <div v-for="badge in trustBadges" :key="badge.alt" class="bg-gray-100 p-2 rounded-lg">
                  <img :src="badge.src" :alt="badge.alt" class="h-8 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- Copyright -->
    <div class="bg-primary-800 py-4 text-center">
      <p class="text-gray-300 text-sm md:text-base">
        تمامی حقوق محفوظ و متعلق به این سایت محفوظ می‌باشد © {{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Instagram, Send, Twitter } from "lucide-vue-next";

const email = ref('');

const socialLinks = [
  { url: 'https://twitter.com', icon: Twitter },
  { url: 'https://instagram.com', icon: Instagram },
  { url: 'https://telegram.org', icon: Send }
];

const footerSections = [
  {
    title: 'خدمات',
    links: [
      { url: '/services/price', text: 'قیمت آی سی' },
      { url: '/services/selection', text: 'انتخاب هوشمند آی سی' },
      { url: '/services/selection', text: 'انتخاب هوشمند آی سی' },
      { url: '/services/selection', text: 'انتخاب هوشمند آی سی' }
    ]
  },
  {
    title: 'خرید آی سی',
    links: [
      { url: '/ic/price', text: 'قیمت آی سی' },
      { url: '/ic/price', text: 'قیمت آی سی' },
      { url: '/ic/warranty', text: 'گارانتی' },
      { url: '/ic/installment', text: 'خرید اقساطی' }
    ]
  },
  {
    title: 'فروشگاه اینترنتی',
    links: [
      { url: '/about', text: 'درباره ما' },
      { url: '/contact', text: 'تماس با ما' },
      { url: '/terms', text: 'شرایط و قوانین' },
      { url: '/comments', text: 'نظرات کاربران' }
    ]
  }
];

const contactInfo = [
  {
    href: 'mailto:Merqc.Shop@Gmail.Com',
    icon: 'lucide:mail',
    value: 'Merqc.Shop@Gmail.Com'
  },
  {
    href: 'tel:+989123456789',
    icon: 'lucide:phone',
    value: 'تلفن امور مشتریان: ۰۹۱۲۳۴۵۶۷۸۹'
  }
];

const trustBadges = [
  { src: '', alt: 'E-Namad' },
  { src: '', alt: 'Samandehi' },
  { src: '', alt: 'Electronic Union' }
];

const subscribeNewsletter = () => {
  // Handle newsletter subscription logic here
  console.log('Subscribing email:', email.value);
  // Reset the form
  email.value = '';
}
</script>