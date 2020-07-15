import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "./../components/Layout";
import axios from "axios";
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   Input,
//   Button,
//   DropdownToggle,
//   InputGroupButtonDropdown,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";

const AddFamilia = () => {
  // const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  // const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

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
        {/* <br />
        <label for="title">Apellidos</label>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Familia:</InputGroupText>
            <Input
              pladecholder="Apellidos"
              type="text"
              value={familia.apellidos}
              onChange={handleChange}
            />
          </InputGroupAddon>
        </InputGroup> */}
        <label for="title">Apellidos </label>
        <input
          type="text"
          className="form-control"
          id="apellidos"
          value={familia.apellidos}
          onChange={handleChange}
        />
      </div>
      {/* <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Ingresos Mensuales</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder=" $ Cantidad de Ingresos Mensuales totales de la familia"
            value={familia.ingresosMensuales}
            onChange={handleChange}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>MXN</InputGroupText>
          </InputGroupAddon>
        </InputGroup> */}
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
      {/* <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Gastos Mensuales</InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder=" $ Cantidad de Gastos Mensuales totales de la familia"
            value={familia.gastosMensuales}
            onChange={handleChange}
          />
          <InputGroupAddon addonType="append">
            <InputGroupText>MXN</InputGroupText>
          </InputGroupAddon>
        </InputGroup> */}
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
      {/* <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input
                addon
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Familia autorizada para adopcion"
            value={familia.checkbox}
            onChange={handleChange}
          />
        </InputGroup> */}
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
      {/* <br />
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={splitButtonOpen}
            toggle={toggleSplit}
          >
            <Button outline>Vivienda</Button>
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem>Propia</DropdownItem>
              <DropdownItem>En Credito</DropdownItem>
              <DropdownItem>Familiar</DropdownItem>
              <DropdownItem>Arrendamiento</DropdownItem>
              <DropdownItem>Desconocido</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input
            placeholder="Propiedad de la vivienda"
            value={familia.vivienda}
            onChange={handleChange}
          />
        </InputGroup> */}
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
