<template>
  <div class="w-full relative bg-gray-100 dark:bg-gray-900 shadow rounded overflow-hidden">
    <div class="py-3 px-6">
      <div class="flex flex-col lg:flex-row items-center lg:items-start">
        <NuxtImg
          :src="getAvatar(profile.avatarUrl)" 
          :alt="getAvatarAlt(profile.username)"
          class="w-32 h-32 rounded-full shadow-md object-cover self-center lg:mb-0 lg:mr-6"
        />
        <div class="flex-1 text-center lg:text-left">
          <ProfileUserComponent :profile="profile" />
          <ProfileInformationComponent :profile="profile" />
          <ProfileBadgesComponent :profile="profile" />
        </div>
        <ProfileFollowComponent :profile="profile" />
      </div>
    </div>
    <DarkModeComponent />
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