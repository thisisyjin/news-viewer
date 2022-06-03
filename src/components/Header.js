import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  letter-spacing: -0.05em;
  margin-bottom: 30px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 20px;
    background-color: #abd0d9;
    transition: all 0.18s ease-in;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

const Header = () => {
  return (
    <HeaderBlock>
      <StyledLink to="/">News Viewer</StyledLink>
    </HeaderBlock>
  )
}

export default Header
