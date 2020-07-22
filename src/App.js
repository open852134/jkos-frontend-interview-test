import React from "react";
import styled from "@emotion/styled";
import { Login } from "./pages";

const FullLayout = styled.div`
  padding: 60px 40px;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 500px 500px;
  background-position: 50% 150%;
  background-image: url("./images/img_town.svg");
`;

const App = () => {
  return (
    <FullLayout>
      <Login />
    </FullLayout>
  );
};

export default App;
