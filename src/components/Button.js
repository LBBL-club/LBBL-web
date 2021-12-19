import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

import { COLORS } from '../resources/colors'

const ButtonStyle = styled.button`
  font-family: 'CourierPrime';
  width: ${isMobile ? '100px' : '200px'};
  height: ${isMobile ? '30px' : '65px'};
  background-color: black;
  border: 2px solid #7ae825;
  border-radius: 50%;
  margin-right: ${isMobile ? '5px' : '20px'};
  color: white;
  font-style: normal;
  font-weight: normal;

  font-size: ${isMobile ? '12px' : '20px'};
  cursor: pointer;
`

export const Button = ({ children, fnc }) => {
  return (
    <ButtonStyle
      onClick={() => {
        fnc()
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </ButtonStyle>
  )
}
