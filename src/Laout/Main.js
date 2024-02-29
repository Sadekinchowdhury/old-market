import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Pages/ShopingCart/Spinner";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="overflow-hidden">
      <Navbar className=""></Navbar>
      {loading ? <Spinner /> : <Outlet className="overflow-hidden"></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Main;
