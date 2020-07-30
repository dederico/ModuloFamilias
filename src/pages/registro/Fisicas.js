import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../../components/NavbarRegistro";
import "../../components/registro/Registro.css";

const Fisicas = () => {
  const history = useHistory();
  const [candidato, setCandidato] = useState({
    candidatos: [
      {
        DatosGenerales: [
          {
            nombreEl: "",
            nombreElla: "",
            FechaNacimientoEl: "DD/MM/AA",
            FechaNacimientoElla: "DD/MM/AA",
            LugarNacimientoEl: "",
            LugarNacimientoElla: "",
            NacionalidadEl: "",
            NacionalidadElla: "",
            EstadoCivilEl: "",
            EstadoCivilElla: "",
            FechaDeMatrimonio: "DD/MM/AA",
            EscolaridadEl: "",
            EscolaridadElla: "",
            ProfesionEl: "",
            ProfesionElla: "",
            OcupacionEl: "",
            OcupacionElla: "",
            ReligionEl: "",
            ReligionElla: "",
            EstaturaEl: "",
          },
        ],
        DescripcionFisica: [
          {
            EstaturaEl: 0,
            EstaturaElla: 0,
            PesoEl: 0,
            PesoElla: 0,
            ColorOjosEl: "",
            ColorOjosElla: "",
            ComplexionEl: "",
            ComplexionElla: "",
            TezEl: "",
            TezElla: "",
          },
        ],
        Domicilio: [
          {
            Calle: "",
            Colonia: "",
            Estado: "",
            Telefono: "",
            Numero: "",
            Municipio: "",
            CodigoPostal: 0,
          },
        ],
        OrganizacionFamiliar: [
          {
            Hijos: false,
            CantidadHijos: 0,
            NombreHijo1: "",
            EdadHijo1: 0,
            FechaNacimientoHijo1: "DD/MM/AA",
            LugarNacimientoHijo1: "DD/MM/AA",
            NacionalidadHijo1: "DD/MM/AA",
            EscolaridadHijo1: "DD/MM/AA",
            OtrasPersonasEnCasa: false,
            OtrasPersonas1Nombre: "",
            OtrasPersonas1Edad: 0,
            OtrasPersonas1Parentesco: "",
            OtrasPersonas1Ocupacion: "",
          },
        ],
        DatosFamiliares: [
          {
            PaternoMadreNombre: "",
            PaternoPadreNombre: "",
            PaternoMadreEdad: "",
            PaternoPadreEdad: "",
            PaternoMadreNacionalidad: "",
            PaternoPadreNacionalidad: "",
            PaternoDomicilio: "",
            MaternoMadreNombre: "",
            MaternoPadreNombre: "",
            MaternoMadreEdad: "",
            MaternoPadreEdad: "",
            MaternoMadreNacionalidad: "",
            MaternoPadreNacionalidad: "",
            MaternoDomicilio: "",
          },
        ],
      },
    ],
  });
  const handleChange = (event) => {
    // task { title, descript...}
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case "EstaturaEl":
        setCandidato({
          ...candidato,
          EstaturaEl: event.target.value,
        });
        break;
      case "EstaturaElla":
        setCandidato({
          ...candidato,
          EstaturaElla: event.target.value,
        });
        break;
      case "PesoEl":
        setCandidato({
          ...candidato,
          PesoElla: event.target.value,
        });
        break;
      case "PesoElla":
        setCandidato({
          ...candidato,
          PesoElla: event.target.value,
        });
        break;
      case "ColorOjosEl":
        setCandidato({
          ...candidato,
          ColorOjosEl: event.target.value,
        });
        break;
      case "ColorOjosElla":
        setCandidato({
          ...candidato,
          ColorOjosElla: event.target.value,
        });
        break;
      case "ComplexionEl":
        setCandidato({
          ...candidato,
          ComplexionEl: event.target.value,
        });
        break;
      case "ComplexionElla":
        setCandidato({
          ...candidato,
          ComplexionElla: event.target.value,
        });
        break;
      case "TezEl":
        setCandidato({
          ...candidato,
          TezEl: event.target.value,
        });
        break;
      case "TezElla":
        setCandidato({
          ...candidato,
          TezElla: event.target.value,
        });
        break;
    }
  };

  const createCandidato = () => {
    if (candidato.PesoEl.length > 0) {
      axios
        .post(
          "https://adopciones-db12b-3ba3f.firebaseio.com/Candidatos.json",
          candidato
        )
        .then(({ data }) => {
          if (data.nombreEl) {
            history.push(`/familia/${data.nombreEl}`);
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
    <>
      <NavbarRegistro />
      <h1>Resgistra Aqui tu informacion Fisica</h1>

      <label htmlFor="title">Estatura del Padre</label>
      <input
        type="number"
        className="form-control"
        id="EstaturaPadre"
        placeholder="Estatura del Padre"
        value={candidato.EstaturaEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Estatura de la Madre</label>
      <input
        type="number"
        className="form-control"
        id="NombreMadre"
        placeholder="Estatura de la Madre"
        value={candidato.EstaturaElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Peso del Padre </label>
      <input
        type="number"
        className="form-control"
        id="PesoPadre"
        placeholder="Peso en KG"
        value={candidato.PesoEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Peso de la Madre </label>
      <input
        type="number"
        className="form-control"
        id="PesoMadre"
        placeholder="Peso en KG"
        value={candidato.PesoElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Color de Ojose del Padre </label>
      <input
        type="text"
        className="form-control"
        id="OjosPadre"
        placeholder="Color de Ojos del Padre"
        value={candidato.ColorOjosEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Color de Ojos de la Madre </label>
      <input
        type="text"
        className="form-control"
        id="OjosMadre"
        placeholder="Color de Ojo de la Madre"
        value={candidato.ColorOjosElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Complexion del Padre </label>
      <input
        type="text"
        className="form-control"
        id="ComplexionPadre"
        placeholder="Complexion fisica del Padre"
        value={candidato.ComplexionEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Complexion de la Madre </label>
      <input
        type="text"
        className="form-control"
        id="ComplexionMadre"
        placeholder="Complexion fisica de la Madre"
        value={candidato.ComplexionElla}
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

export default Fisicas;
