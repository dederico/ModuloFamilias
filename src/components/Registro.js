import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Registro = () => {
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
      case "nombreEl":
        setCandidato({
          ...candidato,
          nombreEl: event.target.value,
        });
        break;
      case "nombreElla":
        setCandidato({
          ...candidato,
          nombreElla: event.target.value,
        });
        break;
      case "FechaNacimientoEl":
        setCandidato({
          ...candidato,
          FechaNacimientoEl: event.target.value,
        });
        break;
      case "FechaNacimientoElla":
        setCandidato({
          ...candidato,
          FechaNacimientoElla: event.target.value,
        });
        break;
    }
  };

  const createCandidato = () => {
    if (candidato.nombreEl.length > 0) {
      axios
        .post(
          "https://adopciones-db12b.firebaseio.com/candidatos/-MDKwO6WiKmX9tvVW9mW/candidatos.json",
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
      <h1>Resgistrate!</h1>

      <label htmlFor="title">Nombre </label>
      <input
        type="text"
        className="form-control"
        id="NombrePadre"
        placeholder="Nombre Completo del Padre"
        value={candidato.nombreEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Nombre </label>
      <input
        type="text"
        className="form-control"
        id="NombreMadre"
        placeholder="Nombre Completo de la Madre"
        value={candidato.nombreElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Fecha de Nacimiento Padre </label>
      <input
        type="date"
        className="form-control"
        id="NacimientoPadre"
        placeholder="DD/MM/AA"
        value={candidato.FechaNacimientoEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Fecha de Nacimiento Madre </label>
      <input
        type="date"
        className="form-control"
        id="NacimientoMadre"
        placeholder="DD/MM/AA"
        value={candidato.FechaNacimientoElla}
        onChange={handleChange}
      />
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
