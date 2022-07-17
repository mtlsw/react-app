import React, { useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'resources/styles/theme'
import GlobalStyle from './resources/styles/global.style'
import { Routes, Route, useLocation } from 'react-router-dom'
import AuthenticationContainer from 'scripts/containers/Authentication'
import HeaderContainer from 'scripts/containers/Header'
import LayoutContainer from 'scripts/containers/Layout'
import HomePage from 'scripts/pages/HomePage'
import DetailPage from 'scripts/pages/DetailPage'
import ToastContainer from 'scripts/containers/Toast'
import useGoogleOAuth from 'scripts/hooks/useGoogleOAuth'
import { useAppDispatch } from 'scripts/stores/reducers'
import { INITIALIZE } from 'scripts/stores/app'

function App() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  useGoogleOAuth()

  useEffect(() => {
    dispatch(INITIALIZE())
  }, [dispatch])

  useEffect(() => {
    console.log(location.pathname)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ThemeProvider theme={theme.dark}>
      <GlobalStyle />
      <AuthenticationContainer>
        <Style.App>
          <LayoutContainer>
            <HeaderContainer />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path=":id" element={<DetailPage />} />
            </Routes>
          </LayoutContainer>
        </Style.App>
      </AuthenticationContainer>

      {/* Global containers */}
      <ToastContainer />
    </ThemeProvider>
  )
}

const Style = {
  App: styled.div``,
}

export default App
