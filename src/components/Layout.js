import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <div className="container h-100">
      <Navbar title={title} />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
