import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import user from "../pages/auth/AuthAccount";

function PrivateRoute({ children, ...rest }) {
  return (
    // {
    //     fakeAuth = () =>
    //         ({
    //             isAuthenticated: false,
    //             authenticate(cb) {
    //                 fakeAuth.isAuthenticated = true;
    //                 setTimeout(cb, 100); // fake async
    //             },
    //             signout(cb) {
    //                 fakeAuth.isAuthenticated = false;
    //                 setTimeout(cb, 100);
    //             },
    //         }
    //         )},
    <Route
      {...rest}
      render={({ location }) =>
        window.sessionStorage.getItem("idToken") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
