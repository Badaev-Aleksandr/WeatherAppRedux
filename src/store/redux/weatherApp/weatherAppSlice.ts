import { createAppSlice } from "store/createAppSlice"
import axios from "axios"
import type { WeatherAppState, WeatherData } from "./types"
import type { PayloadAction } from "@reduxjs/toolkit"

const weatherAppInitialState: WeatherAppState = {
  data: [],
  searchResult: null,
  error: undefined,
  status: "default",
}

const API_ID = "2669988ce3f2970e0d287742951e368a"

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: weatherAppInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (CITY_NAME: string, thunkApi) => {
        const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_ID}`

        try {
          const weatherData = await axios.get(WEATHER_URL)
          return weatherData.data
        } catch (error: any) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: WeatherAppState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: WeatherAppState, action: any) => {
          state.status = "success"
          state.searchResult = {
            id: action.payload.id,
            temp: parseFloat(
              Math.round(action.payload.main.temp - 273.15).toFixed(2),
            ),
            cityName: action.payload.name,
            iconURL: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
          }
        },
        rejected: (state: WeatherAppState, action: any) => {
          state.status = "error"
          state.error = `${action.payload.response.data.cod} - ${action.payload.response.data.message}`
        },
      },
    ),
    deleteSearchResultCard: create.reducer((state: WeatherAppState) => {
      state.searchResult = null
      state.status = "default"
    }),
    saveCard: create.reducer((state: WeatherAppState) => {
      if (
        state.searchResult !== null &&
        !state.data.find(weather => weather.id === state.searchResult?.id)
      ) {
        state.data = [...state.data, state.searchResult]
      }
    }),
    deleteCard: create.reducer(
      (state: WeatherAppState, action: PayloadAction<number>) => {
        state.data = state.data.filter(
          (weather: WeatherData) => weather.id !== action.payload,
        )
      },
    ),
    deleteAllCards: create.reducer(() => weatherAppInitialState),
  }),
  selectors: {
    wetherData: (state: WeatherAppState) => state,
  },
})

export const weatherSliceActions = weatherAppSlice.actions
export const weatherSliceSelectors = weatherAppSlice.selectors
