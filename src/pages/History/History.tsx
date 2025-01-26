import WeatherCard from "components/WeatherCard/WeatherCard"
import Button from "../../components/Button/Button"
import {
  HistoryCardsWrapper,
  HistoryPageWrapper,
  HistoryWrapper,
} from "./styles"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weatherApp/weatherAppSlice"
import { useAppDispatch, useAppSelector } from "store/hooks"
import type { WeatherData } from "store/redux/weatherApp/types"
import { WeatherCardWrapper } from "components/WeatherCard/styles"

function History() {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector(weatherSliceSelectors.wetherData)
  const weatherCards = data.map((weather: WeatherData) => {
    return (
      <WeatherCardWrapper key={weather.id}>
        <WeatherCard
          isHomeCard={false}
          isError={false}
          weatherId={weather.id}
          temp={weather.temp}
          cytiName={weather.cityName}
          weatherImgURL={weather.iconURL}
        />
      </WeatherCardWrapper>
    )
  })
  const deleteAllCards = () => {
    dispatch(weatherSliceActions.deleteAllCards())
  }

  return (
    <HistoryPageWrapper>
      {data.length > 0 && (
        <HistoryWrapper>
          <HistoryCardsWrapper>{weatherCards}</HistoryCardsWrapper>
          <Button
            name="Delete all cards"
            isWeatherCard={false}
            onClick={deleteAllCards}
          />
        </HistoryWrapper>
      )}
    </HistoryPageWrapper>
  )
}

export default History
