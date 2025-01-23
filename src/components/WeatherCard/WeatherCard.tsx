import Button from "../Button/Button"
import {
  ButtonsContainer,
  ButtonWrapper,
  CytiName,
  ErrorCardWrapper,
  ErrorContent,
  ErrorMassage,
  HistoryWeatherCard,
  HomeWeatherCadr,
  ImgContainer,
  InfoWeatherContainer,
  ResultSearch,
  TemperaturCyti,
  WeatherCardContainer,
  WeatherCardWrapper,
  WeatherImg,
} from "./styles"
import type { WeatherCardProps } from "./types"

function WeatherCard({
  temp,
  cytiName,
  weatherImgURL,
  isHomeCard,
  isError,
  error,
}: WeatherCardProps) {
  return (
    <WeatherCardWrapper>
      {isError ? (
        <ErrorCardWrapper>
          <ErrorContent>API Error</ErrorContent>
          <ErrorMassage>{error || "Error"}</ErrorMassage>
          <ButtonWrapper>
            <Button name="Delete" isWeatherCard={true} />
          </ButtonWrapper>
        </ErrorCardWrapper>
      ) : (
        <WeatherCardContainer>
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
            {isHomeCard ? (
              <HomeWeatherCadr>
                <ButtonWrapper>
                  <Button name="Save" isWeatherCard={true} />
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button name="Delete" isWeatherCard={true} />
                </ButtonWrapper>
              </HomeWeatherCadr>
            ) : (
              <HistoryWeatherCard>
                <ButtonWrapper>
                  <Button name="Delete" isWeatherCard={true} />
                </ButtonWrapper>
              </HistoryWeatherCard>
            )}
          </ButtonsContainer>
        </WeatherCardContainer>
      )}
    </WeatherCardWrapper>
  )
}

export default WeatherCard
