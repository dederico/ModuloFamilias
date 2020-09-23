import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../../components/NavbarRegistro";
import "./Familia.css";

const OrganizacionFamiliar = () => {
  // const history = useHistory();
  const [candidato, setCandidato] = useState({
    esSoltero: false,
  });

  const handleChange = (event) => {
    // task { title, descript...}
    // eslint-disable-next-line default-case
    switch (event.target.value) {
      case "Hijos":
        setCandidato({
          ...candidato,
          hijos: event.target.value,
        });
        break;
      case "cantidadHijos":
        setCandidato({
          ...candidato,
          cantidadHijos: event.target.value,
        });
        break;
      case "nombreHijo1":
        setCandidato({
          ...candidato,
          nombreHijo1: event.target.value,
        });
        break;
      case "edadHijo1":
        setCandidato({
          ...candidato,
          edadHijo1: event.target.value,
        });
        break;
      case "fechaNacimientoHijo1":
        setCandidato({
          ...candidato,
          fechaNacimientoHijo1: event.target.value,
        });
        break;
      case "lugarNacimientoHijo1":
        setCandidato({
          ...candidato,
          lugarNacimientoHijo1: event.target.value,
        });
        break;
      case "nacionalidadHijo1":
        setCandidato({
          ...candidato,
          nacionalidadHijo1: event.target.value,
        });
        break;
      case "escolaridadHijo1":
        setCandidato({
          ...candidato,
          escolaridadHijo1: event.target.value,
        });
        break;
      case "otrasPersonasEnCasa":
        setCandidato({
          ...candidato,
          otrasPersonasEnCasa: event.target.value,
        });
        break;
      case "otrasPersonas1Nombre":
        setCandidato({
          ...candidato,
          otrasPersonas1Nombre: event.target.value,
        });
        break;
      case "otrasPersonas1Edad":
        setCandidato({
          ...candidato,
          otrasPersonas1Edad: event.target.value,
        });
        break;
      case "otrasPersonas1Parentesco":
        setCandidato({
          ...candidato,
          otrasPersonas1Parentesco: event.target.value,
        });
        break;
      case "otrasPersonas1Ocupacion":
        setCandidato({
          ...candidato,
          otrasPersonas1Ocupacion: event.target.value,
        });
        break;
      default:
        alert("Algo no está funcionando :c");
        break;
    }
  };

  const createCandidato = () => {
    if (candidato.nombre.length > 0) {
      axios
        .post("https://adopciones-db12b-3ba3f.firebaseio.com/familias.json", {
          clave: candidato.nombre,
          fechaDeCreacion: new Date(),
        })
        .then(({ data }) => {
          if (data.name) {
            // data.name es el nuevo id
            axios
              .post(
                `https://adopciones-db12b-3ba3f.firebaseio.com/familias/${data.name}/interesados.json`,
                candidato
              )
              .then(({ data }) => alert(data));
            // history.push(`/familia/${data.nombreEl}`);
          } else {
            alert("Algo salio mal en la peticón de crear familiar" + data);
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
    <>
      <NavbarRegistro />
      <main>
        <div className="container-familia">
          <h1>Organizacion Familiar!</h1>

          <label htmlFor="title">Hijos</label>
          <input
            type="checkbox"
            className="form-control"
            id="hijos"
            placeholder="SI o NO "
            value={candidato.hijos}
            onChange={handleChange}
          />
          <label htmlFor="number">Cantidad de hijos</label>
          <input
            type="number"
            className="form-control"
            id="cantidadHijos"
            placeholder="Cantidad de hijos de la familia"
            value={candidato.cantidadHijos}
            onChange={handleChange}
          />
          <label htmlFor="title">Nombre de Hijo</label>
          <input
            type="text"
            className="form-control"
            id="nombrehijo1"
            placeholder="Nombre de Hijo"
            value={candidato.nombreHijo1}
            onChange={handleChange}
          />
          <label htmlFor="title">Edad de Hijo</label>
          <input
            type="number"
            className="form-control"
            id="edadHijo1"
            placeholder="Edad de Hijo"
            value={candidato.edadHijo1}
            onChange={handleChange}
          />
          <label htmlFor="title">Fecha de Nacimiento </label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimientoHijo1"
            placeholder="Fecha de Nacimiento"
            value={candidato.fechaNacimientoHijo1}
            onChange={handleChange}
          />
          <label htmlFor="title">Lugar de Nacimiento de Hijo</label>
          <input
            type="text"
            className="form-control"
            id="lugarNacimientoHijo1"
            placeholder="Lugar de Nacimiento de Hijo"
            value={candidato.lugarNacimientoHijo1}
            onChange={handleChange}
          />
          <label htmlFor="title">Nacionalidad de Hijo </label>
          <input
            type="text"
            className="form-control"
            id="nacionalidadHijo1"
            placeholder="Nacionalidad de Hijos"
            value={candidato.nacionalidadHijo1}
            onChange={handleChange}
          />
          <label htmlFor="title">Escolaridad de Hijo</label>
          <input
            type="text"
            className="form-control"
            id="escolaridadHijo1"
            placeholder="Escolaridad de Hijo"
            value={candidato.escolaridadHijo1}
            onChange={handleChange}
          />
          <label htmlFor="title">Otras Personas en casa</label>
          <input
            type="text"
            className="form-control"
            id="otrasPersonasEnCasa"
            placeholder="Otras Personas viviendo en el domicilio"
            value={candidato.otrasPersonasEnCasa}
            onChange={handleChange}
          />
          <label htmlFor="title">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="otrasPersonas1Nombre"
            placeholder="Nombre completo"
            value={candidato.otrasPersonas1Nombre}
            onChange={handleChange}
          />
          <label htmlFor="title">Edad</label>
          <input
            type="number"
            className="form-control"
            id="otrasPersonas1Edad"
            placeholder="Edad"
            value={candidato.otrasPersonas1Edad}
            onChange={handleChange}
          />
          <label htmlFor="title">Parentesco</label>
          <input
            type="text"
            className="form-control"
            id="otrasPersonas1Parentesco"
            placeholder="Parentesco"
            value={candidato.otrasPersonas1Parentesco}
            onChange={handleChange}
          />
          <label htmlFor="title">Ocupacion</label>
          <input
            type="text"
            className="form-control"
            id="otrasPersonas1Ocupacion"
            placeholder="Ocupacion"
            value={candidato.otrasPersonas1Ocupacion}
            onChange={handleChange}
          />
        </div>
        <aside>
          <div>
            <img src="../img/dif.png" alt="Dif" />
          </div>
        </aside>
      </main>
      <br />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={createCandidato}
      >
        Completar Registro
      </button>
    </>
  );
};

export default OrganizacionFamiliar;
