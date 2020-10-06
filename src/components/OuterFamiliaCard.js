import React from "react";
import { useHistory } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./OuterFamiliaCard.scss";
import axios from "axios";
import FamiliaEvaluada from "../components/FamiliaEvaluada";
// import { Link, useParams } from "react-router-dom";
// import C from "../components/Familia";

const OuterFamiliaCard = ({
  id,
  apellidos,
  checkbox,
  ingresosMensuales,
  gastosMensuales,
  vivienda,
  espera,
  tiempo,
  preparacion,
  hijos,
  edad,
  riesgo,
  redesDeApoyo,
  imageId,
  imageUrl,
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
        <CardImg top width="5%" src={imageUrl} alt="Dif" />
        <CardBody>
          <CardTitle>{apellidos}</CardTitle>
          <br />
          <CardSubtitle>ingresos mensuales: ${ingresosMensuales}</CardSubtitle>
          <br />
          <CardSubtitle>gastos mensuales: ${gastosMensuales}</CardSubtitle>
          <br />
          <CardSubtitle>vivienda: {vivienda}</CardSubtitle>
          <br />
          <FamiliaEvaluada
            apellidos={apellidos}
            ingresosMensuales={ingresosMensuales}
            gastosMensuales={gastosMensuales}
            vivienda={vivienda}
            espera={espera}
            tiempo={tiempo}
            preparacion={preparacion}
            hijos={hijos}
            edad={edad}
            riesgo={riesgo}
            redesDeApoyo={redesDeApoyo}
            imageId={imageId}
          />

          <button className="btn btn-danger" onClick={deleteFamilia}>
            Borrar
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OuterFamiliaCard;
