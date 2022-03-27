import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Style from './App.style'
import theme from 'resources/styles/theme'
import GlobalStyle from './resources/styles/global.style'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import HomePage from 'scripts/pages/HomePage'

function App() {
  const location = useLocation()

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
    </ThemeProvider>
  )
}

export default App
