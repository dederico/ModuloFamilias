import React from "react";
import Home from "./pages/Home";
import AgregarFamilia from "./pages/AgregarFamilia";
import Familia2 from "./pages/Familia2";
import P404 from "./pages/P404";
import CreateAccount from "./pages/auth/CreateAccount";
import CardFamilia from "./pages/CardFamilia";
import ProtectedRoute from "../src/components/ProtectedRoute";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <ProtectedRoute exact path="/create-account">
          <CreateAccount />
        </ProtectedRoute>
        <ProtectedRoute exact path="/card/familias">
          <CardFamilia></CardFamilia>
        </ProtectedRoute>
        <ProtectedRoute exact path="/familia/agregar">
          <AgregarFamilia></AgregarFamilia>
        </ProtectedRoute>
        <ProtectedRoute exact path="/familia/:id">
          <Familia2></Familia2>
        </ProtectedRoute>

        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
