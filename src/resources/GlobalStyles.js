import { createGlobalStyle } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { fontM, fontS } from './fonts'

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
    color: white;
    font-size: ${isMobile ? fontS : fontM};
  }

  html, body, #root {
    font-family: CourierPrime;
    width: 100%;
    height: 100%;
  }

  #root {
    background-color: black;
    overflow: scroll;
  }

  @keyframes fade {
    from { opacity: 1.0; }
    90% { opacity: 0.5; }
    to { opacity: 1.0; }
  }                                                                                                                                                                                                                                  

  @-webkit-keyframes fade {
      from { opacity: 1.0; }
      90% { opacity: 0.5; }
      to { opacity: 1.0; }
  }

  .blink {
    animation:fade 1000ms infinite;
    -webkit-animation:fade 2000ms infinite;
  }


`

export default GlobalStyle
