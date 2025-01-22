import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import BackgroundImage from "../assets/pic_2.png"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center center / cover;
`

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
height: 80px;
padding: 10px 0px 0px 0px;
border-bottom: 1px solid #D2D2D2;
backdrop-filter: blur(17.8px);
background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));

`

export const HeaderLabelContainer = styled.div`
cursor: pointer;
margin-left: 85px;
`

export const HeaderLabelContent = styled.div`
font-family: Inter;
font-size: 24px;
font-weight: 700;
line-height: 29.05px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #FFFFFF;

`

export const NavContainer = styled.nav`
display: flex;
justify-content: center;
align-items: center;
gap: 63px;
margin-right: 107px;
`

export const Main = styled.main`
display: flex;
flex: 1;
justify-content: center;

`

export const StyledNavLink = styled(NavLink)`
font-family: 'Inter';
font-size: 20px;
font-weight: 400;
line-height: 24.2px;
text-underline-position: from-font;
text-decoration: none;
color: #FFFFFF;

`