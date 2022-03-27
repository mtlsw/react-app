import { ThemeProvider } from 'styled-components'
import { Provider as StoreProvider } from 'react-redux'
import theme from '../src/resources/styles/theme'
import { MemoryRouter } from 'react-router-dom'
import GlobalStyle from '../src/resources/styles/global.style'
import Store from '../src/scripts/stores'
import { addDecorator } from '@storybook/react'
import Extend from '../src/scripts/extends'

Extend()

const withThemeAndRouter = (Story, context) => {
  return (
    <MemoryRouter>
      <StoreProvider store={Store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story {...context} />
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    value: [{ name: 'dark', value: '#000000' }],
    value: [{ name: 'light', value: '#FFFFFF' }],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fuulscreen',
}

addDecorator(withThemeAndRouter)
