import { useCallback, useMemo } from 'react'
import { useAppDispatch } from 'scripts/stores/reducers'
import Cookies from 'js-cookie'
import { SET_TOKEN } from 'scripts/stores/auth'

const useGoogleOAuth = () => {
  const dispatch = useAppDispatch()

  /**
   * google oAuth 로그인이 필요한 경우 호출
   * google 로그인 페이지로 redirection 후 root 페이지로 되돌아옴
   * surveyId, commentId 가 전달되고 root 페이지에서 처리 해주어야 함
   */
  const login = useCallback((surveyId?: string, commentId?: string) => {
    const target =
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `&scope=https%3A//www.googleapis.com/auth/userinfo.profile` +
      `&include_granted_scopes=true` +
      `&response_type=token` +
      `&state=type%3Dgoogle%26${surveyId ? `surveyId%3D${surveyId}` : ''}${
        commentId ? `%26commentId%3D${commentId}` : ''
      }` +
      `&redirect_uri=${window.location.origin}` +
      `&client_id=${process.env.REACT_APP_CLIENT_ID}`

    window.location.href = target
  }, [])

  /**
   * google oAuth 로그아웃
   */
  const logout = useCallback(async () => {
    const token = Cookies.get('access_token')
    if (token) {
      const response = await fetch(`https://oauth2.googleapis.com/revoke?token=${token}`, {
        method: 'POST', // *GET, POST, PUT, DELETE 등
        // mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      console.log(response)
      if (response.status === 200) {
        Cookies.remove('access_token')
        Cookies.remove('token_type')
        dispatch(SET_TOKEN(undefined))
      }
    }
  }, [dispatch])

  return useMemo(() => {
    return {
      login,
      logout,
      // logoutState: {
      //   isLogoutLoading,
      //   isLogoutSuccess,
      //   isLogoutError,
      // },
    }
  }, [login, logout])
}

export default useGoogleOAuth
