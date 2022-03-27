import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppStore {
  initlaized: boolean
}

const initialState: IAppStore = {
  initlaized: false,
}

export default createSlice({
  name: 'app',
  initialState,
  reducers: {
    INITIALIZE(state) {
      state.initlaized = true
    },
  },
})
