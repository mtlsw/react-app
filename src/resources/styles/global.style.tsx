import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
div {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: Roboto, Arial, sans-serif;
  font-size: 16px;
  min-width: 20rem;
}

#root {
  width: 100%;
  min-height: 100%;
  color: ${({ theme }) => theme.color_text};
  background-color: ${({ theme }) => theme.color_background};
}

* {
  -webkit-tap-highlight-color: transparents;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

}

a:-webkit-any-link {
  color: transparent;
}
`
