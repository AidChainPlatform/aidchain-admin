export default defineNuxtConfig({
  ssr: false,

  css: [
    "sweetalert2/src/sweetalert2.scss",
    "~/assets/styles/tailwind.scss",
    "~/assets/styles/global.scss",
    "~/assets/styles/fonts.scss"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@element-plus/nuxt" // ✅ fixed this line
  ],

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]]
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
  },

  compatibilityDate: "2025-04-14"
});