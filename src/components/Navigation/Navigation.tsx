import { NavigationWrapper, StyledNavLink } from "./styles"

function Navigation() {
  return (
    <NavigationWrapper>
      <StyledNavLink
        style={({ isActive }) => ({
          fontWeight: isActive ? "700" : "400",
        })}
        to="/"
      >
        Home
      </StyledNavLink>
      <StyledNavLink
        style={({ isActive }) => ({
          fontWeight: isActive ? "700" : "400",
        })}
        to="/history"
      >
        History
      </StyledNavLink>
    </NavigationWrapper>
  )
}

export default Navigation
