import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { FetchArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import Cookies from 'js-cookie'

const staggeredBaseQueryWithBailOut = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: 'https://mushroom-acrikjqlsa-du.a.run.app/api/',
      credentials: 'include',
      prepareHeaders: (headers, { getState }) => {
        headers.set('content-type', 'application/json;charset=UTF-8')

        if (Cookies.get('access_token')) {
          headers.set('Authorization', `Bearer ${Cookies.get('access_token')}`)
        }
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
    getSurveys: builder.query<IGetSurveysResponse, IGetSurveysRequest>({
      query: () => `/surveys/`,
    }),
    getSurvey: builder.query<IGetSurveyResponse, IGetSurveyRequest>({
      query: (param) => `/surveys/${param.id}`,
    }),
    getComments: builder.query<IGetCommentsResponse, IGetCommentsRequest>({
      query: (param) => `/surveys/${param.id}/comments`,
    }),
    getNestedComments: builder.query<IGetNestedCommentsResponse, IGetNestedCommentsRequest>({
      query: (param) => `/surveys/${param.id}/comments/${param.commentId}`,
    }),

    postLogin: builder.mutation<IPostUserResponse, void>({
      query: () => ({
        url: `/surveys/user`,
        method: 'POST',
      }),
      extraOptions: {
        maxRetries: 1,
      },
    }),
  }),
})

export const {
  useGetSurveysQuery,
  useGetSurveyQuery,
  useGetCommentsQuery,
  useGetNestedCommentsQuery,
  usePostLoginMutation,
} = api
