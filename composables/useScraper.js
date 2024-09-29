export const useFetchData = () => {
  const config = useRuntimeConfig()

  const data = ref(null)
  const error = ref(null)

  const pollData = async (username, interval = 5000, timeout = 30000) => {
    const start = Date.now()

    const checkStatus = async () => {
      const url = config.public.environment === 'development' ? 'http://localhost:2998/scrape' : 'https://github-scraper-production.up.railway.app/scrape'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      })

      if (response.ok) {
        const result = await response.json()
        return result
      } else if (Date.now() - start >= timeout) {
        throw new Error('Timeout exceeded. Try again.')
      } else {
        await new Promise(resolve => setTimeout(resolve, interval))
        return checkStatus()
      }
    }

    return checkStatus()
  }

  const fetchData = async (username) => {
    error.value = null

    try {
      // Use the polling function to handle long response times
      const result = await pollData(username)
      data.value = result

    } catch (err) {
      console.error('Error fetching data:', err)
      error.value = err
    } finally {
      error.value = null
    }
  }

  return { data, error, fetchData }
}
