const networkIcons = {
  linkedin: "mdi:linkedin",
  hackerrank: "cib:hackerrank",
  telegram: "ic:baseline-telegram"
}

export const getIconNetwork = (network) => {
  if (network.includes('www')) network = network.replace('www.', '')
  const domain = network.split('/')[2].split('.')[0]
  
  switch(domain) {
    case 'linkedin':
      return networkIcons.linkedin
    case 'hackerrank':
      return networkIcons.hackerrank
    case 't':
      return networkIcons.telegram
    default:
      return 'mdi:web'
  }
}