import styled from "@emotion/styled";

interface MainInputProp {
  hasError: boolean;
}

export const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Label = styled.label`
  font-family: "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  padding: 12px 12px 12px 20px;
  gap: 10px;
  border: 1px solid #ffffff;
  border-radius: 40px;
  color: #FFFFFF 10%;
  background-color: transparent;
  backdrop-filter: blur(16px);

  &::placeholder {
    color: #ffffff 0.1;
  }
`;
export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 16px;
`;
