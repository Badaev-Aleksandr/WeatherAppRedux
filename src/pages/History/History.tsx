import WeatherCard from "components/WeatherCard/WeatherCard"
import Button from "../../components/Button/Button"
import {
  HistoryCardsWrapper,
  HistoryPageWrapper,
  HistoryWrapper,
} from "./styles"

function History() {
  const weatherCards = true
  return (
    <HistoryPageWrapper>
      {weatherCards && (
        <HistoryWrapper>
          <HistoryCardsWrapper>
          <WeatherCard temp="" weatherImgURL={""} cytiName="" isError={false} error="" isHomeCard={false}/>
          <WeatherCard temp="" weatherImgURL={""} cytiName="" isError={false} error="" isHomeCard={false}/>
          <WeatherCard temp="" weatherImgURL={""} cytiName="" isError={false} error="" isHomeCard={false}/>
          <WeatherCard temp="" weatherImgURL={""} cytiName="" isError={false} error="" isHomeCard={false}/>
          </HistoryCardsWrapper>
            <Button name="Delete all cards" isWeatherCard={false} />
        </HistoryWrapper>
      )}
    </HistoryPageWrapper>
  )
}

export default History
