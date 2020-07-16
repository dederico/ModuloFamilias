import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./CardFamilia.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import C from "../components/Familia";

const Familia = () => {
  const { id } = useParams();
  const [fam, setFam] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getFamilia();
  }, []);

  const getFamilia = () => {
    axios
      .get(`https://adopciones-db12b.firebaseio.com/familias/${id}.json`)
      .then(({ data, status }) => {
        if (data !== null) {
          setFam(data);
        } else {
          setError("No existe esa familia");
        }
      })
      .catch(({ response }) => {
        setError(response);
      });
  };
};

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
