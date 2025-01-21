import styled from "@emotion/styled"
import Button from "../Button/Button"
import { MainButton } from "../Button/styles"

export const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  width: 710px;
  height: 180px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  font-family: "Inter", sans-serif;
`

export const ResultSearch = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 22px 0 0 36px;
`

export const TemperaturCyti = styled.div`
  font-size: 57px;
  font-weight: 500;
  line-height: 69px;
  color: #ffffff;
`

export const CytiName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24.2px;
  color: #ffffff;
`

export const ImgContainer = styled.div`
  width: 290px;
  height: 74px;
  margin: 28px 127px 0 0;
`

export const WeatherImg = styled.img`
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 160px 14px 160px;
  height: 48px;
`

export const ButtonWrapper = styled.div`
  width: 155px;
`

export const ButtonCard = styled(Button)`
`
