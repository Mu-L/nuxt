export default defineNuxtConfig({
  devtools: { enabled: false },
  spaLoadingTemplate: true,
  routeRules: {
    '/spa': { ssr: false },
    '/ssr': { ssr: true },
  },
  experimental: {
    spaLoadingTemplateLocation: 'within',
  },
  compatibilityDate: 'latest',
})
