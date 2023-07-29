import React, { useContext } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Pages/ShopingCart/Spinner';

const Main = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div className=''>
            <Navbar></Navbar>
            {
                loading ? <Spinner /> : <Outlet className="min-h-screen" ></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Main;