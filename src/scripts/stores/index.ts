import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'
import { api } from './api'

const store = () => {
  const sagaMiddleware = createSagaMiddleware()
  const initStore = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware).concat(sagaMiddleware),
  })

  sagaMiddleware.run(rootSaga)
  return initStore
}

export default store()
