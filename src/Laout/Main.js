import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="overflow-hidden">
      <Navbar className=""></Navbar>
      <Outlet className="overflow-hidden"></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
