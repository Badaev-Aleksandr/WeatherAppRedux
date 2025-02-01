import styled from "@emotion/styled"
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
  border-bottom: 1px solid #d2d2d2;
  backdrop-filter: blur(17.8px);
  background: linear-gradient(
      0deg,
      rgba(18, 45, 77, 0.5),
      rgba(18, 45, 77, 0.5)
    ),
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
  color: #ffffff;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`
