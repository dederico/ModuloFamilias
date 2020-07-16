import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  // CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./CardFamilia.scss";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import C from "../components/Familia";

const CardFamilia = (props) => {
  return (
    <div>
      <br></br>

      <Card>
        <CardImg
          top
          width="5%"
          src="https://stock.adobe.com/mx/Download/Watermarked/283435999"
          alt="Card image cap"
        />
        <CardBody>
          {/* <CardTitle>{apellidos}</CardTitle> */}

          <br />
          <CardSubtitle>Con 3 Hijos</CardSubtitle>
          <br />
          <CardText>
            Buscan adoptar por que no han podido tener una hijo desde hace 5
            anos que lo intentan.
          </CardText>
          <Button>Mas informacion</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardFamilia;
