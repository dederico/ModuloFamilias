import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./OuterFamiliaCard.scss";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import C from "../components/Familia";

const OuterFamiliaCard = ({
  apellidos,
  checkbox,
  ingresosMensuales,
  gastosMensuales,
  vivienda,
}) => {
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

          <Button>Mas informacion</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default OuterFamiliaCard;
