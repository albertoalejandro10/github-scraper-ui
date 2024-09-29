<template>
  <ClientOnly>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="primary"
      variant="ghost"
      aria-label="Theme"
      class="hover:bg-primary-100 absolute right-2 top-2"
      @click="isDark = !isDark"
    />
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>