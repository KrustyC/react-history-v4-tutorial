import styled, { css } from 'styled-components'

const P = styled.p`
  text-align: justify;
  text-justify: inter-word;

  ${({ mt }) => mt && css`
    margin-top: 30px;
  `}
`

export default P
