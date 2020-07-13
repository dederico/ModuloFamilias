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
    }
    // task 'Title'
  };

  const createTask = () => {
    if (
      familia.apellidos.length > 0 &&
      familia.checkbox !== false &&
      familia.ingresosMensuales > 0 &&
      familia.gastosMensuales > 0 &&
      familia.vivienda.length > 0
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
        <div className="form-group">
          <label for="title">Apellidos </label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            value={familia.apellidos}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="description">Ingresos Mensuales : </label>
          <input
            type="text"
            className="form-control"
            id="ingresosMensuales"
            value={familia.ingresosMensuales}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="time">Gastos Mensuales: </label>
          <input
            type="text"
            className="form-control"
            id="gastosMensuales"
            value={familia.gastosMensuales}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="priority">Preparada para adopcion: </label>
          <input
            type="checkbox"
            className="form-control"
            id="checkbox"
            value={familia.checkbox}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="priority">Vivienda: </label>
          <input
            type="text"
            className="form-control"
            id="vivienda"
            value={familia.vivienda}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={createTask}>
          Agregar Familia
        </button>
      </div>
    </Layout>
  );
};

export default AddFamilia;
