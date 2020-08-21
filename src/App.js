import React from "react";
import Home from "./pages/Home";
import AgregarFamilia from "./pages/AgregarFamilia";
import Familia2 from "./pages/Familia2";
import P404 from "./pages/P404";
import AddUser from "./pages/auth/AddUser";
import CardFamilia from "./pages/CardFamilia";
import ProtectedRoute from "../src/components/ProtectedRoute";
import Registro from "./components/registro/Registro";
import Fisicas from "./pages/registro/Fisicas";
import Domicilio from "./pages/registro/Domicilio";
import OrganizacionFamiliar from "./pages/registro/Familia";
import Familiares from "./pages/registro/Familiares";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/*TODO: poner el nav como componente aquí*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-familia">
          {/*TODO: Mover el componente registro a pages*/}
          <Registro />
        </Route>
        <Route exact path="/create-familia-fisica">
          <Fisicas />
        </Route>
        <Route exact path="/create-familia-domicilio">
          <Domicilio />
        </Route>
        <Route exact path="/create-familia-org">
          <OrganizacionFamiliar />
        </Route>
        <Route exact path="/create-familia-familiares">
          <Familiares />
        </Route>
        <ProtectedRoute exact path="/create-account">
          <AddUser />
        </ProtectedRoute>
        <ProtectedRoute exact path="/list/familias">
          {/* FamiliaOuter */}
          <CardFamilia />
        </ProtectedRoute>
        <ProtectedRoute exact path="/add-familia">
          <AgregarFamilia />
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
