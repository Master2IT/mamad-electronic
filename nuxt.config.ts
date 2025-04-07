import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    // "vue3-carousel-nuxt",
  ],

  devtools: { enabled: true },
  compatibilityDate: "2024-11-27",
  vite: {
    plugins: [tailwindcss()],
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/app.css"],
  ui: {
    colorMode: true,
    theme: {
      colors: [
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
        "neutral",
      ],
    },
  },
});
