import Image from 'next/image'
import { Container } from '../layout/LayoutElements'
import styled from 'styled-components'

export const Header = styled.header`
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 2rem;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLogo = styled(Image)``

export const NavItems = styled.ul`
  display: flex;
  justify-items: space-between;
  list-style-type: none;
`

export const NavItem = styled.li`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  margin: 0 1.25rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`

export const NavLink = styled.a``

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <NavLogo
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              width="40"
              height="40"
            />
            <NavItems>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </NavItems>
          </Nav>
        </Container>
      </Header>
    </>
  )
}

export default Layout
