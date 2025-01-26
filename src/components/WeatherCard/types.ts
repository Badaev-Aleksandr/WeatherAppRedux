export interface WeatherCardProps {
  temp?: number | undefined
  cytiName?: string
  weatherImgURL?: string | undefined
  weatherId?: number | undefined
  isError?: boolean
  error?: string
  isHomeCard:boolean
}
