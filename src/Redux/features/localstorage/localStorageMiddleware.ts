export const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (e) {
    console.warn(e)
  }
}

export const localStorageMiddleware =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action)
    saveToLocalStorage(store.getState())
    return result
  }

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}
