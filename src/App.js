import React from "react";
import Header from "./components/Header.js";
import { Switch, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import { Container, Row, Col } from 'reactstrap';

export default function App() {
  return (
    <Container>
      <Switch>

        <Route path="/characters">
          <Header />
          <CharacterList/>
        </Route>

        <Route path="/">
          <Header />
          <WelcomePage />
        </Route>

      </Switch>


    </Container>
  );
}
