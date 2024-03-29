import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../DashboardUnder/AddProducts/AddProducts";
import AllBuyers from "../DashboardUnder/Allbuyer/Allbuyers";
import AllSellers from "../DashboardUnder/Allsellers/Allsellers";
import Allusers from "../DashboardUnder/Alluser/Allusers";
import Dashboard from "../DashboardUnder/Dashboard/Dashboard";
import MyOrders from "../DashboardUnder/MyOrders/MyOrders";
import Payment from "../DashboardUnder/MyOrders/Payment";
import MyProducts from "../DashboardUnder/MyProducts/MyProducts";
import DashBoard from "../Laout/Dahboard";
import Main from "../Laout/Main";
import AddvirtisCardModal from "../Pages/AddvirtisCardModal/AddvirtisCardModal";
import Addvirtize from "../Pages/AdvirtiseItem/Addvirtize";
import AllProducts from "../Pages/AllProducts/AllProducts";
import BadRoutes from "../Pages/BadRoute/BadRoutes";
import AllCategoris from "../Pages/Categoris/Categoris";
import Load from "../Pages/Categoris/Load";
import Home from "../Pages/Home/Home";
import MobileDetails from "../Pages/MobileDetails/MobileDetails";
import { MobileProducts } from "../Pages/MobileProducts/MobileProducts";
import ProfileEdit from "../Pages/Profile/Profile";
import ShopingCart from "../Pages/ShopingCart/ShopingCart";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivetRoute from "./PrivetRoutes";
import SellerRoutes from "./SelleRoute/SellerRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [],
      },
      {
        path: "/profile",
        element: <ProfileEdit />,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      { path: "/mobile", element: <MobileProducts /> },
      {
        path: "/shoppingcart",
        element: <ShopingCart />,
      },
      {
        path: "/card_details/:id",
        element: <MobileDetails />,
        loader: ({ params }) =>
          fetch(`https://old-server.vercel.app/card_details/${params.id}`),
      },
      {
        path: "/category/:id",
        element: (
          <PrivetRoute>
            {" "}
            <AllCategoris></AllCategoris>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://old-server.vercel.app/categoris/${params.id}`),
      },
      {
        path: "/loadcat",
        element: <Load></Load>,
      },
      {
        path: "/",
        element: <Addvirtize></Addvirtize>,
      },
      {
        path: "/",
        element: (
          <PrivetRoute>
            <AddvirtisCardModal></AddvirtisCardModal>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoard></DashBoard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/add",
        element: (
          <SellerRoutes>
            <AddProducts></AddProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoutes>
            {" "}
            <MyProducts></MyProducts>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            <Allusers></Allusers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://old-server.vercel.app/booking/${params.id}`),
      },
      {
        path: "/dashboard/seller",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/buyer",
        element: <AllBuyers></AllBuyers>,
      },
    ],
  },
  {
    path: "/*",
    element: <BadRoutes></BadRoutes>,
  },
]);
export default routes;
