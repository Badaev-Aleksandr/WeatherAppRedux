import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import { ButtonWrapper, HomePageWrapper, SearchForm } from "./styles"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { useFormik } from "formik"
import type { WeatherCityName } from "./types"
import { WEATHER_VALUE } from "./types"
import {
  weatherSliceActions,
  weatherSliceSelectors,
} from "store/redux/weatherApp/weatherAppSlice"
import Spinner from "components/Spinner/Spinner"

function Home() {
  const dispatch = useAppDispatch()
  const { searchResult, error, status } = useAppSelector(
    weatherSliceSelectors.wetherData,
  )
  const formik = useFormik({
    initialValues: {
      [WEATHER_VALUE.CITY_NAME]: "",
    } as WeatherCityName,
    onSubmit: values => {
      if (!values.cityName.trim()) {
        alert("Please enter a city name.")
      } else {
        dispatch(weatherSliceActions.getWeather(values.cityName.trim()))
        formik.resetForm()
      }
    },
  })

  return (
    <HomePageWrapper>
      <SearchForm onSubmit={formik.handleSubmit}>
        <Input
          name={WEATHER_VALUE.CITY_NAME}
          placeholder="Enter Cyti"
          onChange={formik.handleChange}
          value={formik.values[WEATHER_VALUE.CITY_NAME]}
        />
        <ButtonWrapper>
          <Button name="Search" isWeatherCard={false} type="submit" />
        </ButtonWrapper>
      </SearchForm>
      {status === "loading" && <Spinner />}
      {status === "success" && searchResult !== null && (
        <WeatherCard
          temp={searchResult.temp}
          weatherImgURL={searchResult.iconURL}
          cytiName={searchResult.cityName}
          isHomeCard={true}
        />
      )}
      {status === "error" && <WeatherCard isHomeCard={true} isError={true} error={error} />}
    </HomePageWrapper>
  )
}

export default Home
