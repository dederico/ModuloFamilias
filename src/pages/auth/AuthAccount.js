import React, { useState } from "react";
//import createPersistedState from "use-persisted-state";
// firebase
// aun sin importar el firebaseConfig.js
import app from "../../pages/auth/firebaseConfig";
// import firebase from "firebase";
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

      const user = await app
        .auth()
        .signInWithEmailAndPassword(username, password);

      console.log(user);
      window.sessionStorage.setItem("idToken", user.user.uid);

      window.sessionStorage.setItem("email", username);

      app.auth().signInWithEmailAndPassword(username, password);
      setAlert("Usuario verificado, redirigiendo a tu dashboard");
    } catch (error) {
      setAlert(error.message);
    }
  };

  // Persistent
  // const useCounterState = createPersistedState("count");
  // const useCounter = (initialCount) => {
  //   const [count, setCount] = useCounterState(initialCount);
  //   return {
  //     count,
  //     increment: () => setCount((currentCount) => currentCount + 1),
  //     decrement: () => setCount((currentCount) => currentCount - 1),
  //   };
  // };
  // console.log(useCounter());

  return (
    <div className="flex-center auth">
      <div className="page-container">
        <div className="image-container-authaccount">
          <img className="img-authaccount" src="../img/dif.png" alt="Dif" />
        </div>
        <h1 className="text-center">Adopciones</h1>

        <FormGroup className="FormGroup">
          <Label>Usuario</Label>
          <Input
            type="text"
            name="user"
            placeholder="Usuario del sistema"
            onChange={(e) => handleOnChange(e, setUsername)}
          />
        </FormGroup>
        <FormGroup className="FormGroup">
          <Label>Contraseña</Label>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña del sistema"
            onChange={(e) => handleOnChange(e, setPassword)}
          />
        </FormGroup>
        <div className="btn-container-authaccount">
          <Link to="/list/familias">
            <button className="btn-primary-authaccout" onClick={authAccount}>
              <p className="ingreso-authaccount">Ingreso</p>
            </button>
          </Link>
        </div>
        {/* {alert && <small>{alert}</small>}
        <Link to="/create-account" className="link-auth">
          Crea una cuenta para empezar a trabajar.
        </Link> */}
      </div>
    </div>
  );
};

export default AuthAccount;
