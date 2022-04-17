import { AppTheme } from 'scripts/@types/theme'
import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  color_primary: '#5E9ACD',
  color_background: '#1E1E1E',
  color_background_light: '#333333',
  color_card_background: '#282828',
  color_card_background_hover: '#333333',
  color_card_border: '#282828',
  color_card_border_hover: '#444444',
  color_text: '#FFFFFF',

  color_text_dark: '#999999',
}

const darkTheme: DefaultTheme = {
  color_primary: '#5E9ACD',
  color_background: '#1E1E1E',
  color_background_light: '#333333',
  color_card_background: '#282828',
  color_card_background_hover: '#333333',
  color_card_border: '#282828',
  color_card_border_hover: '#444444',
  color_text: '#FFFFFF',
  color_text_dark: '#999999',
}

const theme: AppTheme = {
  light: lightTheme,
  dark: darkTheme,
}

Object.seal(theme)

export default theme
