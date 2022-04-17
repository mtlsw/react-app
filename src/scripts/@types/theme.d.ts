import 'styled-components'
import { DefaultTheme } from 'styled-components'

interface AppTheme {
  light: DefaultTheme
  dark: DefaultTheme
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color_primary: string
    color_background: string
    color_background_light: string
    color_card_background: string
    color_card_background_hover: string
    color_card_border: string
    color_card_border_hover: string
    color_text: string
    color_text_dark: string
  }
}
