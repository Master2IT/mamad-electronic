import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server',
    compressPublicAssets: true, // Compress assets for better performance
    publicAssets: [{ dir: './public' }],
    routeRules: {
      '/**': { swr: process.env.NODE_ENV === 'development' ? false : 600 }, // Disable cache in dev, 10 minutes in prod
      '/api/**': { swr: false }, // Don't cache API routes
      '/static/**': { swr: process.env.NODE_ENV === 'development' ? false : 60 * 60 * 24 * 7 } // Disable cache in dev, cache static assets for a week in prod
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    'nuxt-swiper',
    'nuxt-rating',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/seo', // Added for better SEO
    '@nuxtjs/robots', // Added for robots.txt handling
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Merqc' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  runtimeConfig: {
    // Keys within public are exposed to the client
    public: {
      apiBase: '/api',
    },
    // Server-only keys
    apiSecret: process.env.API_SECRET || 'default_secret',
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-27',
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            // ui: ['@nuxt/ui'],
          },
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/app.css'],
  ui: {
    colorMode: false,
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'],
    },
  },
  experimental: {
    payloadExtraction: true, // Optimizes initial page load
    renderJsonPayloads: true, // Improves performance
    viewTransition: true, // Better page transitions
    componentIslands: true, // Enables component islands
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth', // Smooth scrolling
    }
  },
  image: {
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
    }
  },
})
