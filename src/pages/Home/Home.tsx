import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import { ButtonWrapper, HomePageWrapper, SearchForm } from "./styles"
import Weather from "../../assets/weather.png"

function Home() {
  const weatherCard = true
  return (
    <HomePageWrapper>
      <SearchForm onSubmit={() => {}}>
        <Input
          name="cytiSearch"
          placeholder="Enter Cyti"
          onChange={() => {}}
          value=""
          error="{true}"
        />
        <ButtonWrapper>
          <Button name="Search" isWeatherCard={false} />
        </ButtonWrapper>
      </SearchForm>
      {weatherCard && (
        <WeatherCard
          temp=""
          weatherImgURL={Weather}
          cytiName=""
          isError={false}
          error=""
          isHomeCard={true}
        />
      )}
    </HomePageWrapper>
  )
}

export default Home
