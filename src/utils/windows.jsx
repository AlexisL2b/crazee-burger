export const reloadPage = () => {
  location.reload()
}

export const getDeepClone = (state) => {
  return JSON.parse(JSON.stringify(state))
}
