import React, { useEffect } from 'react'
import QueryString from 'query-string'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'scripts/stores/reducers'
import { SET_TOKEN, SET_USER_PROFILE } from 'scripts/stores/auth'
import { useLazyGetUserInfoQuery } from 'scripts/stores/api.google'
import { usePostLoginMutation } from 'scripts/stores/api'

interface IAuthenticationContainerProps {
  children?: React.ReactNode
}

export default function AuthenticationContainer(props: IAuthenticationContainerProps) {
  const { children } = props

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { token: STORE_TOKEN } = useAppSelector((rootStore) => rootStore.auth)

  const [postUser, result] = usePostLoginMutation()

  const [triggerGetUserInfo, { isLoading: isLoadingUserInfo, data: dataUserInfo }] =
    useLazyGetUserInfoQuery()

  useEffect(() => {
    console.log('isLoadingUserInfo', isLoadingUserInfo)
  }, [isLoadingUserInfo])

  useEffect(() => {
    console.log('dataUserInfo', dataUserInfo)
  }, [dataUserInfo])

  /**
   * hash 에서 구글 oAuth 정보 있는지 확인 후 쿠키 & state에 추가
   */
  useEffect(() => {
    if (window.location.hash.length > 0) {
      console.log('parse hash')
      const parsedHash = QueryString.parse(window.location.hash, {
        parseNumbers: true,
      }) as unknown as IGoogleOAuth

      if (parsedHash.state) {
        const parsedState = QueryString.parse(parsedHash.state) as unknown as IGoogleOauthState
        if ((parsedState.type as string) === 'google') {
          if (parsedHash.access_token && parsedHash.expires_in) {
            const expire = new Date()
            expire.setSeconds(expire.getSeconds() + parsedHash.expires_in)

            Cookies.set('token_type', 'google', {
              expires: expire,
            })
            console.log('cookie set type')
            Cookies.set('access_token', parsedHash.access_token, {
              expires: expire,
            })
            console.log('set token parse')
            dispatch(SET_TOKEN(parsedHash.access_token))
          }

          if (parsedState.surveyId) {
            const targetPath = `${parsedState.surveyId as string}${
              parsedState.commentId ? `?commentId=${parsedState.commentId}` : ''
            }`
            navigate(targetPath, { replace: true })
          }
        }
      }
    } else {
      console.log('pass hash - get from cookie')
      const cookieToken = Cookies.get('access_token')
      dispatch(SET_TOKEN(cookieToken))
    }

    postUser()
  }, [dispatch, navigate, postUser])

  /**
   * token state 가 변경 되었을 때 사용자 데이터 API 호출
   */
  useEffect(() => {
    if (!STORE_TOKEN) {
      dispatch(SET_USER_PROFILE(undefined))
      return
    }

    triggerGetUserInfo()
  }, [dispatch, STORE_TOKEN, triggerGetUserInfo])

  useEffect(() => {
    dispatch(SET_USER_PROFILE(dataUserInfo))
  }, [dispatch, dataUserInfo])

  return <>{children}</>
}
