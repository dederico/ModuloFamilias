import React from "react";
import Layout from "../components/Layout";
// import Familia from "./Familia";
import Familia2 from "./Familia2";
import InformacionFamilia from "../components/InformacionFamilia";

const Home = () => {
  return (
    <Layout>
      <div class="container-sm">
        <div className="parent white">
          <div className="box green">
            <Familia2 />
            <InformacionFamilia />
          </div>
        </div>
      </div>
      <br />
    </Layout>
  );
};
export default Home;
