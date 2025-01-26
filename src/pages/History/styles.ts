import styled from "@emotion/styled"

export const HistoryPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  height: 100%;
  width: 710px;
  margin-top: 90px;
  margin-bottom: 82px;
`

export const HistoryCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 560px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ButtonWrapper = styled.div``
