<template>
  <div>
    <UForm :validate="validate" :state="state" class="space-y-2" @submit="onSubmit" @error="onError">
      <UFormGroup name="username" class="space-y-2">
        <UInput v-model="state.username" placeholder="GitHub Username" type="text" icon="material-symbols:search" :ui="{ rounded: 'rounded-none rounded-t-lg' }" :trailing="true" required />
      </UFormGroup>
  
      <FormButtonComponent type="submit" :is-loading="isLoading" />
    </UForm>
  
    <p v-if="errorFetching" class="text-red-500 text-center mt-2">
      {{ errorFetching }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const isLoading = ref(false)
const errorFetching = ref<string | null>(null)

const state = reactive({
  username: undefined as string | undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  
  if (!state.username) {
    errors.push({ path: 'username', message: 'Username is required.' })
  } else if (!validateGitHubUsername(state.username)) {
    errors.push({ path: 'username', message: 'Invalid GitHub username. Please try again.' })
  }
  
  return errors
}

// GitHub username validation regex
const validateGitHubUsername = (username: string) => {
  const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){2,38}$/i
  return githubUsernameRegex.test(username)
}

const onError = async (event: FormErrorEvent) => {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const onSubmit = async (event: FormSubmitEvent<any>) => {
  const { username } = event.data
  
  isLoading.value = true
  errorFetching.value = null

  try {
    const { data, error, fetchData } = useFetchData()
    await fetchData(username)

    if (error.value) return errorFetching.value = error.value

    localStorage.setItem('fetchData', JSON.stringify(data.value))
    await navigateTo({ path: `/${username}` })
    
  } catch (err) {
    console.error('An error occurred:', err)
  } finally {
    isLoading.value = false
  }
}
</script>