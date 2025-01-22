import type { ButtonProps } from "./types";
import {MainButton} from './styles';

function Button({ name, type = "button", onClick, disabled = false, isButtonCard}: ButtonProps) {
  return (
    <MainButton onClick={onClick} type={type} disabled={disabled} isButtonCard={isButtonCard}>
      {name}
    </MainButton>
  );
}

export default Button;
