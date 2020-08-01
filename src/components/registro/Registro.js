import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../NavbarRegistro";
import "../../components/registro/Registro.css";

const Registro = () => {
  const history = useHistory();
  const [candidato, setCandidato] = useState({
    esSoltero: false,
  });

  const handleChange = (event) => {
    // task { title, descript...}
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case "NombrePadre":
        setCandidato({
          ...candidato,
          nombre: event.target.value,
        });
        break;
      case "NacimientoPadre":
        setCandidato({
          ...candidato,
          fechaNacimiento: event.target.value,
        });
        break;
      case "LugarNacimientoPadre":
        setCandidato({
          ...candidato,
          lugarNacimiento: event.target.value,
        });
        break;
      case "NacionalidadPadre":
        setCandidato({
          ...candidato,
          nacionalidad: event.target.value,
        });
        break;
      case "EstadoCivilPadre":
        setCandidato({
          ...candidato,
          estadoCivil: event.target.value,
        });
        break;
      case "EscolaridadEl":
        setCandidato({
          ...candidato,
          escolaridad: event.target.value,
        });
        break;
      case "ProfesionEl":
        setCandidato({
          ...candidato,
          profesion: event.target.value,
        });
        break;
      case "OcupacionEl":
        setCandidato({
          ...candidato,
          ocupacion: event.target.value,
        });
        break;
      case "ReligionEl":
        setCandidato({
          ...candidato,
          religion: event.target.value,
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
            alert("Algo salio mal en la peticón de crear familiar");
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
      <h1>Registrate!</h1>

      <label htmlFor="title">Nombre Completo del Padre</label>
      <input
        type="text"
        className="form-control"
        id="NombrePadre"
        placeholder="Nombre Completo del Padre"
        value={candidato.nombre}
        onChange={handleChange}
      />
      <label htmlFor="title">Fecha de Nacimiento Padre </label>
      <input
        type="date"
        className="form-control"
        id="NacimientoPadre"
        placeholder="DD/MM/AA"
        value={candidato.fechaNacimiento}
        onChange={handleChange}
      />
      <label htmlFor="title">Lugar de nacimiento del Padre </label>
      <input
        type="text"
        className="form-control"
        id="LugarNacimientoPadre"
        placeholder="Donde nacio el Padre"
        value={candidato.lugarNacimiento}
        onChange={handleChange}
      />
      <label htmlFor="title">Nacionalidad del Padre </label>
      <input
        type="text"
        className="form-control"
        id="NacionalidadPadre"
        placeholder="Nacionalidad del Padre"
        value={candidato.nacionalidad}
        onChange={handleChange}
      />
      <label htmlFor="title">Estado Civil del Padre </label>
      <input
        type="text"
        className="form-control"
        id="EstadoCivilPadre"
        placeholder="Estado Civil del Padre"
        value={candidato.estadoCivil}
        onChange={handleChange}
      />
      <label htmlFor="title">Escolaridad </label>
      <input
        type="text"
        className="form-control"
        id="EscolaridadEl"
        placeholder="Escolaridad maxima del Padre"
        value={candidato.escolaridad}
        onChange={handleChange}
      />
      <label htmlFor="title">Profesion </label>
      <input
        type="text"
        className="form-control"
        id="ProfesionEl"
        placeholder="Profesion del Padre"
        value={candidato.profesion}
        onChange={handleChange}
      />
      <label htmlFor="title">Ocupacion </label>
      <input
        type="text"
        className="form-control"
        id="OcupacionEl"
        placeholder="Ocupacion actual del Padre"
        value={candidato.ocupacion}
        onChange={handleChange}
      />
      <label htmlFor="title">Religion </label>
      <input
        type="text"
        className="form-control"
        id="ReligionEl"
        placeholder="Religion del Padre"
        value={candidato.religion}
        onChange={handleChange}
      />
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

export default Registro;
