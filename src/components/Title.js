import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

export const TitleL = styled.div`
  font-family: 'Gruppo';
  margin-top: ${({ margin }) => (margin ? margin : '3vh')};
  color: white;
  -webkit-text-stroke: ${isMobile ? '0.2px black' : '1.3px black'};
  font-size: ${isMobile ? '230%' : '500%'};
`

export const TitleM = styled.div`
  margin: 10px 0;
  font-size: ${isMobile ? '200%' : '350%'};
`
