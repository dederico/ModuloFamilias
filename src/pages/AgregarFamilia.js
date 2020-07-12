import React from "react";
import InformacionFamilia from "../components/InformacionFamilia";
import Layout from "../components/Layout";
import CardFamilia from "../components/CardFamilia";
import AddFamilia from "../components/AgregarFamilia";

const AgregarFamilia = () => {
  return (
    <Layout>
      <h1>
        En este formato, deberas llenar la informacion solicitada.
        <InformacionFamilia />
      </h1>
      <AddFamilia />
    </Layout>
  );
};
export default AgregarFamilia;
