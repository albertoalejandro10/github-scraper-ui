export default defineNuxtPlugin(nuxtApp => {
  if (!nuxtApp.ssrContext) { // This checks if we are on the client-side
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('fetch-data')
    })
  }
})