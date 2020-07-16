import React from 'react';
import styled from "styled-components";
import Counter from "./components/Counter";

function App() {
  return (
    <Wrapper id="app">
      <Hello >Hello World</Hello>
      <Counter />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
`;

const Hello = styled.p`
  color: pink;
`;

export default App;
