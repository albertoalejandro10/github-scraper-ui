<template>
  <div class="flex flex-wrap justify-center lg:justify-start gap-4 mb-2">
    <div>
      <h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Badges</h2>
      <div class="flex flex-wrap justify-center lg:justify-start gap-x-1">
        <NuxtImg
          v-for="badge in profile.badges"
          :key="badge"
          :src="getBadge(badge)"
          :alt="badge"
          class="w-8 h-8 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      </div>
    </div>
    <div>
      <h2 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Networks</h2>
      <div class="flex flex-wrap justify-center lg:justify-start gap-x-1">
        <LinkComponent 
          v-for="network in profile.socialNetworks" 
          :key="network" 
          :link="network" 
          :text="getIconNetwork(network)" 
          :icon="true" 
        />
      </div>
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