import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { TypedUseSelectorHook, useSelector } from "react-redux"
import rootReducer from "./rootReducer"
import {
  localStorageMiddleware,
  loadFromLocalStorage,
} from "./features/localstorage/localStorageMiddleware"

const preloadedState = loadFromLocalStorage();


const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
