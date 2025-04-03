<script setup>
useHead({
  title: 'Mamad Electronic Shop',
  meta: [
    { name: 'description', content: 'Your premier electronics shop' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <div data-theme="light" class="h-screen">
    <NuxtPage />
  </div>
</template>