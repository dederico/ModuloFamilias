import React, { useEffect, useState } from "react";

const FamiliaEvaluada = ({
  ingresosMensuales,
  gastosMensuales,
  vivienda,
  apellidos,
}) => {
  const [viable, setViable] = useState(false);
  useEffect(() => {
    /* eslint-disable */
    ingresosMensuales - gastosMensuales > 0 && vivienda === "Propia"
      ? setViable(true)
      : setViable(false);
    //vivienda === "Propia" ? setViable(true) : setViable(false);
  }, []);
  return (
    <>
      <p>
        {apellidos} <b>{viable ? "Es viable" : "No es viable"}</b>
      </p>
      <br />
    </>
  );
};
export default FamiliaEvaluada;
