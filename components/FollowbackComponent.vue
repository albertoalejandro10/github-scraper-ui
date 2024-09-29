<template>
  <!-- Grid Section -->
  <div class="container mx-auto py-2">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-if="userData" v-for="user in paginatedUsers" :key="user.username" class="bg-gray-100 dark:bg-neutral-900 rounded shadow p-4 flex items-center h-24 hover:bg-neutral-100 dark:hover:bg-neutral-800 relative">
        <UAvatar :src="getAvatar(user.avatar)" :alt="getAvatarAlt(user.username)" size="2xl" class="mr-4 shadow flex-shrink-0" />
        <div class="overflow-hidden">
          <h3 class="font-semibold truncate">{{ user.name || '' }}</h3>
          <p class="text-gray-600 dark:text-gray-400 truncate">{{ user.username }}</p>
        </div>
        <UTooltip text="View GitHub Profile" class="absolute bottom-1 right-1 sm:bottom-2 sm:right-2" @click="redirectGithub(user.username)">
          <UIcon name="mdi:github" class="w-5 h-5 text-gray-500 hover:text-primary-600 dark:text-gray-600 dark:hover:text-primary-500" />
        </UTooltip>
      </div>
      <!-- Empty slots to maintain grid layout -->
      <div 
        v-for="i in emptySlots" 
        :key="`empty-${i}`" 
        class="bg-transparent h-24"
      ></div>
    </div>

    <!-- Pagination -->
    <div class="mt-4 flex justify-center">
      <UPagination v-model="currentPage" :page-count="1" :total="totalPages" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userData: {
    type: Array,
    required: true,
  }
})

// Pagination
const currentPage = ref(1)
const itemsPerPage = 12

const totalPages = computed(() => Math.ceil(props.userData.length / itemsPerPage))
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return props.userData.slice(start, end)
})

const emptySlots = computed(() => {
  const remainingSlots = itemsPerPage - paginatedUsers.value.length
  return remainingSlots > 0 ? remainingSlots : 0
})
</script>