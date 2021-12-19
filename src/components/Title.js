import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

export const TitleL = styled.div`
  font-family: 'Gruppo';
  margin-top: ${({ margin }) => (margin ? margin : '3vh')};
  color: white;
  font-size: ${isMobile ? '32px' : '96px'};
`

export const TitleM = styled.div`
  margin: 0;
  font-size: ${isMobile ? '28px' : '48px'};
`
