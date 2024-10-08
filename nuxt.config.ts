// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  compatibilityDate: "2024-09-16",
  runtimeConfig: {
    public: {
      environment: process.env.NUXT_PUBLIC_ENVIRONMENT
    }
  },
  colorMode: {
    preference: 'dark'
  },
})