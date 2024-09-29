export const redirectGithub = (username) => {
  window.open('https://github.com/' + username, '_blank')
}

export const getBadge = (badge) => {
  return 'https://github.githubassets.com/assets/' + badge
}