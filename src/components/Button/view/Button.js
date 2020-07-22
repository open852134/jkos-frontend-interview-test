import styled from "@emotion/styled";
import { css } from "@emotion/core";

const colorTheme = ({ color }) => {
  switch (color) {
    case "blue":
      return css`
        color: #fff;
        background: #38b5ed;

        &:hover {
          background: #38b5ed;
        }
      `;

    default:
      return css`
        color: #fff;
        background: #38b5ed;

        &:hover {
          background: #38b5ed;
        }
      `;
  }
};

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 13px 25px;
  border-radius: 3px;

  ${colorTheme}
`;
