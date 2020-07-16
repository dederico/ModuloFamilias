import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./Familia2.scss";
import { Link } from "react-router-dom";

const items = [
  {
    className: "fotoFamilia",
    src:
      "http://udgtv.com/wp-content/uploads/2019/08/Carlos-slim-Andres-Manuel-Lopez-Obrador-EFE-696x464.jpg",
    altText: "Familia",
    caption: "Fotografia de la familia",
    header: "Familia",
    key: "1",
  },

  {
    className: "fotoFachada",
    src:
      "https://www.liderempresarial.com/wp-content/uploads/2014/06/Carlos_Slim_bmv_americamovil_liderempresarial.jpg",
    altText: "Slide 2",
    caption: "Fotografia de la vivienda por fuera",
    header: "Domicilio",
    key: "2",
  },
  {
    className: "fotoCuarto",
    src: "https://cdn.forbes.com.mx/2017/01/slim_4-e1520353765569-640x360.jpg",
    altText: "Slide 3",
    caption: "Habitacion reservada para la adopcion",
    header: "Habitacion",
    key: "3",
  },
];

const Familia2 = () => (
  <>
    <UncontrolledCarousel items={items} />

    <Link to="/">HOME</Link>
  </>
);

export default Familia2;
