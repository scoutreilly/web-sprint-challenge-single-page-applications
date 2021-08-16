import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Header = styled.header`
  text-align: center;
`;
const App = () => {
  return (
    <Header>
      <h1>want pizza?</h1>
      <button>click here to order now!</button>
    </Header>
  );
};
export default App;
