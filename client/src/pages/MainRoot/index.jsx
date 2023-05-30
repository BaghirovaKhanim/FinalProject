import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
const MainRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoot;
