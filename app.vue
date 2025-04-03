<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
useHead({
  title: 'Mamad Electronic Shop',
  meta: [
    { name: 'description', content: 'Your premier electronics shop' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" },
  ]
})
</script>

<template>
  <div data-theme="light" class="h-screen">
    <Header/>
    <NuxtPage />
    <Footer/>
  </div>
</template>