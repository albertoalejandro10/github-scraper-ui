<template>
  <div v-if="canRender" class="min-h-screen">
    <LoaderComponent v-if="!profile && !followback" />
    <div v-else class="flex flex-col items-center justify-center h-screen">
      <ProfileComponent :profile="profile" />
      <DividerComponent class="mt-2" />
      <GridComponent :followback="followback" />
    </div>
  </div>
</template>

<script setup>
const canRender = ref(false)

const profile = ref(null)
const followback = ref(null)

onMounted(() => {
  const fetchData = localStorage.getItem('fetch-data')

  if (!fetchData) return navigateTo('/')

  const { data, success } = JSON.parse(fetchData)

  if (!success) return navigateTo('/')

  // If data is valid, populate profile and followback data
  const { profile: profileData, followback: followbackData } = data
  profile.value = profileData
  followback.value = followbackData

  // Allow rendering after data has been successfully fetched
  canRender.value = true
})

definePageMeta({
  middleware: 'check-data',
})

// Meta information for the page
const route = useRoute()
useHead({
  title: 'GitHub Profile ' + route.params.username,
  meta: [
    { name: 'GitHub Scraper', content: 'GitHub Scraper Profile' },
  ],
})
</script>
