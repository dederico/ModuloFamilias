import React from "react";
import Home from "./pages/Home";
import AgregarFamilia from "./pages/AgregarFamilia";
import Familia2 from "./pages/Familia2";
import P404 from "./pages/P404";
import AddUser from "./pages/auth/AddUser";
import CardFamilia from "./pages/CardFamilia";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Registro from "../src/components/Registro";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-familia">
          <Registro />
        </Route>
        <ProtectedRoute exact path="/create-account">
          <AddUser />
        </ProtectedRoute>
        <ProtectedRoute exact path="/list/familias">
          {/* FamiliaOuter */}
          <CardFamilia />
        </ProtectedRoute>
        <ProtectedRoute exact path="/add-familia">
          <AgregarFamilia></AgregarFamilia>
        </ProtectedRoute>
        <ProtectedRoute exact path="/familia/:id">
          {/* FamiliaInner */}
          <Familia2 />
        </ProtectedRoute>

        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
