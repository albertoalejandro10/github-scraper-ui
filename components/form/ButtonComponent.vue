<template>
  <UButton v-if="!isLoading" :ui="{ rounded: 'rounded-none rounded-b-lg' }" color="primary" block>
    Scrape Profile
  </UButton>
  <UButton v-else :ui="{ rounded: 'rounded-none rounded-b-lg' }" color="primary" loading-icon="bx-loader-circle" block loading>
    Scraping GitHub Profile...
  </UButton>
</template>

<script setup>
defineProps({
  isLoading: Boolean
})
</script>