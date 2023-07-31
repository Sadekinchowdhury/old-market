import { React, useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import UseAdmin from '../UseAdmin/UseAdmin';
import UseBuyer from '../UseBuyer/UseBuyer';
import UseSeller from '../UseSeller/UseSeller';


import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Sidebar from './DashboardSidebar';
import { motion } from 'framer-motion';
import { AuthContext } from '../Context/AuthProvider';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)

    const [isSeller] = UseSeller(user?.email)
    const [isBuyer] = UseBuyer(user?.email)
    const [open, setOpen] = useState(false)


    const [users, setUsers] = useState({})

    useEffect(() => {
        fetch(`https://old-server.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user?.email])






    return (
        // <div>
        //     <Navbar></Navbar>

        //     <div className="drawer drawer-mobile">
        //         <input id="das-drawer" type="checkbox" className="drawer-toggle" />
        //         <div className="drawer-content bg-slate-400">
        //             <Outlet></Outlet>
        //             {/* <!-- Page content here --> */}


        //         </div>
        //         <div className="drawer-side">
        //             <label htmlFor="das-drawer" className="drawer-overlay"></label>
        //             <ul className="menu p-4 flex bg-base-100 text-base-content">
        //                 {/* <!-- Sidebar content here --> */}



        //                 <li><Link to='/dashboard/myorders'>My Orders</Link></li>



        //                 {
        //                     isAdmin && <>
        //                         <li><Link to='/dashboard'>All user</Link></li>
        //                         <li> <Link to='/dashboard/seller'>All Sellers</Link> </li>

        //                         <li><Link to='/dashboard/buyer'>All buyers</Link></li>

        //                     </>

        //                 }

        //                 {
        //                     isSeller &&
        //                     <>
        //                         <li><Link to='/dashboard/myproducts'>My products</Link></li>
        //                         <li>
        //                             <Link to='/dashboard/add'>Add product</Link>
        //                         </li>
        //                     </>



        //                 }

        //             </ul>

        //         </div>
        //     </div>
        //     <Footer></Footer>
        // </div>
        <div className='w-full'>
            <Navbar />
            <div className="flex flex-col w-full lg:flex-row">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: -0, transition: { duration: 3 } }}
                    exit={{ opacity: 0, x: 50, transition: { duration: 3 } }}
                    className={`bg-gray-900 lg:z-10 z-50 h-auto shadow-2xl w-1/2 px-4 lg:hidden block relative m-0 my-0  mx-0    py-6 transform duration-1000 ${!open ? 'w-1/12 ml-1 rounded-l-full transform duration-1000 z-50' : 'w-2/3'} `}>
                    {
                        open &&
                        <Sidebar users={users} key={users._id} />

                    }
                    <div className='-right-4  bg-gray-900 rounded-r-full top-0 w-10 h-[46px] flex justify-center items-center absolute lg:static lg:hidden transform duration-1000'>

                        {
                            open ? <AiFillLeftCircle onClick={() => setOpen(!open)} size={30} color='white' className='cursor-pointer' /> :

                                <AiFillRightCircle onClick={() => setOpen(!open)} size={30} color='white' className='cursor-pointer' />
                        }

                    </div>
                </motion.div>

                {/* {desktop} */}
                <div className={`bg-gray-900 text-white   shadow-2xl   w-3/12  lg:block hidden   top-0 mx-0 lg:rounded-xl rounded-b-lg py-6 `}>


                    <Sidebar users={users} key={users._id} />



                    {/* <div className='-right-4  bg-gray-900 rounded-r-full top-8 w-14 h-[50px] flex justify-center items-center absolute lg:static lg:hidden'>


                    </div> */}
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
                    exit={{ opacity: 0, x: 50, transition: { duration: 2 } }}
                    className="bg-slate-300 absolute min-h-screen  top-[60px]  lg:static w-full mx-auto lg:w-10/12 lg:m-3 m-0 lg:rounded-xl rounded-none flex-grow p-2">

                    <Outlet></Outlet>
                </motion.div>
            </div>
        </div>
    );
};

export default DashBoard;