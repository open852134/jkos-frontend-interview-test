import styled from "@emotion/styled";
import { styleUtil } from "../../../globalStyle";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    min-height: auto;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;

export const AccountTypeSection = styled.div`
  width: 100%;
  display: grid;
  margin-bottom: 50px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 1024px) {
    width: 35%;
    margin-right: 60px;
  }
`;

export const TipsInfoBlock = styled.div`
  margin-bottom: 30px;

  p {
    color: #b4b4b4;
    font-weight: 200;
    text-align: center;
    text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 1024px) {
    p {
      text-align: left;
    }
  }
`;

export const FormBlock = styled.div`
  display: grid;
  grid-row-gap: 15px;
  margin-bottom: 20px;
`;

export const OperationBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SignupTipBlock = styled.div`
  color: #9d9e9d;
`;

export const PopupContent = styled.div`
  padding: 20px 0;
  flex-direction: column;
  ${styleUtil.flexCenter}

  img {
    width: 120px;
    margin-bottom: 20px;
  }
`;
