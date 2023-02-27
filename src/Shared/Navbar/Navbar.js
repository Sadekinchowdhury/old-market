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

        <Link className='font-bold text-1xl' to='/'>Home</Link>

        <Link className='font-bold text-1xl' to=''>Contact us</Link>
        <Link className='font-bold text-1xl' to=''>get</Link>
        <Link className='font-bold text-1xl' to='/blog'>Blog</Link>
        <Link className='font-bold text-1xl' to='/dashboard'>Dashbored</Link>
        {user?.email ?

            <>

                <Link onClick={handlLogout} className=" px-5 btn font-bold text-1xl">SignOut</Link>
            </>
            : <Link className='font-bold text-1xl' to='/login'>Login</Link>

        }

    </>


    return (
        <div className="navbar flex justify-between bg-gradient-to-r from-purple-600 via-pink-600 text-white to-blue-600">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{menue}</li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost   normal-case text-2xl text-white">Mobile Bazar</Link>
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