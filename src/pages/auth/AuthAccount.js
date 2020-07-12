import React, { useState } from "react";
// amplify
import { Auth } from "aws-amplify";
// utilities
import { FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import "./AuthStyles.scss";

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
      const user = await Auth.signIn(username, password);
      setAlert("Usuario verificado, redirigiendo a tu dashboard");
      console.log(user);
    } catch (error) {
      setAlert(error.message);
    }
  };

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
        <button className="btn btn-primary btn-block" onClick={authAccount}>
          Ingreso
        </button>
        {alert && <small>{alert}</small>}
        <Link to="/create-account" className="link-auth">
          Crea una cuenta para empezar a trabajar.
        </Link>
      </div>
    </div>
  );
};

export default AuthAccount;
