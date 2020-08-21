import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../../components/NavbarRegistro";
import "./Domicilio.css";

const Domicilio = () => {
  // const history = useHistory();
  const [candidato, setCandidato] = useState({
    esSoltero: false,
  });

  const handleChange = (event) => {
    // task { title, descript...}
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case "Calle":
        setCandidato({
          ...candidato,
          calle: event.target.value,
        });
        break;
      case "colonia":
        setCandidato({
          ...candidato,
          colonia: event.target.value,
        });
        break;
      case "estado":
        setCandidato({
          ...candidato,
          estado: event.target.value,
        });
        break;
      case "telefono":
        setCandidato({
          ...candidato,
          telefono: event.target.value,
        });
        break;
      case "numero":
        setCandidato({
          ...candidato,
          numero: event.target.value,
        });
        break;
      case "municipio":
        setCandidato({
          ...candidato,
          municipio: event.target.value,
        });
        break;
      case "codigoPostal":
        setCandidato({
          ...candidato,
          codigoPostal: event.target.value,
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
      <main>
        <div className="container">
          <h1>Domicilio!</h1>
          <label htmlFor="title">Calle</label>
          <input
            type="text"
            className="form-control"
            id="calleDomicilio"
            placeholder="Nombre de la calle del domicilio"
            value={candidato.calle}
            onChange={handleChange}
          />
          <label htmlFor="title">Numero</label>
          <input
            type="number"
            className="form-control"
            id="numeroDomicilio"
            placeholder="#300"
            value={candidato.numero}
            onChange={handleChange}
          />
          <label htmlFor="title">Colonia</label>
          <input
            type="text"
            className="form-control"
            id="coloniaDomicilio"
            placeholder="Colonia del Domicilio"
            value={candidato.colonia}
            onChange={handleChange}
          />
          <label htmlFor="title">Municipio</label>
          <input
            type="text"
            className="form-control"
            id="municipioDomicilio"
            placeholder="Municipio donde se ubica el domicilio."
            value={candidato.municipio}
            onChange={handleChange}
          />
          <label htmlFor="title">Estado </label>
          <input
            type="text"
            className="form-control"
            id="estado"
            placeholder="Estado donde se ubica el domicilio "
            value={candidato.estado}
            onChange={handleChange}
          />
          <label htmlFor="title">Codigo Postal </label>
          <input
            type="text"
            className="form-control"
            id="codigoPostal"
            placeholder="C.P."
            value={candidato.codigoPostal}
            onChange={handleChange}
          />
          <label htmlFor="title">Telefono </label>
          <input
            type="tel"
            className="form-control"
            id="Telefono"
            placeholder="Telefono"
            value={candidato.telefono}
            onChange={handleChange}
          />
        </div>
        <aside>
          <img src="../img/dif.png" alt="Dif" />
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

export default Domicilio;
