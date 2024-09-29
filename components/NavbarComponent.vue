<template>
  <header class="bg-black/90">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-4 lg:px-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-center items-center gap-x-4 text-center sm:text-left">
          <RouterLink class="flex items-center gap-x-2" to="/">
            <Icon name="mdi:github" class="h-6 w-6" />
            <h1 class="text-sm font-bold text-gray-200 sm:text-xl">GitHub Scraper</h1>
          </RouterLink>
        </div>
        <div class="mt-4 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center">
          <CreatorWebsiteComponent />
          <CreatorGitHubComponent />
        </div>
      </div>
    </div>
  </header>
</template>