import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAuthStore {
  token?: string
  userProfile?: IGoogleUserInfoProfile
}

const initialState: IAuthStore = {}

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_TOKEN(state, { payload }: PayloadAction<string | undefined>) {
      state.token = payload
    },
    SET_USER_PROFILE(state, { payload }: PayloadAction<IGoogleUserInfoProfile | undefined>) {
      state.userProfile = payload
    },
  },
})
