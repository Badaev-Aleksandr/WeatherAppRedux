import styled from "@emotion/styled"

export const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  width: 710px;
  height: 180px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(8px);
  font-family: "Inter", sans-serif;
`

export const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ErrorCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const ErrorContent = styled.div`
  font-family: "Inter";
  font-size: 57px;
  font-weight: 500;
  line-height: 68.98px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #f35e5e;
`

export const ErrorMassage = styled.div`
  font-family: "Inter";
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: center;
  margin: 6px 0 11px 0;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;
`

export const ResultSearch = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 22px 0 0 36px;
`

export const TemperaturCyti = styled.div`
  font-size: 57px;
  font-weight: 500;
  line-height: 69px;
  color: #ffffff;
`

export const CytiName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24.2px;
  color: #ffffff;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 290px;
  height: 74px;
  margin: 28px 127px 0 0;
`

export const WeatherImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export const ButtonsContainer = styled.div``

export const ButtonWrapper = styled.div`
  width: 155px;
`
export const HomeWeatherCadr = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 160px 14px 160px;
  height: 48px;
`

export const HistoryWeatherCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  margin-bottom: 14px;
`
