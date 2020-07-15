import React, { useState } from "react";
import createPersistedState from "use-persisted-state";
// firebase
// aun sin importar el firebaseConfig.js
// import app from "../../pages/auth/firebaseConfig";
import firebase from "firebase";
// utilities
import { FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import "./AuthStyles.scss";
// import { Auth } from "../auth/Persistent";

const AuthAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  console.log(email);
  console.log(setEmail);
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const handleOnChange = (e, func) => {
    const value = e.currentTarget.value;
    func(value);
  };

  const authAccount = async () => {
    try {
      setAlert("Verificando credenciales del usuario");
      //comente el await
      // const user = await app
      //   .auth()
      //   .signInWithEmailAndPassword(username, password);

      firebase.auth().signInWithEmailAndPassword(username, password);
      setAlert("Usuario verificado, redirigiendo a tu dashboard");
      // console.log(user);
    } catch (error) {
      setAlert(error.message);
    }
  };
  const useCounterState = createPersistedState("count");
  const useCounter = (initialCount) => {
    const [count, setCount] = useCounterState(initialCount);
    return {
      count,
      increment: () => setCount((currentCount) => currentCount + 1),
      decrement: () => setCount((currentCount) => currentCount - 1),
    };
  };
  console.log(useCounter());
  return (
    <div className="flex-center auth">
      <div>
        <h1 className="text-center">Identificate</h1>
        <h2 className="text-center">Y comienza a trabajar</h2>

        <FormGroup>
          <Label>Usuario</Label>
          <Input
            type="text"
            name="user"
            placeholder="Usuario del sistema"
            onChange={(e) => handleOnChange(e, setUsername)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña del sistema"
            onChange={(e) => handleOnChange(e, setPassword)}
          />
        </FormGroup>
        <Link to="/card/familias">
          <button className="btn btn-primary btn-block" onClick={authAccount}>
            Ingreso
          </button>
        </Link>
        {alert && <small>{alert}</small>}
        <Link to="/create-account" className="link-auth">
          Crea una cuenta para empezar a trabajar.
        </Link>
      </div>
    </div>
  );
};

export default AuthAccount;
