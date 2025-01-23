import styled from "@emotion/styled"

interface ButtonProps {
  isWeatherCard: boolean
}

export const MainButton = styled.button<ButtonProps>`
  width: 100%;
  padding: 12px 40px;
  border-radius: 50px;
  border: ${({ isWeatherCard }) =>
    isWeatherCard ? " 1px solid #FFFFFF" : "none"};
  outline: none;
  gap: 10px;
  background-color: ${({ isWeatherCard }) =>
    isWeatherCard ? "transparent" : "#3678b4"};
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;
  align-items: center;
  color: #ffffff;
  line-height: 24.2px;
  cursor: pointer;
`
