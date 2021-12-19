import styled from 'styled-components'

export const Line = styled.div`
  width: 100%;
  border-bottom: ${({ thick }) =>
    thick ? `${thick}px solid #7AE825;` : `1px solid #7AE825;`};
  margin: ${({ margin }) => (margin ? `${margin} 0` : 0)};
`
