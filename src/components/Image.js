import styled from 'styled-components'

export const Image = styled.img`
  margin: ${({ margin }) => (margin ? `${margin}` : '20px auto')};
  width: ${({ width }) => (width ? width : '100%')};
  border-radius: 20px;
`
