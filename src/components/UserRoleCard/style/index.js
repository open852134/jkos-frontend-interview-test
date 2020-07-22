import styled from "@emotion/styled";
import { styleUtil, styleColors } from "../../../globalStyle";

export const UserRoleCardContainer = styled.div`
  ${styleUtil.flexCenter}
  cursor: pointer;
  flex-direction: column;
  border-radius: 5px;
  padding: 15px;
  border: ${({ isSelected }) =>
    isSelected
      ? `solid 2.5px ${styleColors.secondColor}`
      : `solid 2.5px #EAEDF1`};

  transition: 0.2s ease-in;
`;

export const IconBlock = styled.div`
  width: 100%;
  height: 140px;

  i {
    width: 100%;
    height: 100%;
  }
`;

export const Selected = styled.div`
  color: #fff;
  width: 40px;
  height: 40px;
  right: -20px;
  bottom: -20px;
  border-radius: 50%;
  position: absolute;
  background-color: #3fb5ed;
  box-shadow: 0 3px 10px -1px rgb(19 161 228 / 0.7);

  ${styleUtil.flexCenter};
`;

export const Title = styled.p`
  font-size: 18px;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
  ${styleColors.fontColor}
`;
