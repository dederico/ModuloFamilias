import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import OuterFamiliaCard from "../components/OuterFamiliaCard";
import EvaluacionFamilia from "../components/EvaluacionFamilia";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardFamilia = () => {
  const { id } = useParams();
  const [informacionUsuario] = useState(
    window.sessionStorage.getItem("idToken")
  );
  const [familias, setFamilias] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getFamilias();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFamilias = () => {
    axios
      .get(`https://adopciones-db12b.firebaseio.com/familias.json`)
      .then(({ data, status }) => {
        if (data !== null) {
          setFamilias(data);
        } else {
          setError("No hay familias");
        }
      })
      .catch(({ response }) => {
        console.log(response);
        setError(response);
      });
  };
  const showFamilias = () => {
    return error ? (
      <h1>{error}</h1>
    ) : (
      Object.keys(familias).map((familia) => (
        <OuterFamiliaCard
          familias={familias}
          apellidos={familias[familia].apellidos}
          checkbox={familias[familia].checkbox}
          ingresosMensuales={familias[familia].ingresosMensuales}
          gastosMensuales={familias[familia].gastosMensuales}
          vivienda={familias[familia].vivienda}
        />
      ))
    );
  };

  return (
    <Layout>
      <div className="container">
        <div className="parent white">
          <div className="box green">
            <div className="row">{showFamilias()}</div>
            {informacionUsuario}
          </div>
        </div>
      </div>
      <EvaluacionFamilia />
      <br />
    </Layout>
  );
};
export default CardFamilia;
