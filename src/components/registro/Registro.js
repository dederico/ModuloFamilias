import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../NavbarRegistro";
import "../../components/registro/Registro.css";

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
      case "LugarNacimientoEl":
        setCandidato({
          ...candidato,
          LugarNacimientoEl: event.target.value,
        });
        break;
      case "LugarNacimientoElla":
        setCandidato({
          ...candidato,
          LugarNacimientoElla: event.target.value,
        });
        break;
      case "NacionalidadEl":
        setCandidato({
          ...candidato,
          NacionalidadEl: event.target.value,
        });
        break;
      case "NacionalidadElla":
        setCandidato({
          ...candidato,
          NacionalidadElla: event.target.value,
        });
        break;
      case "EstadoCivilEl":
        setCandidato({
          ...candidato,
          EstadoCivilEl: event.target.value,
        });
        break;
      case "EstadoCivilElla":
        setCandidato({
          ...candidato,
          EstadoCivilElla: event.target.value,
        });
        break;
      case "FechaDeMatrimonio":
        setCandidato({
          ...candidato,
          FechaDeMatrimonio: event.target.value,
        });
        break;
      case "EscolaridadEl":
        setCandidato({
          ...candidato,
          EscolaridadEl: event.target.value,
        });
        break;
      case "EscolaridadElla":
        setCandidato({
          ...candidato,
          EscolaridadElla: event.target.value,
        });
        break;
      case "ProfesionEl":
        setCandidato({
          ...candidato,
          ProfesionEl: event.target.value,
        });
        break;
      case "ProfesionElla":
        setCandidato({
          ...candidato,
          ProfesionElla: event.target.value,
        });
        break;
      case "OcupacionEl":
        setCandidato({
          ...candidato,
          OcupacionEl: event.target.value,
        });
        break;
      case "OcupacionElla":
        setCandidato({
          ...candidato,
          OcupacionElla: event.target.value,
        });
        break;
      case "ReligionEl":
        setCandidato({
          ...candidato,
          ReligionEl: event.target.value,
        });
        break;
      case "ReligionElla":
        setCandidato({
          ...candidato,
          ReligionElla: event.target.value,
        });
        break;
    }
  };

  const createCandidato = () => {
    if (candidato.nombreEl.length > 0) {
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
      <h1>Resgistrate!</h1>

      <label htmlFor="title">Nombre Completo del Padre</label>
      <input
        type="text"
        className="form-control"
        id="NombrePadre"
        placeholder="Nombre Completo del Padre"
        value={candidato.nombreEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Nombre Completo de la Madre</label>
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
      <label htmlFor="title">Lugar de nacimiento del Padre </label>
      <input
        type="text"
        className="form-control"
        id="LugarNacimientoPadre"
        placeholder="Donde nacio el Padre"
        value={candidato.LugarNacimientoEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Lugar de nacimiento de la Madre </label>
      <input
        type="text"
        className="form-control"
        id="LugarNacimientoMadre"
        placeholder="Donde nacio la Madre"
        value={candidato.LugarNacimientoElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Nacionalidad del Padre </label>
      <input
        type="text"
        className="form-control"
        id="NacionalidadPadre"
        placeholder="Nacionalidad del Padre"
        value={candidato.NacionalidadEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Nacionalidad de la Madre </label>
      <input
        type="text"
        className="form-control"
        id="NacionalidadMadre"
        placeholder="Nacionalidad de la Madre"
        value={candidato.NacionalidadElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Estado Civil del Padre </label>
      <input
        type="text"
        className="form-control"
        id="EstadoCivilPadre"
        placeholder="Estado Civil del Padre"
        value={candidato.EstadoCivilEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Estado Civil de la Madre </label>
      <input
        type="text"
        className="form-control"
        id="EstadoCivilMadre"
        placeholder="Estado Civil de la Madre"
        value={candidato.EstadoCivilElla}
        onChange={handleChange}
      />

      <label htmlFor="title">Fecha de Matrimonio </label>
      <input
        type="date"
        className="form-control"
        id="FechaDeMatrimonio"
        placeholder="Fecha del Matrimonio"
        value={candidato.FechaDeMatrimonio}
        onChange={handleChange}
      />
      <label htmlFor="title">Escolaridad </label>
      <input
        type="text"
        className="form-control"
        id="EscolaridadEl"
        placeholder="Escolaridad maxima del Padre"
        value={candidato.EscolaridadEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Escolaridad </label>
      <input
        type="text"
        className="form-control"
        id="EscolaridadElla"
        placeholder="Escolaridad maxima de la Madre"
        value={candidato.EscolaridadElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Profesion </label>
      <input
        type="text"
        className="form-control"
        id="ProfesionEl"
        placeholder="Profesion del Padre"
        value={candidato.ProfesionEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Profesion </label>
      <input
        type="text"
        className="form-control"
        id="ProfesionElla"
        placeholder="Profesion de la Madre"
        value={candidato.ProfesionElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Ocupacion </label>
      <input
        type="text"
        className="form-control"
        id="OcupacionEl"
        placeholder="Ocupacion actual del Padre"
        value={candidato.OcupacionEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Ocupacion </label>
      <input
        type="text"
        className="form-control"
        id="OcupacionElla"
        placeholder="Ocupacion actual de la Madre"
        value={candidato.OcupacionElla}
        onChange={handleChange}
      />
      <label htmlFor="title">Religion </label>
      <input
        type="text"
        className="form-control"
        id="ReligionEl"
        placeholder="Religion del Padre"
        value={candidato.ReligionEl}
        onChange={handleChange}
      />
      <label htmlFor="title">Religion </label>
      <input
        type="text"
        className="form-control"
        id="ReligionElla"
        placeholder="Religion de la Madre"
        value={candidato.ReligionElla}
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
