import React from "react";
import styled from "@emotion/styled";
import { Login } from "./pages";

const FullLayout = styled.div`
  padding: 60px 40px;
`;

const App = () => {
  return (
    <FullLayout>
      <Login />
    </FullLayout>
  );
};

export default App;
