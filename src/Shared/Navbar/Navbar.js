import { React, useContext } from 'react';
import { Link } from 'react-router-dom'

import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)


    const handlLogout = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menue = <>

        <Link to='/'>Home</Link>

        <Link to=''>Contact us</Link>
        <Link to=''>get</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/dashboard'>Dashbored</Link>
        {user?.email ?

            <>

                <button onClick={handlLogout} className="btn btn-outline btn-accent px-5">SignOut</button>
            </>
            : <Link to='/login'>Login</Link>

        }

    </>


    return (
        <div className="navbar flex justify-between text-white bg-blue-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{menue}</li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-yellow-400 normal-case text-2xl">Mobile Bazar</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>{menue}</li>
                </ul>
            </div>
            <label htmlFor="das-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;