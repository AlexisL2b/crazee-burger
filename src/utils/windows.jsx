export const reloadPage = () => {
  location.reload()
}

export const getDeepClone = (state) => {
  return JSON.parse(JSON.stringify(state))
}

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
