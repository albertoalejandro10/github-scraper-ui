<template>
  <div class="min-h-screen">
    <LoaderComponent v-if="!profile && !followback" />
    <!-- Hero Section -->
    <div v-else class="flex flex-col items-center justify-center h-screen">
      <ProfileComponent :profile="profile" />
      <DividerComponent class="mt-2" />
      <GridComponent :followback="followback" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
useHead({
  title: 'GitHub Profile ' + route.params.username,
  meta: [
    { name: 'Scraped Github Profile', content: 'Scraped Github Profile' },
  ],
})

const profile = ref(null)
const followback = ref(null)
onMounted(() => {
  // Retrieve the data from localStorage
  const storedData = localStorage.getItem('fetchData')

  if (!storedData) {
    console.error('No user data found in localStorage')
    // Handle the case where there is no data in localStorage
    return navigateTo({ path: '/' })
  }

  const { data, success } = JSON.parse(storedData)
  if (!success) return navigateTo({ path: '/' })

  const { profile: profileData, followback: followbackData } = data

  profile.value = profileData
  followback.value = followbackData
})
</script>