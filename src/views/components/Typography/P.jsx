import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'

const P = styled.p`
  text-align: justify;
  text-justify: inter-word;

  ${switchProp('align', {
    center: css`
      text-align: center;
    `
  })}

  ${({ mt }) => mt && css`
    margin-top: 30px;
  `}
`

export default P
