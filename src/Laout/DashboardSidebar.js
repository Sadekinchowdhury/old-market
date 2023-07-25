import React, { useContext, useState } from "react";
import { IconContext } from "react-icons";
import {
    AiOutlineDashboard,
    AiOutlineUser,
    AiOutlineLogout,
    AiOutlineMan,
} from "react-icons/ai";
import { FaHouseUser, FaSellcast, FaShoppingBag, FaShoppingBasket, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import UseAdmin from '../UseAdmin/UseAdmin';
import UseBuyer from '../UseBuyer/UseBuyer';

import UseSeller from '../UseSeller/UseSeller';
import { AuthContext } from "../Context/AuthProvider";

const Sidebar = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)

    const [isSeller] = UseSeller(user?.email)
    const [isBuyer] = UseBuyer(user?.email)
    const [open, setOpen] = useState(false)
    return (
        <div className="flex justify-center  items-center py-3">
            <div className="flex h-auto  flex-col  bg-gray-900 text-white">
                <div className="
                w-10/12 mx-auto">
                    <div className="flex mt-10  text-center items-center justify-center mb-8">
                        <img src=''
                            alt=""
                            className="w-20 border-[6px] border-blue-500 h-20 rounded-full mr-4" />
                    </div>
                    <div className='text-center mb-8'>
                        <h2 className="text-xl font-bold">Sadekin</h2>
                        <p className="text-sm">
                            rumel36@gmail.com
                        </p>
                    </div>
                </div>
                <hr className='border-t-2  border-blue-400"' />
                <nav className="flex-grow">
                    <ul className="flex flex-col">
                        <Link
                            to="/dashboard"
                            className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 flex items-center hover:bg-gray-800"
                        >
                            <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                                <AiOutlineDashboard size={20} />
                            </IconContext.Provider>
                            Dashboard
                        </Link>

                        <Link className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 items-center flex hover:scale-110 hover:bg-gray-800" to='/dashboard/myorders'>
                            <FaShoppingBag size={20} className="inline-block mr-2" />
                            My Orders</Link>



                        {
                            isAdmin && <>
                                <Link className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 items-center hover:bg-gray-800 flex gap-2" to='/dashboard/users'>

                                    <FaUserAlt size={20} />
                                    All user</Link>
                                <Link className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 items-center hover:bg-gray-800 flex gap-2" to='/dashboard/seller'>
                                    <FaUserAlt size={20} />
                                    All Sellers</Link>

                                <Link className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 items-center hover:scale-110 hover:bg-gray-800 flex gap-2" to='/dashboard/buyer'>
                                    <FaHouseUser size={20} />
                                    All buyers</Link>

                            </>

                        }

                        {
                            isSeller &&
                            <>
                                <Link className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 items-center hover:bg-gray-800   " to='/dashboard/myproducts'>
                                    <FaShoppingCart size={20} className="inline-block mr-2" />
                                    My products</Link>

                                <Link className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 items-center hover:bg-gray-800" to='/dashboard/add'>
                                    <FaShoppingBasket size={20} className="inline-block mr-2" />
                                    Add product</Link>

                            </>



                        }




                    </ul>
                </nav>
                <hr color='black' className='text-blue-600 ' />

                <div className="flex items-center w-[95%] mx-auto justify-center my-8 ">
                    <button className='text-xl font-semibold bg-white text-black px-3 hover:border-[2px] hover:border-blue-700 transition duration-700 hover:bg-slate-800 hover:text-white py-1 rounded'>

                        <AiOutlineLogout className='inline-block mr-2' />
                        Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
