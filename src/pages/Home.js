import React from "react";
import Layout from "../components/Layout";
// import Familia from "./Familia";
// import Familia2 from "./Familia2";
// import InformacionFamilia from "../components/InformacionFamilia";
import AuthAccount from "./auth/AuthAccount";
import AddFamilia from "./AgregarFamilia";

const Home = () => {
  return (
    <Layout>
      <div class="container-sm">
        <div className="parent white">
          <div className="box green">
            <AuthAccount />
          </div>
        </div>
      </div>
      <AddFamilia />
      <br />
    </Layout>
  );
};
export default Home;
