import { useAppDispatch } from "store/hooks"
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
import { weatherSliceActions } from "store/redux/weatherApp/weatherAppSlice"

function WeatherCard({
  temp,
  cytiName,
  weatherImgURL,
  weatherId,
  isHomeCard,
  isError,
  error,
}: WeatherCardProps) {
  const dispatch = useAppDispatch()

  const deleteCard = () => {
    dispatch(weatherSliceActions.deleteSearchResultCard())
  }

  const saveCard = () => {
    dispatch(weatherSliceActions.saveCard())
  }

  const deleteHistoryCard = () => {
    if (weatherId !== undefined)
      dispatch(weatherSliceActions.deleteCard(weatherId))
  }
  return (
    <WeatherCardWrapper>
      {isError ? (
        <ErrorCardWrapper>
          <ErrorContent>API Error</ErrorContent>
          <ErrorMassage>{error}</ErrorMassage>
          <ButtonWrapper>
            <Button name="Delete" isWeatherCard={true} onClick={deleteCard} />
          </ButtonWrapper>
        </ErrorCardWrapper>
      ) : (
        <WeatherCardContainer>
          <ResultSearch>
            <InfoWeatherContainer>
              <TemperaturCyti>{`${temp}°`}</TemperaturCyti>
              <CytiName>{cytiName}</CytiName>
            </InfoWeatherContainer>
            <ImgContainer>
              <WeatherImg src={weatherImgURL} alt="Weather Icon" />
              <WeatherImg src={weatherImgURL} alt="Weather Icon" />
              <WeatherImg src={weatherImgURL} alt="Weather Icon" />
            </ImgContainer>
          </ResultSearch>
          <ButtonsContainer>
            {isHomeCard ? (
              <HomeWeatherCadr>
                <ButtonWrapper>
                  <Button name="Save" isWeatherCard={true} onClick={saveCard} />
                </ButtonWrapper>
                <ButtonWrapper>
                  <Button
                    name="Delete"
                    isWeatherCard={true}
                    onClick={deleteCard}
                  />
                </ButtonWrapper>
              </HomeWeatherCadr>
            ) : (
              <HistoryWeatherCard>
                <ButtonWrapper>
                  <Button
                    name="Delete"
                    isWeatherCard={true}
                    onClick={deleteHistoryCard}
                  />
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
