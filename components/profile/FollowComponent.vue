<template>
  <div class="mt-4 lg:mt-0 flex lg:flex-col items-center lg:self-center gap-4 lg:gap-2">
    <div class="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
      <UIcon name="i-ph-users" class="mr-2 text-gray-700 dark:text-gray-300" />
      <span class="font-semibold text-gray-800 dark:text-gray-100 mr-1">{{ profile.followers }}</span>
      <span class="text-gray-700 dark:text-gray-300">Followers</span>
    </div>
    <div class="flex items-center bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
      <UIcon name="i-ph-user-circle" class="mr-2 text-gray-700 dark:text-gray-300" />
      <span class="font-semibold text-gray-800 dark:text-gray-100 mr-1">{{ profile.following }}</span>
      <span class="text-gray-700 dark:text-gray-300">Following</span>
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