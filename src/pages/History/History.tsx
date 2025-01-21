import Button from "../../components/Button/Button"
import { HistoryPageWrapper } from "./styles"

function History() {
  const weatherCards = " "
  return (
    <HistoryPageWrapper>

      {weatherCards && <Button name="Delete all cards" />}
    </HistoryPageWrapper>
  )
}

export default History
