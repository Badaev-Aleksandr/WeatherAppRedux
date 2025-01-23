import { createAppSlice } from "store/createAppSlice"
import axios from "axios"

const weatherAppInitialState = {
  data: [],
  error: undefined,
  status: "default",
}

const API_ID = "2669988ce3f2970e0d287742951e368a"

const CITY_NAME = " "

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_ID}`

export const weatherAppSlice = createAppSlice({
  name: "WEATHER_APP",
  initialState: weatherAppInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (argv, thunkApi) => {
        try {
          const result = await axios.get(WEATHER_URL)
          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: state => {},
        fulfilled: state => {},
        rejected: state => {},
      },
    ),
  }),
})
