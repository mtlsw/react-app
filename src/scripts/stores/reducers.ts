import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import reduxStore from '.'

import app from './app'
import auth from './auth'
import toast from './toast'
import { api } from './api'
import { apiGoogle } from './api.google'

const rootReducer = combineReducers({
  app,
  auth,
  toast,
  [api.reducerPath]: api.reducer,
  [apiGoogle.reducerPath]: apiGoogle.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof reduxStore.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default rootReducer
