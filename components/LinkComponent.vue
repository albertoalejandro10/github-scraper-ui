<template>
  <ULink
    :to="link"
    active-class="text-primary"
    inactive-class="text-primary-500 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-600"
    type="button"
    target="_blank"
  >
    <span v-if="!icon">{{ text }}</span>
    <UIcon v-else :name="text" class="w-8 h-8 flex-shrink-0 text-gray-700 hover:text-primary-600 dark:text-gray-300 hover:dark:text-primary-500" />
  </ULink>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: Boolean,
    default: false,
  }
})
</script>