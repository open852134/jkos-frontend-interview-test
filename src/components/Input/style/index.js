import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 10px;
  border-radius: 4px;
  transition: 0.2s;
  border: ${({ isFocus }) =>
    isFocus ? "solid 2px #3FB5ED" : "solid 1px #d6d8e3"};
`;

export const Label = styled.label`
  position: absolute;
  padding: 3px 7px;
  border-radius: 3px;
  letter-spacing: 0.02cm;
  transition: 0.15s ease-out;
  ${({ isFocus, isShowLabel }) => {
    if (isFocus) {
      return css`
        color: #fff;
        font-size: 12px;
        top: -12px;
        background-color: #3fb5ed;
      `;
    }
    if (isShowLabel) {
      return css`
        color: #fff;
        font-size: 12px;
        top: -12px;
        background-color: #d6d8e3;
      `;
    }
    if (!isFocus || !isShowLabel) {
      return css`
        color: #d6d8e3;
        top: 50%;
        transform: translateY(-50%);
        left: 30px;
      `;
    }
  }}
`;

export const IconBlock = styled.div`
  margin-right: 10px;

  i {
    font-size: 20px;
    color: ${({ isFocus }) => (isFocus ? "#3FB5ED" : "#d6d8e3")};
  }
`;

export const InputElement = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
`;
