import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'

const MainContainer = styled.div`
  min-height: '100vh';
`

const LinksContainer = styled.div`
  display: flex;

  ${switchProp('align', {
    center: css`
      justify-content: center;
      align-items: center;
    `
  })}

  button {
    margin-left: 20px;
  }

  button:first-child {
    margin-left: 0px;
  }

  a {
    margin-left: 20px;
  }

  a:first-child {
    margin-left: 0px;
  }
`

export { MainContainer, LinksContainer }
