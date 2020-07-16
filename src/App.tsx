import React from 'react';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Hello >Hello World</Hello>
    </div>
  );
}

const Hello = styled.p`
  color: pink;
`;

export default App;
