import { React, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiArrowDropDownLine, RiHomeLine, RiUserLine, RiSettingsLine, RiArrowLeftCircleFill } from 'react-icons/ri';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';




const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handlLogout = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const [expanded, setExpanded] = useState(false);

    const handleSearchIconClick = () => {
        setExpanded(!expanded);
    };
    const menue = <>


        <Link className='font-bold lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to='/'>Home</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to=''>Contact us</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to=''>get</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to='/blog'>Blog</Link>
        <Link className='font-bold text-1xl lg:mr-7 lg:hover:bg-gray-400 lg:rounded-xl' to='/dashboard'>Dashbored</Link>


    </>
    const [drop, setDrop] = useState(false)

    return (
        //     <div className="navbar flex flex-wrap
        //     items-center
        //     justify-between
        //     w-full
        //     py-4
        //     md:py-0
        //     px-4
        //     text-lg 
        //    text-white    lg:p-5 "


        //     >
        //         <div className=" ">

        //             <div className="dropdown text-black">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">

        //                     <svg className="h-5 bg-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                     <li>{menue}</li>
        //                 </ul>
        //             </div>

        //             <img className='w-16 lg:flex hidden bg-white rounded-full h-16' src="https://i.ibb.co/pLZCHbJ/download-removebg-preview.png" alt="" /> <Link to='/' className="btn btn-ghost lg:flex hidden  normal-case text-2xl text-white">  Mobile Bazar  </Link>



        //         </div>
        //         <div className='lg:flex hidden'>
        //             <ul className='flex'> <li>  <input type="text" className='input rounded-lg w-96' placeholder='Find by product name'></input>   </li>  </ul>
        //             <FaSearch className='w-10 h-10 ml-2'></FaSearch>
        //         </div>
        //         <div className="hidden lg:flex">
        //             <ul className="menu menu-horizontal p-0">

        //                 <li>{menue}</li>
        //             </ul>
        //         </div>

        //         <div className="dropdown dropdown-end lg:mr-7 items-center justify-center text-black">
        //             <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        //                 <div className="w-10 rounded-full">
        //                     <FaUser className='w-10 h-10 rounded-full border-b-gray-100  bg-white'></FaUser>
        //                 </div>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
        //                 <li>
        //                     <a className="justify-between hover:btn-ghost">
        //                         Profile

        //                     </a>
        //                 </li>
        //                 <li><a>Settings</a></li>
        //                 <li>

        //                     {user?.email ?

        //                         <>

        //                             <Link onClick={handlLogout} className="">SignOut</Link>
        //                         </>
        //                         : <Link className='' to='/login'>Login</Link>

        //                     }
        //                 </li>
        //             </ul>
        //         </div>

        //     </div>
        <div className='bg-white py-4  shadow-2xl '>
            <div className='hidden lg:flex z-50 flex-col w-11/12 mx-auto lg:flex-row items-center '>
                <div className='basis-2/12 flex justify-center items-center'>
                    <div>
                        <img className='w-10 cursor-pointer lg:flex hidden bg-white rounded-full h-10' src="https://i.ibb.co/pLZCHbJ/download-removebg-preview.png" alt="" />

                    </div>
                    <div>
                        <Link to='/' className="text-[20px] font-semibold">  Mobile Bazar  </Link>
                    </div>
                </div>
                <div className='basis-8/12 flex  items-center justify-center text-center'>
                    <ul className='flex-col lg:flex-row flex gap-3 '>
                        <li>
                            <Link className='hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to=''>Contact us</Link>
                        </li>
                        <li>
                            <Link className='hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to='/blog'>Blog</Link>
                        </li>

                        <div className="dropdown relative items-center  justify-center text-black">
                            <label onClick={() => setDrop(!drop)} tabIndex={0} className="cursor-pointer ">
                                <div className="flex items-center justify-between  text-[15px]">

                                    <h1 className='text-[15px] font-semibold'>
                                        Shop
                                    </h1>
                                    <div>
                                        <RiArrowDropDownLine size={20} className={`h-5 w-5 ${drop ? 'transform rotate-180' : ''}`} />
                                    </div>

                                </div>
                            </label>
                            {
                                drop && <ul tabIndex={0} className="menu absolute  border border-gray-200 top-7 gap-2 right-0 menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-[4px] py-1  w-[100px]">



                                    <li>Xiami</li>
                                    <li>Xiami</li>
                                    <li>Xiami</li>

                                </ul>
                            }
                        </div>
                        <li>
                            {
                                user && <Link className='hover:bg-gray-200 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold' to='/dashboard'>Dashbored</Link>
                            }
                        </li>
                    </ul>
                </div>
                <div className={`${expanded && 'basis-4/12'} z-50  gap-4 flex items-center justify-center`}>
                    <div
                        className={`search-container ${expanded ? 'w-[250px] z-50 border' : 'w-10'
                            } transition-all duration-300  rounded-lg overflow-hidden flex items-center`}
                    >
                        <input
                            type="text"
                            className={`search-bar flex-1 py-2 px-3 outline-none bg-transparent ${!expanded && 'hidden'}`}
                            placeholder="Search..."
                        />
                        {/* <span
                            className="search-icon w-10 h-10 cursor-pointer p-2 text-gray-600"

                        >
                            &#128269;
                        </span> */}

                        {/* <FaSearch  size={25} color='black' /> */}
                        <SearchOutlined onClick={handleSearchIconClick} className='text-2xl cursor-pointer' />
                    </div>
                    {/* <FaUser size={28} color='black' className='cursor-pointer' /> */}
                    <div className="dropdown relative items-center justify-center text-black">
                        <label onClick={() => setDrop(!drop)} tabIndex={0} className="cursor-pointer">
                            <div className="">
                                {/* <FaUser size={25} className=''></FaUser> */}
                                <UserOutlined className='text-2xl' />
                            </div>
                        </label>
                        {
                            drop && <ul tabIndex={0} className="menu absolute  border border-gray-200 top-7 gap-2 right-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-xl py-3  w-[250px]">

                                <div className=''>
                                    <div className='flex items-center gap-2 pl-3  mb-3'>
                                        <img src="" className='w-8 h-8 rounded-full' alt="" />
                                        <div>
                                            <h1 className='text-left font-semibold'>Sadekin Chow</h1>
                                            <p className='text-[12px]'>Chiksha,Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='border border-black mb-2' />
                                <li className=''>
                                    <div className='flex'>
                                        <UserOutlined className='text-xl' />
                                        <div>
                                            <Link to='/profile'>My Account</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className=''>
                                    <div className='flex'>
                                        {/* <MdShoppingCart size={20} color='black' /> */}
                                        <ShoppingCartOutlined className='text-xl' />
                                        <Link to='/dashboard/myorders'>My Order</Link>
                                    </div>
                                </li>
                                <li>

                                    {user?.email ?

                                        <>
                                            <div className='flex'>
                                                <FaSignOutAlt size={20} color='black' />
                                                <Link onClick={handlLogout} className="">SignOut</Link>
                                            </div>
                                        </>
                                        : <div className='flex'>
                                            <FaSignInAlt />  <Link className='' to='/login'>Login</Link>
                                        </div>

                                    }
                                </li>
                            </ul>
                        }
                    </div>



                    <div className='relative'>
                        {/* <FaShoppingCart size={25} color='black' className='cursor-pointer  ' /> */}
                        <ShoppingCartOutlined className='text-2xl cursor-pointer' />
                        <p className='text-red-700 absolute -top-1 left-6   font-bold'>
                            1
                        </p>

                    </div>


                </div>

            </div>

            <nav className="flex items-center md:hidden  justify-between   px-4 w-full text-white">


                {/* Mobile Menu */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX color='black' onClick={toggleMenu} className="text-2xl cursor-pointer" />
                    ) : (
                        <FiMenu color='black' onClick={toggleMenu} className="text-2xl cursor-pointer" />
                    )}
                </div>


                {/* Mobile Menu Links */}
                {isOpen && (
                    <div className="md:hidden  absolute top-0 left-0 w-full flex justify-between transition duration-1000 z-10 bg-gray-800 p-4">

                        <ul className=''>
                            <li className='my-4'>
                                <Link className='hover:bg-border hover:border-gray-300 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold ' to='/'>Home</Link>
                            </li>
                            <li className='my-4'>
                                <Link className='hover:bg-border hover:border-gray-300 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold ' to=''>Contact us</Link>
                            </li>
                            <li className='my-4'>
                                <Link className='hover:bg-border hover:border-gray-300 transition duration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold ' to='/blog'>Blog</Link>
                            </li>
                            <li className='my-4'>
                                {
                                    user && <Link className='hover:bg-gray-200 tra-border hover:border-gray-300uration-400  py-2 px-3 hover:rounded-sm text-[15px] font-semibold ' to='/dashboard'>Dashbored</Link>
                                }
                            </li>
                        </ul>
                        <div>
                            <FiX color='white' onClick={toggleMenu} className="text-2xl  cursor-pointer" />
                        </div>
                    </div>
                )}

                <div className="dropdown relative items-center justify-center text-black">
                    <label onClick={() => setDrop(!drop)} tabIndex={0} className="cursor-pointer">
                        <div className="">
                            <FaUser size={25} className=''></FaUser>
                        </div>
                    </label>
                    {
                        drop && <ul tabIndex={0} className="menu absolute  border border-gray-200 top-11 gap-2 menu-compact dropdown-content right-4 mt-3 p-2 shadow bg-base-100 rounded-xl py-3  w-[250px]">


                            <div className='flex items-center gap-2 pl-3  mb-3'>
                                <img src="" className='w-8 h-8 rounded-full' alt="" />
                                <div>
                                    <h1 className='text-left font-semibold'>Sadekin Chow</h1>
                                    <p className='text-[12px]'>Chiksha,Bangladesh</p>
                                </div>
                            </div>

                            <hr className='border border-black mb-2' />
                            <li className=''>
                                <div className='flex hover:bg-slate-200'>
                                    <FaUser size={20} color='black' />
                                    <div>
                                        <Link to='/dashboard/myorders'>My Account</Link>
                                    </div>
                                </div>
                            </li>
                            <li className=''>
                                <div className='flex'>
                                    <MdShoppingCart size={20} color='black' />
                                    <Link>My Order</Link>
                                </div>
                            </li>
                            <li>

                                {user?.email ?

                                    <>
                                        <div className='flex'>
                                            <FaSignOutAlt size={20} color='black' />
                                            <Link onClick={handlLogout} className="">SignOut</Link>
                                        </div>
                                    </>
                                    : <div className='flex'>
                                        <FaSignInAlt />  <Link className='' to='/login'>Login</Link>
                                    </div>

                                }
                            </li>
                        </ul>
                    }
                </div>
            </nav>

        </div >
    );
};

export default Navbar;