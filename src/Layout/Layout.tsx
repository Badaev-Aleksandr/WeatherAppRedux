import { useNavigate } from "react-router-dom"
import {
  Header,
  HeaderLabelContainer,
  HeaderLabelContent,
  LayoutWrapper,
  Main,
  NavContainer,
  StyledNavLink,
} from "./styles"
import type { LayoutProps } from "./types"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLabelContainer onClick={goToHomePage}>
          <HeaderLabelContent>Weather App</HeaderLabelContent>
        </HeaderLabelContainer>
        <NavContainer>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/history">History</StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
