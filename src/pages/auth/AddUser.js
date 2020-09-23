import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import Layout from "./../components/Layout";
import axios from "axios";

const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });
  const handleChange = (event) => {
    //user{email,password...}
    switch (event.target.id) {
      case "email":
        setUser({
          ...user,
          email: event.target.value,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: event.target.value,
        });
        break;
      case "returnSecureToken":
        setUser({
          ...user,
          returnSecureToken: event.target.value,
        });
        break;
      default:
    }
  };

  const createUser = () => {
    if (user.email.length > 0 && user.password > 0) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBn6swQCI6WXkTWBy3XNhth4vEOBxnGIP8",
          user
        )
        .then(({ data }) => {
          if (data.email) {
            history.push(`/accounts:signUp/${data.email}`);
          } else {
            alert("Algo salio mal");
          }
        })
        .catch(() => {
          // si sigues desarrollando el proyecto, si está en tus manos repararlo
          alert("Hay algo mal fuera de tus manos.");
        });
    } else {
      alert(
        "No has llenado todos los campos o has llenado de forma incorrecta un campo."
      );
    }
  };

  return (
    <>
      {/* <Layout className="container mh-100" title="Home"> */}
      {/* {JSON.stringify(user)} */}
      <h1>User e-mail:</h1>
      <div>
        <label htmlFor="title">email </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Password: </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>

      <br />
      <button type="submit" className="btn btn-primary" onClick={createUser}>
        Create User
      </button>
      <br />
      <br />
    </>
  );
};

export default AddUser;
