import styled from "@emotion/styled/macro";

const colorThem = color => {
  switch (color) {
    case "blue":
      return "#38B5ED";

    default:
      return "#38B5ED";
  }
};

export const Highlight = styled.span`
  color: ${({ color }) => colorThem(color)};

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${({ color }) => colorThem(color)};
  }
`;
