export interface WeatherData {
  id: number 
  temp: number
  cityName: string
  iconURL: string
}

export interface WeatherAppState {
  data: WeatherData[]
  searchResult: WeatherData | undefined
  error: any
  status: "default" | "loading" | "success" | "error"
}
