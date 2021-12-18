import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

export const ContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: ${isMobile ? '95%' : '80%'};
  height: 100%;
`

export const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>
}
