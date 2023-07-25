import { RightCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { BiRefresh } from 'react-icons/bi';
import { FaReact, FaShoppingCart, FaCheckCircle, FaShoppingBag } from 'react-icons/fa';
import { MdUpdate } from 'react-icons/md';
import Recharts from './Recharts';
import TopRevenueProductsChart from './PieDash';
import RecentTable from './RecentPayment';
import { FaShoppingBasket } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Dashboard = () => {
    return (
        <div className='lg:p-5 p-2 w-full'>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}

                className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
                <div className='flex items-center justify-around p-5  bg-indigo-500 rounded-sm shadow-2xl'>
                    <div>
                        <FaShoppingCart size={40} />
                    </div>
                    <div>
                        <h1 className='text-[16px] font-semibold text-white'> Today Order</h1>
                        <p className='text-2xl font-semibold text-center text-white'>$2345</p>
                    </div>

                </div>
                <div className='flex items-center gap-5 p-5 justify-center bg-teal-500 rounded-sm shadow-2xl'>
                    <div>
                        <FaShoppingBag size={40} />
                    </div>
                    <div>
                        <h1 className='text-[16px] font-semibold text-white'> This Week Order</h1>
                        <p className='text-2xl font-semibold text-center text-white'>$2345</p>
                    </div>

                </div>
                <div className='flex items-center gap-4 p-5 justify-center bg-cyan-500 rounded-sm shadow-2xl'>
                    <div>
                        <FaShoppingBasket size={40} />
                    </div>
                    <div>
                        <h1 className='text-[16px] font-semibold text-white'> This Month Order</h1>
                        <p className='text-2xl font-semibold text-center text-white'>$2345</p>
                    </div>

                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}

                className='grid grid-cols-1 lg:grid-cols-4 gap-4 w-11/12 py-7 mx-auto'>
                <div className='flex items-center justify-around py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl'>
                    <div>
                        <FaShoppingCart size={30} />
                    </div>
                    <div>
                        <h1 className='text-[14px] font-semibold'> Total Order</h1>
                        <p className='text-xl font-semibold text-center'>87</p>
                    </div>

                </div>
                <div className='flex items-center justify-around py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl'>
                    <div>
                        <BiRefresh size={30} />
                    </div>
                    <div>
                        <h1 className='text-[14px] font-semibold'> Pending Order</h1>
                        <p className='text-xl font-semibold text-center'>37</p>
                    </div>

                </div>
                <div className='flex items-center justify-around py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl'>
                    <div>
                        <MdUpdate size={30} />
                    </div>
                    <div>
                        <h1 className='text-[14px] font-semibold'>Processing Order</h1>
                        <p className='text-xl font-semibold text-center'>5</p>
                    </div>

                </div>
                <div className='flex items-center justify-around py-2 px-2  border border-gray-300 border-l-2 border-l-blue-400  rounded-lg shadow-2xl'>
                    <div>
                        <FaCheckCircle color='green' size={30} />
                    </div>
                    <div>
                        <h1 className='text-[14px] font-semibold'>Order Delivered</h1>
                        <p className='text-xl font-semibold text-center'>45</p>
                    </div>

                </div>


            </motion.div>

            <div className='flex flex-col lg:flex-row gap-6 w-11/12 mx-auto items-center'>
                <Recharts className='w-7/12  mx-auto' />
                <TopRevenueProductsChart className='w-5/12 mx-auto' />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}

                className='mt-10 w-11/12 mx-auto  '>
                <h1 className='py-4 text-xl font-semibold'>Recent Orders</h1>
                <RecentTable />
            </motion.div>
        </div>
    );
};

export default Dashboard;