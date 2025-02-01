import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 63px;
  margin-right: 107px;
`

export const StyledNavLink = styled(NavLink)`
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-underline-position: from-font;
  text-decoration: none;
  color: #ffffff;
`
