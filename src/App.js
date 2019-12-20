import React from "react";
import Header from "./components/Header.js";
import { Switch, Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'


export default function App() {
  return (
    <main>
      <Switch>

        <Route path="/">
          <Header />
          <WelcomePage />
        </Route>

      </Switch>


    </main>
  );
}
