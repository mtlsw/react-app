import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Style from './App.style'
import theme from 'resources/styles/theme'
import GlobalStyle from './resources/styles/global.style'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import HomePage from 'scripts/pages/HomePage'
import ToastContainer from 'scripts/containers/Toast'
import { useAppDispatch } from 'scripts/stores/reducers'
import { INITIALIZE } from 'scripts/stores/app'

function App() {
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(INITIALIZE())
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Style.App>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </Style.App>

      {/* Global containers */}
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
