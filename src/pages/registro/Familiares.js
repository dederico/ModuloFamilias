import React from "react";
import NavbarRegistro from "../../components/NavbarRegistro";
import "./Familiares.css";

const Familiares = () => {
  return (
    <>
      <NavbarRegistro />
      <main className="main">
        <div className="mainContainer">
          <label htmlFor="title">Estatura del interesado(a)</label>
          <input
            type="number"
            className="input-familiares"
            id="Estatura"
            placeholder="Estatura del interesado(a)"
            // value={candidato.Estatura}
            // onChange={handleChange}
          ></input>
          <label htmlFor="title">Federico Gonzalez Davila</label>
          <input
            type="text"
            className="input-familiares"
            id="nombre"
            placeholder="Federico Jesus Gonzalez Davila"
          />
          <label htmlFor="title">Federico Gonzalez Davila</label>
          <input
            type="text"
            className="input-familiares"
            id="nombre"
            placeholder="Federico Jesus Gonzalez Davila"
          />
          <label htmlFor="title">Federico Gonzalez Davila</label>
          <input
            type="text"
            className="input-familiares"
            id="nombre"
            placeholder="Federico Jesus Gonzalez Davila"
          />
          <label htmlFor="title">Federico Gonzalez Davila</label>
          <input
            type="text"
            className="input-familiares"
            id="nombre"
            placeholder="Federico Jesus Gonzalez Davila"
          />
        </div>

        <aside>
          <img src="../img/dif.png" alt="Dif" />
        </aside>
      </main>
    </>
  );
};

export default Familiares;
