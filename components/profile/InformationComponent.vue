<template>
  <div class="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
    <div v-if="profile.location" class="flex items-center">
      <UIcon name="i-ph-map-pin" class="mr-1" />
      <span>{{ profile.location }}</span>
    </div>
    <div v-if="profile.website" class="flex items-center">
      <UIcon name="i-ph-link" class="mr-1" />
      <a :href="profile.website" class="text-primary-600 dark:text-primary-400 hover:underline">
        {{ profile.website }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  }
})
</script>