import { React, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { FaSearch } from 'react-icons/fa'

import { AuthContext } from '../../Context/AuthProvider';



const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)

    const handlLogout = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menue = <>


        <Link className='font-bold lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to='/'>Home</Link>

        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to=''>Contact us</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to=''>get</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to='/blog'>Blog</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to='/dashboard'>Dashbored</Link>


    </>


    return (
        <div className="navbar flex flex-wrap
        items-center
        justify-between
        w-full
        py-4
        md:py-0
        px-4
        text-lg 
       text-white    lg:p-5 "


        >
            <div className=" ">

                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">

                        <svg className="h-5 bg-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{menue}</li>
                    </ul>
                </div>

                <img className='w-16 lg:flex hidden bg-white rounded-full h-16' src="https://i.ibb.co/pLZCHbJ/download-removebg-preview.png" alt="" /> <Link to='/' className="btn btn-ghost lg:flex hidden  normal-case text-2xl text-white">  Mobile Bazar  </Link>



            </div>
            <div className='lg:flex hidden'>
                <ul className='flex'> <li>  <input type="text" className='input rounded-lg w-96' placeholder='Find by product name'></input>   </li>  </ul>
                <FaSearch className='w-10 h-10 ml-2'></FaSearch>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    <li>{menue}</li>
                </ul>
            </div>
            {/* <label htmlFor="das-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
            <div className="dropdown dropdown-end lg:mr-7 items-center justify-center text-black">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='' />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between hover:btn-ghost">
                            Profile

                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li>

                        {user?.email ?

                            <>

                                <Link onClick={handlLogout} className="bg-white px-5 btn font-bold text-1xl lg:mr-7 lg:hover:bg-orange-200  ">SignOut</Link>
                            </>
                            : <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-orange-300 lg:rounded-xl' to='/login'>Login</Link>

                        }
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;