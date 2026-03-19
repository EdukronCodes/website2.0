// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['./assets/css/globals.css'],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    inlineConfig: {
      theme: {
        extend: {
          colors: {
            primary: '#2563eb',
            secondary: '#1e40af',
            accent: '#f59e0b',
          },
          backdropBlur: {
            'xs': '2px',
          },
        },
      },
    },
  },
  app: {
    head: {
      title: 'Edukron Learning Platform - Data Science, AI & MLOps',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Comprehensive learning platform for Data Science, AI, ML, Gen AI, and more' },
      ],
    },
  },
})
