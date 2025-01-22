import styled from "@emotion/styled"

export const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`
export const Label = styled.label`
  font-family: "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`

export const InputElement = styled.input`
  padding: 12px 12px 12px 20px;
  gap: 10px;
  border: 1px solid #ffffff;
  border-radius: 40px;
  color: #ffffff 10%;
  background-color: transparent;
  backdrop-filter: blur(16px);
  height: 48px;
  &::placeholder {
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    color: #ffffff ;
  }
`
