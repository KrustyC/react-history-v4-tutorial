import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Needed to use Link below :)
const StyledLink = styled(Link)``

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

export default LinksContainer
