import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import { COLORS } from '../resources/colors'

const ButtonStyle = styled.button`
  font-family: CourierPrime;
  width: 180px;
  height: 65px;
  background-color: ${COLORS.whitePink};
  border: 1px solid ${COLORS.whitePink};
  border-radius: 20px;
  margin-right: 20px;
  color: ${COLORS.whitePink};
  -webkit-text-stroke: ${isMobile ? '0.2px black' : '1px black'};
  font-size: ${isMobile ? '100%' : '170%'};
  cursor: pointer;
`

export const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>
}
