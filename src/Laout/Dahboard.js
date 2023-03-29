import { React, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
import Footer from '../Shared/Footer/Footer';

import Navbar from '../Shared/Navbar/Navbar';
import UseAdmin from '../UseAdmin/UseAdmin';
import UseBuyer from '../UseBuyer/UseBuyer';

import UseSeller from '../UseSeller/UseSeller';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)

    const [isSeller] = UseSeller(user?.email)
    const [isBuyer] = UseBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="das-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-400">
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


                </div>
                <div className="drawer-side">
                    <label htmlFor="das-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}



                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>



                        {
                            isAdmin && <>
                                <li><Link to='/dashboard'>All user</Link></li>
                                <li> <Link to='/dashboard/seller'>All Sellers</Link> </li>

                                <li><Link to='/dashboard/buyer'>All buyers</Link></li>

                            </>

                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/myproducts'>My products</Link></li>
                                <li>
                                    <Link to='/dashboard/add'>Add product</Link>
                                </li>
                            </>



                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;