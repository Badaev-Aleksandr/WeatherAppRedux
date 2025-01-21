import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import { HomePageWrapper, SearchContainer, SearchForm } from "./styles"
import Weather from "../../assets/weather.png"

function Home() {
  const weatherCard = "Card"
  return (
    <HomePageWrapper>
      <SearchContainer>
        <SearchForm onSubmit={() => {}}>
          <Input
            name="cytiSearch"
            placeholder="Enter Cyti"
            onChange={() => {}}
            value=""
            error=""
          />
          <Button name="Search" />
        </SearchForm>
      </SearchContainer>
      <WeatherCard temp="" weatherImgURL={Weather} cytiName=""/>
    </HomePageWrapper>
  )
}

export default Home
