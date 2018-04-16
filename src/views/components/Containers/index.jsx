import styled from 'styled-components'

const MainContainer = styled.div`
  min-height: '100vh';
`

const LinksContainer = styled.div`
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
