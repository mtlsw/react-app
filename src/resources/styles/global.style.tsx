import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
div {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#root {
  width: 100%;
  height: 100%;
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
