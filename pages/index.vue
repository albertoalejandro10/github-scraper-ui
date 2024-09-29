<template>
  <div class="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <UCard :ui="{ rounded: 'rounded', shadow: 'shadow shadow-gray-200 dark:shadow-gray-500', background: 'bg-gray-100 dark:bg-gray-800',}" class="w-full relative max-w-md">
      <div class="flex flex-col gap-4 items-center justify-center">
        <Icon name="mdi:github" class="h-12 w-12 sm:h-16 sm:w-16 text-gray-900 dark:text-gray-200" />
        <h2 class="text-center text-sm sm:text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-gray-200">
          Enter your GitHub Username
        </h2>
        <FormComponent class="w-full" />
      </div>

      <DarkModeComponent />
      <UTooltip text="Information App" class="absolute left-2 top-2">
        <UButton
          class="hover:bg-primary-100"
          icon="lucide:info"
          color="primary"
          variant="ghost"
          aria-label="Theme"
          @click="isOpen = true"
        />
      </UTooltip>
    </UCard>
    <ModelComponent v-model="isOpen" />
  </div>
</template>

<script setup>
useHead({
  title: 'Scraper Github Profile',
  meta: [
    { name: 'description', content: 'GitHub Scraper' },
  ],
})

const isOpen = ref(false)
</script>