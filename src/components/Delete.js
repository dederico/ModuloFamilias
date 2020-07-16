import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Delete = ({ id }) => {
  const getDeleteFamilia = () => {
    axios
      .delete(`https://adopciones-db12b.firebaseio.com/familias/${id}.json`)
      .then(({ data, status }) => {
        if (status === 200) {
          getDeleteFamilia(data);
        }
      });
  };

  return (
    <button className="btn btn-default" onClick={getDeleteFamilia}>
      <h4>eliminar</h4>
    </button>
  );
};

export default Delete;
