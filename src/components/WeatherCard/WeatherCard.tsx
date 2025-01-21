import Button from "../Button/Button"
import {
  ButtonCard,
  ButtonsContainer,
  ButtonWrapper,
  CytiName,
  ImgContainer,
  InfoWeatherContainer,
  ResultSearch,
  TemperaturCyti,
  WeatherCardWrapper,
  WeatherImg,
} from "./styles"
import type { WeatherCardProps } from "./types"

function WeatherCard({ temp, cytiName, weatherImgURL }: WeatherCardProps) {
  return (
    <WeatherCardWrapper>
      <ResultSearch>
        <InfoWeatherContainer>
          <TemperaturCyti>{(temp = "10")}</TemperaturCyti>
          <CytiName>{(cytiName = "Moskau")}</CytiName>
        </InfoWeatherContainer>
        <ImgContainer>
          <WeatherImg src={weatherImgURL} alt="Weather Icon" />
        </ImgContainer>
      </ResultSearch>
      <ButtonsContainer>
        <ButtonWrapper>
          <ButtonCard name="Save" />
        </ButtonWrapper>
        <ButtonWrapper>
          <ButtonCard name="Delete" />
        </ButtonWrapper>
      </ButtonsContainer>
    </WeatherCardWrapper>
  )
}

export default WeatherCard
