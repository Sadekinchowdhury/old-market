import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


import { AuthContext } from '../Context/AuthProvider';
import UseAdmin from '../UseAdmin/UseAdmin';
import { Spin } from 'antd';


const AdminRoutes = ({ children }) => {
    const location = useLocation()

    const { user } = useContext(AuthContext)
    const [isAdmin, isLoading] = UseAdmin(user?.email)

    if (isLoading) {
        return <div className='flex items-center h-screen justify-center text-center'><Spin /></div>
    }

    if (user && isAdmin) {
        return children;
    }
    <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoutes;