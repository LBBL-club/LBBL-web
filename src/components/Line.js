import styled from "styled-components"

export const Line = styled.div`
  width: 100%;
  border-bottom: ${({ thick }) =>
    thick ? `${thick}px solid black;` : `1px solid black;`};
  margin: ${({ margin }) => (margin ? margin : 0)};
`
