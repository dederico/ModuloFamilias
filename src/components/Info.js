import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import Layout from "./../components/Layout";
import C from "../components/Familia";
import axios from "axios";

const Familia = () => {
  const { id } = useParams();
  const [fam, setFam] = useState({});
  const [error, setError] = useState(null);

  useEffect(
    () => {
      getFamilia();
    }
    //[]
  );

  const getFamilia = () => {
    axios
      .get(`https://adopciones-db12b.firebaseio.com/familias/${id}.json`)
      .then(({ data, status }) => {
        if (data !== null) {
          setFam(data);
        } else {
          setError("No existe esa familia");
        }
      })
      .catch(({ response }) => {
        setError(response);
      });
  };
  return (
    <>
      <h1>Familia</h1>
      <h2>{id}</h2>
      {error ? (
        <h1>(JSON.stringify(error)}</h1>
      ) : (
        <C
          apellidos={id}
          checkbox={fam.checkbox}
          ingresosMensuales={fam.ingresosMensuales}
          gastosMensuales={fam.gastosMensuales}
          vivienda={fam.vivienda}
        />
      )}
      <Link to="/">
        <button className="btn btn-primary btn-">Inicio</button>
      </Link>
    </>
  );
};
export default Familia;
