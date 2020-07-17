import React from 'react';
import styled from "styled-components";
import MenuBar from "./components/MenuBar";
import Counter from "./components/Counter";
import ToDos from "./components/ToDos";
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history"

const history = createBrowserHistory();

function App() {
  return (
    <Wrapper id="app">
      <Router history={history}>
        <Menu>
          <MenuBar />
        </Menu>
        <Main>
          <Hello >Hello World</Hello>
          <Route exact path="/counter" component={Counter} />
          <Route path="/todos" component={ToDos} />
        </Main>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "menu main"
`;
const Menu = styled.div`
  grid-area: menu;
`;
const Main = styled.div`
  grid-area: main;
`;
const Hello = styled.p`
  color: pink;
`;

export default App;
