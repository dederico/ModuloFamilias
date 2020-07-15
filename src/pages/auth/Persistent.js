import React, { useEffect, useState } from "react";
import app from "../../../src/pages/auth/firebaseConfig";
import Cargando from "../../../src/components/Cargando";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [showChild, setShowChild] = useState(false);

  // app
  // .auth().setPersistence(app.auth.Auth.Persistence.NONE)
  // .then(function () {
  //   var provider = new app.auth.GoogleAuthProvider();
  //   // In memory persistence will be applied to the signed in Google user
  //   // even though the persistence was set to 'none' and a page redirect
  //   // occurred.
  //   console.log("Hola Mundo");

  //   return app.auth().signInWithRedirect(provider);
  // })
  // .catch(function (error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });

  useEffect(() => {
    app.auth().setPersistence(function (user) {
      setUsuario(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <Cargando />;
  } else {
    return (
      <Auth.Provider
        value={{
          usuario,
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
