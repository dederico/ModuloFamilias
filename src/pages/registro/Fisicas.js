import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavbarRegistro from "../../components/NavbarRegistro";
import "../../components/registro/Registro.css";
import "./Fisicas.css";

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
      case "Estatura":
        setCandidato({
          ...candidato,
          Estatura: event.target.value,
        });
        break;

      case "Peso":
        setCandidato({
          ...candidato,
          Peso: event.target.value,
        });
        break;

      case "ColorOjos":
        setCandidato({
          ...candidato,
          ColorOjos: event.target.value,
        });
        break;

      case "Complexion":
        setCandidato({
          ...candidato,
          Complexion: event.target.value,
        });
        break;

      case "Tez":
        setCandidato({
          ...candidato,
          Tez: event.target.value,
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
            history.push(`/familia/${data.nombre}`);
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
      <main>
        <div className="container-fisicas">
          <h1>Resgistra Aqui tu informacion Fisica</h1>
          <label htmlFor="title">Estatura del interesado(a)</label>
          <input
            type="number"
            className="form-control"
            id="Estatura"
            placeholder="Estatura del interesado(a)"
            value={candidato.Estatura}
            onChange={handleChange}
          />
          <label htmlFor="title">Peso del interesado(a) </label>
          <input
            type="number"
            className="form-control"
            id="Peso"
            placeholder="Peso en KG"
            value={candidato.PesoEl}
            onChange={handleChange}
          />

          <label htmlFor="title">Color de Ojose del interesado(a) </label>
          <input
            type="text"
            className="form-control"
            id="OjosPadre"
            placeholder="Color de Ojos del interesado(a)"
            value={candidato.ColorOjosEl}
            onChange={handleChange}
          />

          <label htmlFor="title">Complexion del interesado(a)</label>
          <input
            type="text"
            className="form-control"
            id="ComplexionPadre"
            placeholder="Complexion fisica del interesado(a)"
            value={candidato.ComplexionEl}
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

export default Fisicas;
