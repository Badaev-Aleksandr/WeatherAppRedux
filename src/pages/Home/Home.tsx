import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import { ButtonWrapper, HomePageWrapper, SearchForm } from "./styles"
import Weather from "../../assets/weather.png"

function Home() {
  const weatherCard = "Card"
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
            <Button name="Search" />
          </ButtonWrapper>
        </SearchForm>
      <WeatherCard temp="" weatherImgURL={Weather} cytiName="" />
    </HomePageWrapper>
  )
}

export default Home
