import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./Familia2.scss";
import { Link } from "react-router-dom";

const items = [
  {
    className: "fotoFamilia",
    src:
      "https://www.psicoactiva.com/wp-content/uploads/2016/01/pareja-mar.jpg",
    altText: "Familia",
    caption: "Fotografia de la familia",
    header: "Familia",
    key: "1",
  },

  {
    className: "fotoFachada",
    src:
      "https://propiedadescom.s3.amazonaws.com/files/600x400/astro-rey-647-real-del-sol-saltillo-coahuila-de-zaragoza-3760630-foto-01.jpg",
    altText: "Slide 2",
    caption: "Fotografia de la vivienda por fuera",
    header: "Domicilio",
    key: "2",
  },
  {
    className: "fotoCuarto",
    src:
      "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1560184734/p/photo/image/3085805/vida_y_espacio-5_faciles_pasos_para_renovar_la_habitaci%C3%B3n_de_tus_hijos-organizar_limpiar_renovar4.jpg",
    altText: "Slide 3",
    caption: "Habitacion reservada para la adopcion",
    header: "Habitacion",
    key: "3",
  },
];

const Familia2 = () => (
  <>
    <UncontrolledCarousel items={items} />

    <Link to="/list/familias">Familias</Link>
  </>
);

export default Familia2;
