<template>
  <UModal>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800', rounded:'rounded' }" class="leading-relaxed">
      <template #header>
        Limitation Notice
      </template>

      <template #default>
        Due to a scraping limit, only the first 500 followers and following users can be displayed. If your account exceeds this, not all users will be shown.
        <br />
        
        If you'd like to scrape your profile yourself, the code is available on <LinkComponent text="GitHub Scraper API" link="https://github.com/albertoalejandro10/github-scraper-api" />. It's ready to use — just install the dependencies and run the script.
      </template>
    </UCard>
  </UModal>
</template>