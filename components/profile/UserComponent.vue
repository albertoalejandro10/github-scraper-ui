<template>
  <div class="flex items-center justify-center lg:justify-start mb-1">
    <h1 class="text-xl font-bold mr-2 text-gray-900 dark:text-white">
      {{ profile.name }} <span class="text-sm font-light text-gray-700 dark:text-gray-300 mb-2">{{ profile.username }}</span>
    </h1>
    <UTooltip text="View GitHub Profile">
      <UButton
        icon="i-mdi-github"
        color="gray"
        variant="ghost"
        class="w-8 h-8 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
        @click="redirectGithub(profile.username)"
      />
    </UTooltip>
  </div>
  <p class="text-gray-700 dark:text-gray-300 mb-2">{{ profile.bio }}</p>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  }
})
</script>