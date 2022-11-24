import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dahboard from '../Laout/Dahboard';
import Main from '../Laout/Main';
import Blog from '../Pages/Blog/Blog';
import AllCategoris from '../Pages/Categoris/Categoris';
import Categoris from '../Pages/Categoris/Categoris';
import Load from '../Pages/Categoris/Load';


import CategoryCard from '../Pages/Home/CategoryCard';
import Home from '../Pages/Home/Home';
import Login from '../Shared/Login/Login';
import SignUp from '../Shared/SignUp/SignUp';
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
        element: <Dahboard></Dahboard>
    }

])
export default routes;