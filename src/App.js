import React from "react";
import Home from "./pages/Home";
import AgregarFamilia from "./pages/AgregarFamilia";
import Familia2 from "./pages/Familia2";
import P404 from "./pages/P404";
import CreateAccount from "./pages/auth/CreateAccount";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/create-account">
          <CreateAccount></CreateAccount>
        </Route>
        <Route exact path="/familia/agregar">
          <AgregarFamilia></AgregarFamilia>
        </Route>
        <Route exact path="/familia/:id">
          <Familia2></Familia2>
        </Route>
        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
