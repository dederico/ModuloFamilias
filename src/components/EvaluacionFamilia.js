import React, { useState, useEffect } from "react";
// import Layout from "./../components/Layout";
// import AddFamilia from "./../components/AgregarFamilia";
import axios from "axios";
import FamiliaEvaluada from "./../components/FamiliaEvaluada";

const EvaluacionFamilia = () => {
  const [familia, setFamilia] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getFamilia();
  }, []);

  const getFamilia = () => {
    axios
      .get("https://adopciones-db12b.firebaseio.com/familias.json")
      .then(({ data, status }) => {
        if (data !== null) {
          setFamilia(data);
        } else {
          setError("No hay familias");
        }
      })
      .catch(({ response }) => {
        setError(response);
      });
  };

  const evalFamilia = () => {
    return error ? (
      <h1>{JSON.stringify(error)}</h1>
    ) : (
      Object.keys(familia).map((f) => (
        <FamiliaEvaluada
          f={f}
          apellidos={familia[f].apellidos}
          ingresosMensuales={familia[f].ingresosMensuales}
          gastosMensuales={familia[f].gastosMensuales}
          vivienda={familia[f].vivienda}
        />
      ))
    );
  };

  return (
    <div className="d-flex justify-content-center flex-wrap overflow-auto ">
      {evalFamilia(familia)}
    </div>
  );
};

export default EvaluacionFamilia;
