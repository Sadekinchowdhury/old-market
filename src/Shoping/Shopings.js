import React from 'react';
import { FaProductHunt, FaShoppingCart } from 'react-icons/fa';
import { AiFillSecurityScan } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'

import { motion } from 'framer-motion';

const Shopings = () => {
    return (
        <motion.div className='w-11/12 mx-auto'>
            <motion.div

                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 3 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 3 } }}

                className='grid  mx-auto md:grid-cols-4 grid-cols-1  gap-3 '>

                <motion.div className="border-gray-300 flex lg:flex-col gap-5 lg:gap-0 shadow-2xl bg-black text-white text-center content-center items-center justify-center py-3 rounded-md border">

                    <div className='flex items-center justify-center text-center'>
                        <FaShoppingCart size={30} color='orange' />
                    </div>

                    <h2 className="text-[16px] pt-1 font-poppins font-semibold text-center">Free Shoping</h2>

                </motion.div>
                <motion.div className="border-gray-300 flex lg:flex-col gap-5 lg:gap-0 shadow-2xl bg-black text-white text-center content-center items-center justify-center py-3 rounded-md border">

                    <div className='flex items-center justify-center text-center'>
                        <BiRefresh size={30} color='orange' />
                    </div>

                    <h2 className="text-[16px] pt-1 font-poppins font-semibold text-center">Secure </h2>

                </motion.div>
                <motion.div className="border-gray-300 flex lg:flex-col gap-5 lg:gap-0 shadow-2xl bg-black text-white text-center content-center items-center justify-center py-3 rounded-md border">

                    <div className='flex items-center justify-center text-center'>
                        <FaProductHunt size={30} color='orange' />
                    </div>

                    <h2 className="text-[16px] pt-1 font-poppins font-semibold text-center">New Product</h2>

                </motion.div>
                <motion.div className="border-gray-300 flex lg:flex-col gap-5 lg:gap-0 shadow-2xl bg-black text-white text-center content-center items-center justify-center py-3 rounded-md border">

                    <div className='flex items-center justify-center text-center'>
                        <AiFillSecurityScan size={30} color='orange' />
                    </div>

                    <h2 className="text-[16px] pt-1 font-poppins font-semibold text-center">Secure </h2>

                </motion.div>


            </motion.div>

        </motion.div >
    );
};

export default Shopings;