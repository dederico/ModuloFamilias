import React from "react";
import { useHistory } from "react-router-dom";

import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./OuterFamiliaCard.scss";
import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import C from "../components/Familia";

const OuterFamiliaCard = ({
  id,
  apellidos,
  checkbox,
  ingresosMensuales,
  gastosMensuales,
  vivienda,
}) => {
  const history = useHistory();

  const url = `https://adopciones-db12b.firebaseio.com/familias/${id}.json`;
  const deleteFamilia = () => {
    axios
      .delete(url)
      .then(() => {
        history.push("/list/familias");
      })
      .catch(({ response }) => {
        alert(response);
      });
  };
  return (
    <div className="col-lg-3">
      <Card>
        <CardImg
          top
          width="5%"
          src="https://stock.adobe.com/mx/Download/Watermarked/283435999"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{apellidos}</CardTitle>
          <br />
          <CardSubtitle>ingresos mensuales: ${ingresosMensuales}</CardSubtitle>
          <br />
          <CardSubtitle>gastos mensuales: ${gastosMensuales}</CardSubtitle>
          <br />
          <CardSubtitle>vivienda: {vivienda}</CardSubtitle>
          <br />
          <button className="btn btn-danger" onClick={deleteFamilia}>
            Borrar
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OuterFamiliaCard;
