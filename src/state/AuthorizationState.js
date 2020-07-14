import React, { useEffect, useState, createContext, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Auth, Hub } from "aws-amplify";

export const AuthorizationContext = createContext();

export const AuthorizationProviderWithRouter = ({ children, history }) => {
  const [userId, setUserId] = useState("");
  console.log(setUserId);
  const checkLoggedIn = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      console.log(userData);
    } catch (error) {
      history.push("/");
      console.log(error);
    }
  };
  useEffect(() => {
    Hub.listen("auth", (data) => {
      const { payload } = data;
      // this.onAuthEvent(payload);
      console.log(
        "A new auth event has happened: ",
        data.payload.data.username + " has " + data.payload.event
      );

      if (payload.event === "signOut") {
        history.push("/");
      } else if (payload.event === "signIn") {
        history.push("/dashboard");
      }
    });
  }, []);
  return (
    <AuthorizationContext.Provider
      value={{
        userId,
        checkLoggedIn,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};

export const AuthorizationProvider = withRouter(
  AuthorizationProviderWithRouter
);

export const useStateValue = () => useContext(AuthorizationContext);
