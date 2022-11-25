import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProducts from '../DashboardUnder/AddProducts/AddProducts';
import AllBuyers from '../DashboardUnder/Allbuyer/Allbuyers';
import AllSellers from '../DashboardUnder/Allsellers/Allsellers';
import Allsellers from '../DashboardUnder/Allsellers/Allsellers';

import Allusers from '../DashboardUnder/Alluser/Allusers';
import MyOrders from '../DashboardUnder/MyOrders/MyOrders';
import Payment from '../DashboardUnder/MyOrders/Payment';

import MyProducts from '../DashboardUnder/MyProducts/MyProducts';
import DashBoard from '../Laout/Dahboard';

import Main from '../Laout/Main';
import Blog from '../Pages/Blog/Blog';
import AllCategoris from '../Pages/Categoris/Categoris';

import Load from '../Pages/Categoris/Load';



import Home from '../Pages/Home/Home';
import Login from '../Shared/Login/Login';
import SignUp from '../Shared/SignUp/SignUp';
import AdminRoutes from './AdminRoutes';
import PrivetRoute from './PrivetRoutes';

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivetRoute> <AllCategoris></AllCategoris></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoris/${params.id}`)
            }, {
                path: '/loadcat',
                element: <Load></Load>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/add',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard',
                element: <AdminRoutes><Allusers></Allusers></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
            },
            {
                path: '/dashboard/seller',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/buyer',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }

])
export default routes;