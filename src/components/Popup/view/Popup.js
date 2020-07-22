import React from "react";
import styled from "@emotion/styled";

const PopupContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

const ChildrenBlock = styled.div`
  top: 50%;
  left: 50%;
  width: 60%;
  z-index: 50;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #fff;
  transform: translate(-50%, -50%);
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Popup = ({ children }) => {
  return (
    <PopupContainer>
      <Backdrop />
      <ChildrenBlock>{children}</ChildrenBlock>
    </PopupContainer>
  );
};

export default Popup;
