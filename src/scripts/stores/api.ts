import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { FetchArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import QueryString from 'query-string'

const staggeredBaseQueryWithBailOut = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: 'https://pokeapi.co/api/v2/',
      credentials: 'include',
      prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json;charset=UTF-8')
        return headers
      },
    })(args, api, extraOptions)

    if (result.error?.status === 401) {
      retry.fail(result.error)
    }

    return result
  },
  {
    maxRetries: 3,
  },
)

export const api = createApi({
  reducerPath: 'api',
  // refetchOnMountOrArgChange: true,
  baseQuery: staggeredBaseQueryWithBailOut,
  endpoints: (builder) => ({
    getPokemon: builder.query<string, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonQuery } = api
