import React, { useEffect, useState } from "react";

const FamiliaEvaluada = ({
  ingresosMensuales,
  gastosMensuales,
  vivienda,
  apellidos,
}) => {
  const [calificacion, setCalificacion] = useState(0);

  const getIngresos = (ingresosMensuales) => {
    if (ingresosMensuales >= 80000) {
      return 5;
    } else if (ingresosMensuales < 80000 && ingresosMensuales >= 30001) {
      return 4;
    }
    // en caso de no caer en returns anteriores, va a regresar esto de abajo
    return 0;
  };

  const calculoCalificacion = () => {
    const calificacionPrevia = calificacion + getIngresos(ingresosMensuales); // + ... + ...
    // getVivienda
    // getGastos
    // ...
    const calificacionTotal = (calificacionPrevia * 100) / 50;
    setCalificacion(calificacionTotal);
  };
  useEffect(() => {
    /* eslint-disable */
    calculoCalificacion();
  }, []);
  return (
    <>
      <p>
        {apellidos} <b>{calificacion}</b>
      </p>
      <br />
    </>
  );
};
export default FamiliaEvaluada;
