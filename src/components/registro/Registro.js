import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../NavbarRegistro";
import "../../components/registro/Registro.css";

const Registro = () => {
  // const history = useHistory();
  const [candidato, setCandidato] = useState({
    esSoltero: false,
  });

  const handleChange = (event) => {
    // task { title, descript...}
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case "nombre":
        setCandidato({
          ...candidato,
          nombre: event.target.value,
        });
        break;
      case "nacimiento":
        setCandidato({
          ...candidato,
          fechaNacimiento: event.target.value,
        });
        break;
      case "lugarNacimiento":
        setCandidato({
          ...candidato,
          lugarNacimiento: event.target.value,
        });
        break;
      case "nacionalidad":
        setCandidato({
          ...candidato,
          nacionalidad: event.target.value,
        });
        break;
      case "estadoCivil":
        setCandidato({
          ...candidato,
          estadoCivil: event.target.value,
        });
        break;
      case "escolaridad":
        setCandidato({
          ...candidato,
          escolaridad: event.target.value,
        });
        break;
      case "profesion":
        setCandidato({
          ...candidato,
          profesion: event.target.value,
        });
        break;
      case "ocupacion":
        setCandidato({
          ...candidato,
          ocupacion: event.target.value,
        });
        break;
      case "religion":
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
      <main className="flex-duo">
        <section className="d-flex justify-content-center">
          <div className="right">
            <h1>Registrate!</h1>
            <label htmlFor="title">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="Nombre"
              placeholder="Nombre Completo del Interesado"
              value={candidato.nombre}
              onChange={handleChange}
            />
            <label htmlFor="title">Fecha de Nacimiento </label>
            <input
              type="date"
              className="form-control"
              id="Nacimiento"
              placeholder="DD/MM/AA"
              value={candidato.fechaNacimiento}
              onChange={handleChange}
            />
            <label htmlFor="title">Lugar de nacimiento </label>
            <input
              type="text"
              className="form-control"
              id="LugarNacimiento"
              placeholder="Donde nacio?"
              value={candidato.lugarNacimiento}
              onChange={handleChange}
            />
            <label htmlFor="title">Nacionalidad </label>
            <input
              type="text"
              className="form-control"
              id="Nacionalidad"
              placeholder="Nacionalidad del Interesado(a)"
              value={candidato.nacionalidad}
              onChange={handleChange}
            />
            <label htmlFor="title">Estado Civil </label>
            <input
              type="text"
              className="form-control"
              id="EstadoCivil"
              placeholder="Estado Civil del interesado(a)"
              value={candidato.estadoCivil}
              onChange={handleChange}
            />
            <label htmlFor="title">Escolaridad </label>
            <input
              type="text"
              className="form-control"
              id="Escolaridad"
              placeholder="Escolaridad maxima"
              value={candidato.escolaridad}
              onChange={handleChange}
            />
            <label htmlFor="title">Profesion </label>
            <input
              type="text"
              className="form-control"
              id="Profesion"
              placeholder="Profesion del Interesado(a)"
              value={candidato.profesion}
              onChange={handleChange}
            />
            <label htmlFor="title">Ocupacion </label>
            <input
              type="text"
              className="form-control"
              id="Ocupacion"
              placeholder="Ocupacion actual del Interesado(a)"
              value={candidato.ocupacion}
              onChange={handleChange}
            />
            <label htmlFor="title">Religion </label>
            <input
              type="text"
              className="form-control"
              id="Religion"
              placeholder="Religion del Interesado(a)"
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
          </div>
        </section>

        <aside>
          <img src="/img/dif.png" alt="Dif" />
        </aside>
      </main>
    </>
  );
};

export default Registro;
