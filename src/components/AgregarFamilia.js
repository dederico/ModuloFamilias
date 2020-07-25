import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "./../components/Layout";
import axios from "axios";

const AddFamilia = () => {
  const history = useHistory();
  const [familia, setFamilia] = useState({
    apellidos: "",
    checkbox: false,
    ingresosMensuales: 0,
    gastosMensuales: 0,
    vivienda: "",
    espera: "",
    tiempo: 0,
    preparacion: 0,
    hijos: 0,
    edad: 0,
    riesgo: "",
    redesDeApoyo: 0,
  });
  const handleChange = (event) => {
    // task { title, descript...}
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case "apellidos":
        setFamilia({
          ...familia,
          apellidos: event.target.value,
        });
        break;
      case "checkbox":
        setFamilia({
          ...familia,
          checkbox: event.target.value,
        });
        break;
      case "ingresosMensuales":
        setFamilia({
          ...familia,
          ingresosMensuales: parseInt(event.target.value),
        });
        break;
      case "gastosMensuales":
        setFamilia({
          ...familia,
          gastosMensuales: parseInt(event.target.value),
        });
        break;
      case "vivienda":
        setFamilia({
          ...familia,
          vivienda: event.target.value,
        });
        break;
      case "espera":
        setFamilia({
          ...familia,
          espera: parseInt(event.target.value),
        });
        break;
      case "tiempo":
        setFamilia({
          ...familia,
          tiempo: parseInt(event.target.value),
        });
        break;
      case "preparacion":
        setFamilia({
          ...familia,
          preparacion: parseInt(event.target.value),
        });
        break;
      case "hijos":
        setFamilia({
          ...familia,
          hijos: parseInt(event.target.value),
        });
        break;
      case "edad":
        setFamilia({
          ...familia,
          edad: parseInt(event.target.value),
        });
        break;
      case "riesgo":
        setFamilia({
          ...familia,
          riesgo: event.target.value,
        });
        break;
      case "redesDeApoyo":
        setFamilia({
          ...familia,
          redesDeApoyo: parseInt(event.target.value),
        });
        break;
    }
    // task 'Title'
  };

  const createTask = () => {
    if (
      familia.apellidos.length > 0
      // familia.checkbox !== false &&
      // familia.ingresosMensuales > 0 &&
      // familia.gastosMensuales > 0 &&
      // familia.vivienda.length > 0 &&
      // familia.espera.length > 0 &&
      // familia.tiempo.length > 0 &&
      // familia.preparacion.length > 0 &&
      // familia.hijos >= 0 &&
      // familia.edad > 0 &&
      // familia.riesgo.length > 0 &&
      // familia.redesDeApoyo.length > 0
    ) {
      axios
        .post("https://adopciones-db12b.firebaseio.com//familias.json", familia)
        .then(({ data }) => {
          if (data.name) {
            history.push(`/familia/${data.name}`);
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
    <Layout className="container mh-100" title="Home">
      {JSON.stringify(familia)}
      <h1>Agregar Familia</h1>
      <div>
        <label htmlFor="title">Apellidos </label>
        <input
          type="text"
          className="form-control"
          id="apellidos"
          value={familia.apellidos}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Ingresos Mensuales : </label>
        <input
          type="text"
          className="form-control"
          id="ingresosMensuales"
          value={familia.ingresosMensuales}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Gastos Mensuales: </label>
        <input
          type="number"
          className="form-control"
          id="gastosMensuales"
          value={familia.gastosMensuales}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Preparada para adopcion: </label>
        <input
          type="checkbox"
          className="form-control"
          id="checkbox"
          value={familia.checkbox}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Vivienda: </label>
        <input
          type="text"
          className="form-control"
          id="vivienda"
          value={familia.vivienda}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Tiempo Dispoible de Atencion:</label>
        <input
          type="number"
          className="form-control"
          id="tiempo"
          value={familia.tiempo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Tiempo en lista de espera: </label>
        <input
          type="number"
          className="form-control"
          id="espera"
          value={familia.espera}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time"> Cursos de Preparacion:</label>
        <input
          type="number"
          className="form-control"
          id="preparacion"
          value={familia.preparacion}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Cantidad de Hijos: </label>
        <input
          type="number"
          className="form-control"
          id="hijos"
          value={familia.hijos}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Edad Promedio del Matrimonio: </label>
        <input
          type="number"
          className="form-control"
          id="edad"
          value={familia.edad}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Riesgo de contagio en rutinas: </label>
        <input
          type="text"
          className="form-control"
          id="riesgo"
          value={familia.riesgo}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Redes de Apoyo:</label>
        <input
          type="number"
          className="form-control"
          id="redesDeApoyo"
          value={familia.redesDeApoyo}
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary" onClick={createTask}>
        Agregar Familia
      </button>
      <br />
      <br />
    </Layout>
  );
};

export default AddFamilia;
