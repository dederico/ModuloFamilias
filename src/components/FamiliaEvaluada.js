import React from "react";

const FamiliaEvaluada = ({ ingresosMensuales, gastosMensuales, vivienda }) => {
  return (
    <h1>
      {ingresosMensuales - gastosMensuales > 0 && vivienda
        ? "Es viable"
        : "No es viable"}
    </h1>
  );
};
export default FamiliaEvaluada;
