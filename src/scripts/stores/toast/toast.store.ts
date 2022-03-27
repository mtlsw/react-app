import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash'

interface IToastStore {
  isShow: boolean
  currentToast: string | undefined
  toasts: string[]
}

const initialState: IToastStore = {
  isShow: false,
  currentToast: undefined,
  toasts: [],
}

export default createSlice({
  name: 'toast',
  initialState,
  reducers: {
    TOAST_ADD(state, { payload }: PayloadAction<string>) {
      if (state.toasts.length === 0) {
        state.currentToast = payload
        state.isShow = true
      }
      state.toasts.push(payload)
    },
    _TOAST_SHIFT_ARRAY(state) {
      const temp = cloneDeep(state.toasts)
      temp.shift()
      state.isShow = false
      state.toasts = temp
    },
    _TOAST_SET_NEXT(state) {
      if (state.toasts.length > 0) {
        state.isShow = true
        state.currentToast = state.toasts[0]
      }
    },
  },
})
