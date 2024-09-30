export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp()

  // Ensure we are on the client-side
  if (!nuxtApp.ssrContext) {
    const fetchData = localStorage.getItem('fetch-data')

    // If `fetch-data` is missing, redirect to another page (e.g., home page)
    if (!fetchData) {
      return navigateTo('/')
    }
  }
})