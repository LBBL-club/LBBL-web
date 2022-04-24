import styled from 'styled-components'
import { isMobile } from '../config'

export const Image = styled.img`
  width: ${({ width }) => (width ? width : '')};
`

export const ImageS = styled.img`
  width: ${isMobile ? '12px' : '16px'};
`

export const ImageM = styled.img`
  width: ${isMobile ? '16px' : '24px'};
`

export const ImageL = styled.img`
  width: ${isMobile ? '32px' : '48px'};
`

export const ImageXL = styled.img`
  width: ${isMobile ? '64px' : '96px'};
`
