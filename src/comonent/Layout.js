import React from "react";
import Footer from "../comonent/Footer";
import Navbar from "../comonent/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
