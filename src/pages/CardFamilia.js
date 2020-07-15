import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const CardFamilia = () => {
  return (
    <Layout>
      <div class="container-sm">
        <div className="parent white">
          <div className="box green">
            <Card />
          </div>
        </div>
      </div>
      <br />
    </Layout>
  );
};
export default CardFamilia;
