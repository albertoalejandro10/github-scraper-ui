<template>
  <UTabs :items="items" class="w-full mt-2">
    <template #icon="{ item, selected }">
      <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0 me-2" :class="[selected && 'text-primary-500 dark:text-primary-400']" />
    </template>

    <template #dont-follow-you>
      <FollowbackComponent :user-data="followback.dontFollowYou" />
    </template>

    <template #you-dont-follow>
      <FollowbackComponent :user-data="followback.youDontFollow" />
    </template>
  </UTabs>
</template>

<script setup>
defineProps({
  followback: {
    type: Object,
    required: true,
  }
})

const items = [{
  slot: 'dont-follow-you',
  label: "Don't follow you back",
  icon: 'mdi:information',
}, {
  slot: 'you-dont-follow',
  label: "You don't follow back",
  icon: 'mdi:information-outline',
}]
</script>