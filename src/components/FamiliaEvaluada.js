import React, { useEffect, useState } from "react";

const FamiliaEvaluada = ({
  ingresosMensuales,
  gastosMensuales,
  vivienda,
  apellidos,
  espera,
  tiempo,
  preparacion,
  hijos,
  edad,
  riesgo,
  redesDeApoyo,
}) => {
  const [calificacion, setCalificacion] = useState(0);

  const getIngresos = (ingresosMensuales) => {
    if (ingresosMensuales >= 80000) {
      return 5;
    } else if (ingresosMensuales < 80000 && ingresosMensuales >= 30001) {
      return 4;
    } else if (ingresosMensuales < 30000 && ingresosMensuales >= 15001) {
      return 3;
    } else if (ingresosMensuales < 15000 && ingresosMensuales >= 8001) {
      return 2;
    } else if (ingresosMensuales < 8000 && ingresosMensuales >= 1) {
      return 1;
    }
    // en caso de no caer en returns anteriores, va a regresar esto de abajo
    return 0;
  };

  const getVivienda = (vivienda) => {
    if (vivienda === "Propia") {
      return 5;
    } else if (vivienda === "Credito Hipotecario") {
      return 4;
    } else if (vivienda === "Familiar") {
      return 3;
    } else if (vivienda === "Arrendamiento") {
      return 2;
    } else if (vivienda === "Desconocido") {
      return 1;
    }
    return 0;
  };

  const getGastos = (gastosMensuales) => {
    if ((gastosMensuales * 100) / ingresosMensuales < 30) {
      return 5;
    } else if (
      (gastosMensuales * 100) / ingresosMensuales < 60 &&
      (gastosMensuales * 100) / ingresosMensuales > 31
    ) {
      return 4;
    } else if (
      (gastosMensuales * 100) / ingresosMensuales < 90 &&
      (gastosMensuales * 100) / ingresosMensuales > 61
    ) {
      return 3;
    } else if (
      (gastosMensuales * 100) / ingresosMensuales < 100 &&
      (gastosMensuales * 100) / ingresosMensuales > 91
    ) {
      return 2;
    } else if ((gastosMensuales * 100) / ingresosMensuales > 100) {
      return 1;
    }
    return 0;
  };

  const getEspera = (espera) => {
    if (espera >= 36) {
      return 5;
    } else if (espera < 36 && espera > 24) {
      return 4;
    } else if (espera < 24 && espera > 12) {
      return 3;
    } else if (espera < 12 && espera > 6) {
      return 2;
    } else if (espera < 6 && espera > 1) {
      return 1;
    }
    return 0;
  };
  const getTiempo = (tiempo) => {
    if (tiempo >= 12) {
      return 5;
    } else if (tiempo < 12 && tiempo > 9) {
      return 4;
    } else if (tiempo < 9 && tiempo > 6) {
      return 3;
    } else if (tiempo < 6 && tiempo > 3) {
      return 2;
    } else if (tiempo < 3 && tiempo > 1) {
      return 1;
    }
    return 0;
  };
  const getPreparacion = (preparacion) => {
    if (preparacion >= 3) {
      return 5;
    } else if (preparacion < 3 && preparacion >= 2) {
      return 4;
    } else if (preparacion < 2 && preparacion >= 1) {
      return 3;
    } else if (preparacion <= 1 && preparacion > 0) {
      return 2;
    }
    return 0;
  };
  const getHijos = (hijos) => {
    if (hijos === 0) {
      return 5;
    } else if (hijos === 1) {
      return 4;
    } else if (hijos === 2) {
      return 3;
    } else if (hijos === 3) {
      return 2;
    } else if (hijos > 3) {
      return 1;
    }
    return 0;
  };
  const getEdad = (edad) => {
    if (edad <= 35 && edad >= 25) {
      return 5;
    } else if (edad > 36 && edad <= 43) {
      return 4;
    } else if (edad > 44 && edad <= 52) {
      return 3;
    } else if (edad > 53 && edad <= 61) {
      return 2;
    } else if (edad > 62) {
      return 1;
    }
    return 0;
  };

  const getRiesgo = (riesgo) => {
    if (riesgo === "Nulo") {
      return 5;
    } else if (riesgo === "Poco") {
      return 4;
    } else if (riesgo === "Moderado") {
      return 3;
    } else if (riesgo === "ALgo") {
      return 2;
    } else if (riesgo === "Mucho") {
      return 1;
    }
    return 0;
  };

  const getRedesDeApoyo = (redesDeApoyo) => {
    if (redesDeApoyo >= 5) {
      return 5;
    } else if (redesDeApoyo === 4) {
      return 4;
    } else if (redesDeApoyo === 3) {
      return 3;
    } else if (redesDeApoyo === 2) {
      return 2;
    } else if (redesDeApoyo === 1) {
      return 1;
    }
    return 0;
  };

  const calculoCalificacion = () => {
    const calificacionPrevia =
      calificacion +
      getIngresos(ingresosMensuales) +
      getGastos(gastosMensuales) +
      getVivienda(vivienda) +
      getEspera(espera) +
      getTiempo(tiempo) +
      getPreparacion(preparacion) +
      getHijos(hijos) +
      getEdad(edad) +
      getRiesgo(riesgo) +
      getRedesDeApoyo(redesDeApoyo);
    // + ... + ...
    // getVivienda
    // getGastos
    // ...
    const calificacionTotal = calificacionPrevia * 2;
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
