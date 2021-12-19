import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

export const Content = styled.article`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: ${({ margin }) => (margin ? margin : '3vh')};
`
