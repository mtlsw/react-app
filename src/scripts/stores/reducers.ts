import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import reduxStore from '.'

import app from './app'
import { api } from './api'

const rootReducer = combineReducers({
  app,
  [api.reducerPath]: api.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof reduxStore.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default rootReducer
