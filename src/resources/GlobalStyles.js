import { createGlobalStyle } from 'styled-components'
import { COLORS } from './colors'

import { default as CourierPrime } from './fonts/CourierPrime-Regular.ttf'
import { default as Gruppo } from './fonts/Gruppo-Regular.ttf'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: CourierPrime;
    src: url(${CourierPrime}) format('opentype');
  }

  @font-face {
    font-family: Gruppo;
    src: url(${Gruppo}) format('opentype');
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html, body, #root {
    font-family: CourierPrime;
    width: 100%;
    height: 100%;
  }

  #root {
    background-color: ${COLORS.pink};
    overflow: scroll;
  }

  a {
    color: ${COLORS.purple};
   

  }

`

export default GlobalStyle
