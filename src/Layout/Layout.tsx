import { useNavigate } from "react-router-dom"
import {
  Header,
  HeaderLabelContainer,
  HeaderLabelContent,
  LayoutWrapper,
  Main,
} from "./styles"
import type { LayoutProps } from "./types"
import Navigation from "components/Navigation/Navigation"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderLabelContainer onClick={goToHomePage}>
          <HeaderLabelContent>Weather App</HeaderLabelContent>
        </HeaderLabelContainer>
        <Navigation />
      </Header>
      <Main>{children}</Main>
    </LayoutWrapper>
  )
}

export default Layout
