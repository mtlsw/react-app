import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
div {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;

}

#root {
  width: 100%;
  height: 100%;
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
