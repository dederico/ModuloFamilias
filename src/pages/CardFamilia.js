import React, { useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const CardFamilia = () => {
  const [informacionUsuario] = useState(
    window.sessionStorage.getItem("idToken")
  );

  return (
    <Layout>
      <div class="container-sm">
        <div className="parent white">
          <div className="box green">
            <Card />
            {informacionUsuario}
          </div>
        </div>
      </div>
      <br />
    </Layout>
  );
};
export default CardFamilia;
