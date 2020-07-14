import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout";
import AddFamilia from "./../components/AgregarFamilia";
import axios from "axios";
import FamiliaEvaluada from "./../components/FamiliaEvaluada";

const Home = () => {
  const [familia, setFamilia] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getFamilia();
  }, []);

  const getFamilia = () => {
    axios
      .get("https://adopciones-db12b.firebaseio.com//familias.json")
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

  const showFamilias = () => {
    return error ? (
      <h1>{error}</h1>
    ) : (
      Object.keys(familia).map((familia) => (
        <AddFamilia
          apellido={familia[familia].apellido}
          checkbox={false}
          ingresosMensuales={familia[familia].ingresosMensuales}
          gastosMensuales={familia[familia].gastosMensuales}
          vivienda={familia[familia].vivienda}
          isHome={true}
        />
      ))
    );
  };
  const evalFamilia = () => {
    return error ? (
      <h1>{error}</h1>
    ) : (
      Object.keys(familia).map((familia) => (
        <FamiliaEvaluada
          ingresosMensuales={familia[familia].ingresosMensuales}
          gastosMensuales={familia[familia].gastosMensuales}
          vivienda={familia[familia].vivenda}
        />
      ))
    );
  };

  return (
    <Layout title="Home">
      <div className="d-flex justify-content-center flex-wrap overflow-auto ">
        {showFamilias()}
        {evalFamilia()}
      </div>
    </Layout>
  );
};

export default Home;
