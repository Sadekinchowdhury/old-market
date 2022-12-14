import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseAdmin from '../../UseAdmin/UseAdmin';
import UseSeller from '../../UseSeller/UseSeller';






const SellerRoutes = ({ children }) => {
    const location = useLocation()

    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)

    const [isSeller, isLoading] = UseSeller(user?.email)

    if (isLoading) {
        return <p>looding...</p>
    }

    if (user || isSeller) {
        return children;
    }
    <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default SellerRoutes;