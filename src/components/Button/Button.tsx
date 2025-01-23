import type { ButtonProps } from "./types"
import { MainButton } from "./styles"

function Button({
  name,
  type = "button",
  onClick,
  disabled = false,
  isWeatherCard,
}: ButtonProps) {
  return (
    <MainButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      isWeatherCard={isWeatherCard}
    >
      {name}
    </MainButton>
  )
}

export default Button
