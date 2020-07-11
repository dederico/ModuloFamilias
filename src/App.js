import React from "react";
import Home from "./pages/Home";
import AgregarFamilia from "./pages/AgregarFamilia";
import Familia from "./pages/Familia";
import P404 from "./pages/P404";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/familia/agregar">
          <AgregarFamilia></AgregarFamilia>
        </Route>
        <Route exact path="/familia/:id">
          <Familia></Familia>
        </Route>
        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
