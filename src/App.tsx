import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Style from './App.style'
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

export default App
