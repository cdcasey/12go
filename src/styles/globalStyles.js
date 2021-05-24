import { createGlobalStyle } from 'styled-components'

import { breakpointsUp } from '../constants/breakpoints'

const GlobalStyle = createGlobalStyle`
/* Universal reset */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-family: Cabin, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  /* 9px default */
 font-size: 56.25%;

 ${breakpointsUp.mobileL} {
   /* 10px on large desktops */
   font-size: 62.5%;
}

  ${breakpointsUp.laptopL} {
    /* 12px on large desktops */
    font-size: 75%;
  }

}
body {
  margin: 0;
  font-size: 1.4rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  /* padding: 3rem; */
}

:any-link {
  color: #4c9342;
  text-decoration: none;
}
`

export default GlobalStyle
