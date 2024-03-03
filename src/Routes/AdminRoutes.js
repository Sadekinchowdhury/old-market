import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../Pages/ShopingCart/Spinner";
import UseAdmin from "../UseAdmin/UseAdmin";

const AdminRoutes = ({ children }) => {
  const location = useLocation();

  const { user } = useContext(AuthContext);
  const [isAdmin, isLoading] = UseAdmin(user?.email);

  if (isLoading) {
    return <Spinner />;
  }

  if (user && isAdmin) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
