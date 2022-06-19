import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { api } from './api'
import { apiGoogle } from './api.google'

const store = () => {
  const initStore = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware, apiGoogle.middleware),
  })

  return initStore
}

export default store()
