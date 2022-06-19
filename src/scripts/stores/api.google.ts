import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const apiGoogle = createApi({
  reducerPath: 'apiGoogle',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/oauth2',
    prepareHeaders: (headers, { getState }) => {
      if (Cookies.get('access_token')) {
        headers.set('Authorization', `Bearer ${Cookies.get('access_token')}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<IGoogleUserInfoProfile, void>({
      query: () => `/v2/userinfo`,
    }),
  }),
})

export const { useLazyGetUserInfoQuery } = apiGoogle
